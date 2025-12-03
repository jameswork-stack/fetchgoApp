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

export default function CustomerApp() {
  useEffect(() => {
    setManifest("/manifest-customer.json");
    // Optionally update theme-color meta tag:
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = "#0d6efd";
    return () => {
      // optional: reset manifest to generic or remove
      // setManifest("/manifest-customer.json"); // leave as-is or set to default
    };
  }, []);

  return (
    <div>
      <h2>Customer App</h2>
      <p>Customer app UI here.</p>
      <InstallButton />
      <IOSInstallGuide appName="CustomerApp" />
    </div>
  );
}
