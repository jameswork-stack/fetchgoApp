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

export default function AdminApp() {
  useEffect(() => {
    setManifest("/manifest-admin.json");
    let meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#dc3545";
    document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <h2>Admin App</h2>
      <p>Admin app UI here.</p>
      <InstallButton />
      <IOSInstallGuide appName="AdminApp" />
    </div>
  );
}
