import { useEffect } from "react";
import InstallButton from "../../components/InstallButton";
import IOSInstallGuide from "../../components/IOSInstallGuide";

function setManifest(href) {
  let link = document.querySelector('link[rel="manifest"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "manifest";
    document.head.appendChild(link);
  }
  link.href = href;
}

export default function RiderApp() {
  useEffect(() => {
    setManifest("/manifest-rider.json");
    let meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#198754";
    document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <h2>Rider App</h2>
      <p>Rider app UI here.</p>
      <InstallButton />
      <IOSInstallGuide appName="RiderApp" />
    </div>
  );
}
