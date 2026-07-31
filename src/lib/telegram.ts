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

// Helper to safely get IP and rough location with strict timeout (1.5s max)
async function fetchIpMetadata(): Promise<IpInfo | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const response = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

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
  }
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
    // 1. Check environment toggle and credentials
    const isEnabled = import.meta.env.VITE_ENABLE_TELEGRAM_NOTIFY !== "false";
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_USER_ID;

    if (!isEnabled || !botToken || !chatId) {
      // Quiet return if feature disabled or missing environment keys
      return;
    }

    // 2. Cooldown check per action to prevent user button spamming
    const now = Date.now();
    const lastSent = actionCooldownMap.get(action) || 0;
    if (now - lastSent < COOLDOWN_MS) {
      return; // Skip duplicate rapid triggers
    }
    actionCooldownMap.set(action, now);

    // 3. Gather legal, non-sensitive client metadata
    const device = getDeviceDetails();
    const screenRes = typeof window !== "undefined" ? `${window.screen.width}x${window.screen.height}` : "Unknown";
    const language = typeof navigator !== "undefined" ? navigator.language : "Unknown";
    const pagePath = typeof window !== "undefined" ? window.location.pathname + window.location.search : "/";
    const referrer = typeof document !== "undefined" && document.referrer ? document.referrer : "Direct / None";
    const timestamp = new Date().toLocaleString("en-US", { timeZoneName: "short" });

    // Fetch IP metadata asynchronously with fast timeout
    const ipData = await fetchIpMetadata();

    // 4. Format structured Telegram HTML message with clear project header
    let messageHtml = `<b>🌐 [Devansh Portfolio] — Action Alert</b>\n\n`;
    messageHtml += `⚡ <b>Action:</b> <code>${escapeHtml(action)}</code>\n`;

    if (details && Object.keys(details).length > 0) {
      messageHtml += `\n📋 <b>Details:</b>\n`;
      for (const [key, val] of Object.entries(details)) {
        if (val !== undefined && val !== null && val !== "") {
          messageHtml += `  • <b>${escapeHtml(key)}:</b> <code>${escapeHtml(String(val))}</code>\n`;
        }
      }
    }

    messageHtml += `\n👤 <b>Visitor Metadata:</b>\n`;
    messageHtml += `  • <b>Device:</b> ${escapeHtml(device)}\n`;
    messageHtml += `  • <b>Screen:</b> ${escapeHtml(screenRes)}\n`;
    messageHtml += `  • <b>Language:</b> ${escapeHtml(language)}\n`;
    messageHtml += `  • <b>Page:</b> <code>${escapeHtml(pagePath)}</code>\n`;
    messageHtml += `  • <b>Referrer:</b> <code>${escapeHtml(referrer)}</code>\n`;

    if (ipData) {
      const locStr = [ipData.city, ipData.region, ipData.country_name].filter(Boolean).join(", ");
      messageHtml += `  • <b>IP:</b> <code>${escapeHtml(ipData.ip || "N/A")}</code> (${escapeHtml(locStr || "Unknown Location")})\n`;
      if (ipData.org) {
        messageHtml += `  • <b>ISP / Org:</b> ${escapeHtml(ipData.org)}\n`;
      }
    }

    messageHtml += `  • <b>Time:</b> ${escapeHtml(timestamp)}`;

    // 5. Send payload via Telegram Bot API
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageHtml,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }).catch(() => {
      // Fail silently without interrupting UI
    });
  } catch {
    // Fail silently on any unexpected error
  }
}

// Utility function to sanitize text for Telegram HTML parse mode
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
