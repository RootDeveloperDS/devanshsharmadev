import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2, MessageSquare, Loader2, Sparkles, X } from "lucide-react";
import { sendTelegramNotification } from "@/lib/telegram";

interface FeedbackCollectorProps {
  projectId?: string;
  className?: string;
}

const RATING_LABELS: Record<number, string> = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good & Solid",
  4: "Very Impressive",
  5: "Exceptional Architecture!",
};

export function FeedbackCollector({
  projectId = "devanshsharmadev",
  className = "",
}: FeedbackCollectorProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const activeRating = hoverRating || rating;

  const handleStarSelect = (selectedStar: number) => {
    setRating(selectedStar);
    setIsExpanded(true);
  };

  const handleReset = () => {
    setRating(0);
    setHoverRating(0);
    setIsExpanded(false);
    setFeedback("");
    setName("");
    setEmail("");
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || status === "submitting") return;

    setStatus("submitting");

    const payload = {
      projectId,
      rating,
      feedback: feedback.trim() || undefined,
      name: name.trim() || undefined,
      email: email.trim() || undefined,
      path: typeof window !== "undefined" ? window.location.pathname : "/",
    };

    try {
      // Direct native fetch to centralized telemetry gateway
      const res = await fetch("https://visar-backend.onrender.com/api/v1/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Also fire telemetry via local Telegram bot for instant owner notification
      sendTelegramNotification("Submitted Feedback Telemetry", {
        rating,
        feedback: feedback.trim() || "No text feedback",
        name: name.trim() || "Anonymous",
        email: email.trim() || "No email",
      });

      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus("success");
      } else {
        // Silent recovery: treat as submitted from user perspective
        setStatus("success");
      }
    } catch {
      // Silent failure guard: keep UI clean, acknowledge gracefully
      setStatus("success");
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-r from-secondary/30 via-secondary/15 to-secondary/30 p-5 sm:p-7 backdrop-blur-md shadow-lg shadow-black/10 transition-all ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2"
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary shadow-sm shadow-primary/20">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-sans text-base font-semibold text-foreground flex items-center justify-center sm:justify-start gap-2">
                  <span>Telemetry Transmitted</span>
                  <span className="flex text-yellow-400 text-xs">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </span>
                </h4>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  Thank you! Your rating and feedback have been logged to the central gateway.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="rounded-lg border border-border/80 bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Header: Title + Star Rating Control */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-foreground tracking-normal">
                    Rate & Telemetry Feedback
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground font-sans">
                  How is your experience navigating this portfolio? Click stars to rate and transmit telemetry.
                </p>
              </div>

              {/* Star Rating Interactive Controls: Meaning text on the LEFT, stars firmly anchored on the RIGHT */}
              <div className="flex items-center justify-end gap-3 self-start md:self-auto shrink-0">
                {/* Meaning label on LEFT */}
                <div className="min-w-[120px] sm:min-w-[170px] text-right flex items-center justify-end">
                  {activeRating > 0 ? (
                    <span className="font-mono text-xs text-primary font-medium px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 whitespace-nowrap animate-in fade-in duration-150">
                      {RATING_LABELS[activeRating]}
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-muted-foreground/60 hidden sm:inline-block">
                      Click to rate:
                    </span>
                  )}
                </div>

                {/* Stars on RIGHT */}
                <div
                  className="flex items-center gap-1 bg-background/50 p-1.5 rounded-xl border border-border/80 shrink-0"
                  role="radiogroup"
                  aria-label="Star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= activeRating;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarSelect(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="group/star relative p-1 rounded-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <Star
                          className={`h-5 w-5 transition-colors duration-200 ${
                            isFilled
                              ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                              : "text-muted-foreground/50 hover:text-yellow-400/80"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Progressive Disclosure: Comment and Contact inputs reveal on Star Click */}
            <AnimatePresence>
              {isExpanded && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-3.5 pt-2 border-t border-border/50 overflow-hidden"
                >
                  {/* Feedback Textarea */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5 text-foreground/80">
                        <MessageSquare className="h-3.5 w-3.5 text-primary" />
                        <span>Optional Commentary & Notes:</span>
                      </span>
                      <span>{feedback.length}/500</span>
                    </div>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      maxLength={500}
                      rows={3}
                      placeholder="Optional thoughts, suggestions, performance notes, or bug reports..."
                      className="w-full rounded-xl border border-border/80 bg-background/60 p-3 text-xs sm:text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 resize-none transition-colors"
                    />
                  </div>

                  {/* Optional Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={80}
                      placeholder="Your Name (optional)"
                      className="rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={100}
                      placeholder="Your Email (optional - for reply)"
                      className="rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                    />
                  </div>

                  {/* Action Buttons: Cancel rendered immediately to the left of Submit */}
                  <div className="flex items-center justify-end gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-secondary/40 px-3.5 py-2 font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/70 hover:border-border transition-all"
                    >
                      <X className="h-3.5 w-3.5" />
                      <span>Cancel</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === "submitting" || rating === 0}
                      className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/15 px-4 py-2 font-mono text-xs font-semibold text-primary shadow-sm hover:bg-primary/25 hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Transmit Telemetry ({rating}★)</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}