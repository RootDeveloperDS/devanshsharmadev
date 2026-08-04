// Global Telegram Notification Utility for Portfolio
// Safely collects legal visitor metadata and dispatches structured alerts with anti-spam cooldown.

const COOLDOWN_MS = 2500; // 2.5 seconds cooldown per action type to prevent button spamming
const actionCooldownMap: Map<string, number> = new Map();

interface NotificationDetails {
  [key: string]: string | number | boolean | undefined | null;
}

interface IpInfo {
  ip?: string;
  city?: string;
  region?: string;
  country_name?: string;
  org?: string;
}

// Queue for pending notifications that haven't been sent yet
interface PendingNotification {
  action: string;
  details?: NotificationDetails;
  timestamp: string;
  pagePath: string;
}

const pendingQueue: PendingNotification[] = [];
let ipFetchPromise: Promise<IpInfo | null> | null = null;
let isFlushing = false;

// Setup visibilitychange listener for guaranteed delivery on exit
if (typeof window !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && pendingQueue.length > 0) {
      flushQueue(true);
    }
  });
}

// Helper to safely get IP and rough location with strict timeout (1.5s max)
async function fetchIpMetadata(): Promise<IpInfo | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 1500);

  try {
    const response = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
    });

    if (!response.ok) return null;
    const data = await response.json();
    return {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country_name: data.country_name,
      org: data.org,
    };
  } catch {
    // Graceful silent fallback if adblocker blocks request or network times out
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

function getCachedIpMetadata(): IpInfo | null {
  try {
    const cached = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("portfolio_ip_meta") : null;
    if (cached) return JSON.parse(cached) as IpInfo;
  } catch {
    // ignore
  }
  return null;
}

function triggerIpFetch() {
  if (!ipFetchPromise) {
    ipFetchPromise = fetchIpMetadata().then(data => {
      if (data && typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("portfolio_ip_meta", JSON.stringify(data));
      }
      return data;
    });
  }
  return ipFetchPromise;
}

// Parse readable Browser and OS from userAgent
function getDeviceDetails(): string {
  if (typeof window === "undefined" || !navigator) return "Unknown Device";
  const ua = navigator.userAgent;

  let os = "Unknown OS";
  if (ua.includes("Win")) os = "Windows";
  else if (ua.includes("Mac")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

  let browser = "Browser";
  if (ua.includes("Edg/")) browser = "Edge";
  else if (ua.includes("Chrome/")) browser = "Chrome";
  else if (ua.includes("Safari/") && !ua.includes("Chrome/")) browser = "Safari";
  else if (ua.includes("Firefox/")) browser = "Firefox";

  const isMobile = /Mobi|Android/i.test(ua) ? "Mobile" : "Desktop";
  return `${browser} on ${os} (${isMobile})`;
}

// Utility function to sanitize text for Telegram HTML parse mode
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function flushQueue(immediate = false) {
  if (pendingQueue.length === 0 || isFlushing) return;

  const isEnabled = import.meta.env.VITE_ENABLE_TELEGRAM_NOTIFY !== "false";
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_USER_ID;

  if (!isEnabled || !botToken || !chatId) {
    pendingQueue.length = 0; // Clear queue if disabled
    return;
  }

  isFlushing = true;

  try {
    let ipData = getCachedIpMetadata();

    // If not immediate (user didn't close tab), we can wait for IP fetch
    if (!ipData && !immediate) {
      ipData = await triggerIpFetch();
    }

    // Process items in queue
    while (pendingQueue.length > 0) {
      const item = pendingQueue.shift();
      if (!item) continue;

      const device = getDeviceDetails();
      const screenRes = typeof window !== "undefined" ? `${window.screen.width}x${window.screen.height}` : "Unknown";
      const language = typeof navigator !== "undefined" ? navigator.language : "Unknown";
      const referrer = typeof document !== "undefined" && document.referrer ? document.referrer : "Direct / None";

      let messageHtml = `<b>🌐 [Devansh Portfolio] — Action Alert</b>\n\n`;
      messageHtml += `⚡ <b>Action:</b> <code>${escapeHtml(item.action)}</code>\n`;

      if (item.details && Object.keys(item.details).length > 0) {
        messageHtml += `\n📋 <b>Details:</b>\n`;
        for (const [key, val] of Object.entries(item.details)) {
          if (val !== undefined && val !== null && val !== "") {
            messageHtml += `  • <b>${escapeHtml(key)}:</b> <code>${escapeHtml(String(val))}</code>\n`;
          }
        }
      }

      messageHtml += `\n👤 <b>Visitor Metadata:</b>\n`;
      messageHtml += `  • <b>Device:</b> ${escapeHtml(device)}\n`;
      messageHtml += `  • <b>Screen:</b> ${escapeHtml(screenRes)}\n`;
      messageHtml += `  • <b>Language:</b> ${escapeHtml(language)}\n`;
      messageHtml += `  • <b>Page:</b> <code>${escapeHtml(item.pagePath)}</code>\n`;
      messageHtml += `  • <b>Referrer:</b> <code>${escapeHtml(referrer)}</code>\n`;

      if (ipData) {
        const locStr = [ipData.city, ipData.region, ipData.country_name].filter(Boolean).join(", ");
        messageHtml += `  • <b>IP:</b> <code>${escapeHtml(ipData.ip || "N/A")}</code> (${escapeHtml(locStr || "Unknown Location")})\n`;
        if (ipData.org) {
          messageHtml += `  • <b>ISP / Org:</b> ${escapeHtml(ipData.org)}\n`;
        }
      } else if (immediate) {
        messageHtml += `  • <b>IP:</b> <i>Fetching... (Visitor closed page too quickly)</i>\n`;
      }

      messageHtml += `  • <b>Time:</b> ${escapeHtml(item.timestamp)}`;

      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      // Use fire-and-forget with keepalive
      fetch(telegramUrl, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageHtml,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }).catch(() => {});
    }
  } finally {
    isFlushing = false;
  }
}

/**
 * Global helper to send Telegram notification for user actions.
 * @param action Human readable action name (e.g. "Downloaded Resume", "Visited Overview Tab")
 * @param details Optional key-value pair of additional details
 */
export async function sendTelegramNotification(
  action: string,
  details?: NotificationDetails
): Promise<void> {
  try {
    // Cooldown check per action to prevent user button spamming
    const now = Date.now();
    const lastSent = actionCooldownMap.get(action) || 0;
    if (now - lastSent < COOLDOWN_MS) {
      return; // Skip duplicate rapid triggers
    }
    actionCooldownMap.set(action, now);

    // Pre-trigger the IP fetch so it starts loading in the background immediately
    if (!getCachedIpMetadata()) {
      triggerIpFetch();
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZoneName: "short" });
    const pagePath = typeof window !== "undefined" ? window.location.pathname + window.location.search : "/";

    // Add to pending queue
    pendingQueue.push({
      action,
      details,
      timestamp,
      pagePath
    });

    // Attempt to flush queue normally
    flushQueue();
  } catch {
    // Fail silently on any unexpected error
  }
}
