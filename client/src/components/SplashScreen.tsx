import { useEffect, useState } from "react";

const SPLASH_SESSION_KEY = "asnb-wheel-spin-intro-seen";
const SPLASH_DURATION_MS = 5_000;
const SPLASH_EXIT_MS = 380;
const SPLASH_FAILSAFE_MS = 6_000;

function hasSeenSplash() {
  try {
    return window.sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markSplashSeen() {
  try {
    window.sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
  } catch {
    // Storage can be unavailable in privacy-restricted browsers.
  }
}

function AlloyWheel() {
  return (
    <div className="splash-wheel-shell" aria-hidden="true">
      <img className="splash-wheel-image" src="/assets/Wheel-Design.png" alt="" />
    </div>
  );
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => !hasSeenSplash());
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;

    markSplashSeen();
    document.body.classList.add("splash-is-active");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 420 : SPLASH_DURATION_MS;
    let exitTimer: number | undefined;
    let finishTimer: number | undefined;

    const finish = () => {
      setExiting(true);
      exitTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 220 : SPLASH_EXIT_MS);
    };

    finishTimer = window.setTimeout(finish, duration);
    const failSafe = window.setTimeout(finish, SPLASH_FAILSAFE_MS);

    return () => {
      if (finishTimer) window.clearTimeout(finishTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
      window.clearTimeout(failSafe);
      document.body.classList.remove("splash-is-active");
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) document.body.classList.remove("splash-is-active");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen${exiting ? " splash-screen-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading A’s n B Mobile Detailing"
    >
      <div className="splash-depth" aria-hidden="true" />
      <div className="splash-content">
        <AlloyWheel />
        <p className="splash-label">Loading your shine...</p>
        <div className="splash-progress" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
