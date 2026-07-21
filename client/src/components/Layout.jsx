import { NavLink, Outlet, useLocation } from "react-router-dom";
import Background from "./Background.jsx";

const titles = {
  "/": "Overview",
  "/patients": "Patient Directory",
  "/patients/new": "New Record",
};

export default function Layout() {
  const { pathname } = useLocation();
  const title = titles[pathname] || "Patient Profile";

  return (
    <div className="app-shell">
      <Background />
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <strong>SHIPLA</strong>
            <small>by DMTA</small>
          </div>
        </div>
        <div className="doctor-chip">
          <span className="doctor-avatar">TA</span>
          <div>
            <strong>Dr. MD Tauqeer Ahmad</strong>
            <small>Seemanchal · Planetary Life</small>
          </div>
        </div>
        <nav className="side-nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/patients">Patients</NavLink>
          <NavLink to="/patients/new" className="nav-new">
            New Patient
          </NavLink>
        </nav>
        <div className="system-status">
          <span className="status-dot" />
          <div>
            <strong>System Status</strong>
            <small>All systems operational</small>
          </div>
        </div>
      </aside>

      <div className="main-pane">
        <header className="topbar">
          <div>
            <p className="eyebrow">SHIPLA Clinical Desk</p>
            <h1>{title}</h1>
          </div>
          <p className="topbar-tagline">
            Seemanchal Health Infrastructure · Planetary Life Advancement
          </p>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
