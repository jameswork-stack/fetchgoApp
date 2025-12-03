import { Routes, Route, Link } from "react-router-dom";
import CustomerApp from "./apps/customer/CustomerApp";
import RiderApp from "./apps/rider/RiderApp";
import AdminApp from "./apps/admin/AdminApp";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>3-in-1 PWA — Customer / Rider / Admin</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/customer">Customer</Link>
        <Link to="/rider">Rider</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/customer/*" element={<CustomerApp />} />
        <Route path="/rider/*" element={<RiderApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="*" element={<div>Select an app above.</div>} />
      </Routes>
    </div>
  );
}
