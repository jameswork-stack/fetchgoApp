import { useEffect, useState } from "react";

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isInStandaloneMode() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

export default function IOSInstallGuide({ appName = "App" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isIos() && !isInStandaloneMode());
  }, []);

  if (!show) return null;

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 12,
      borderRadius: 8,
      maxWidth: 420,
      marginTop: 12
    }}>
      <strong>Add "{appName}" to Home Screen</strong>
      <p style={{ margin: "6px 0" }}>
        Tap <em>Share</em> in Safari (the icon at the bottom of the screen) then choose <em>Add to Home Screen</em>.
      </p>
      <button onClick={() => setShow(false)} style={{ marginTop: 6 }}>Dismiss</button>
    </div>
  );
}
