import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecent, fetchStats, fullName, formatDate } from "../lib/api.js";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const [s, r] = await Promise.all([fetchStats(), fetchRecent(5)]);
        if (!live) return;
        setStats(s);
        setRecent(r);
      } catch (err) {
        if (live) setError(err.message);
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => {
      live = false;
    };
  }, []);

  const topBlood = stats?.byBloodType?.length
    ? [...stats.byBloodType].sort((a, b) => b.count - a.count)[0].label
    : "—";

  return (
    <div className="page stack-lg">
      <section className="hero-panel">
        <div>
          <h2>Welcome back, Dr. MD Tauqeer Ahmad</h2>
          <p>Here is a summary of your SHIPLA patient records today.</p>
        </div>
        <Link className="btn btn-primary" to="/patients/new">
          New Patient
        </Link>
      </section>

      {error ? <p className="form-error">{error}</p> : null}

      <section className="stat-rail">
        <article>
          <span>Total patients</span>
          <strong>{loading ? "…" : stats?.total ?? 0}</strong>
        </article>
        <article>
          <span>Added this month</span>
          <strong>{loading ? "…" : stats?.addedThisMonth ?? 0}</strong>
        </article>
        <article>
          <span>Top blood group</span>
          <strong>{loading ? "…" : topBlood}</strong>
        </article>
        <article>
          <span>Gender groups</span>
          <strong>{loading ? "…" : stats?.byGender?.length ?? 0}</strong>
        </article>
      </section>

      <div className="dash-grid">
        <section className="panel">
          <div className="panel-head">
            <div>
              <h3>Recently Added Patients</h3>
              <p>The latest records added to the directory.</p>
            </div>
            <Link to="/patients">View All</Link>
          </div>
          <ul className="recent-list">
            {loading ? <li className="muted">Loading…</li> : null}
            {!loading && recent.length === 0 ? <li className="muted">No patients yet.</li> : null}
            {recent.map((p) => (
              <li key={p.id}>
                <Link to={`/patients/${p.id}`}>
                  <strong>{fullName(p)}</strong>
                  <span>
                    {p.gender || "—"} · {formatDate(p.createdAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <h3>Demographics</h3>
              <p>Patient distribution</p>
            </div>
          </div>
          <div className="demo-block">
            <h4>By gender</h4>
            <ul className="bar-list">
              {(stats?.byGender || []).map((g) => (
                <li key={g.label}>
                  <span>{g.label}</span>
                  <div className="bar-track">
                    <i style={{ width: `${stats.total ? (g.count / stats.total) * 100 : 0}%` }} />
                  </div>
                  <em>{g.count}</em>
                </li>
              ))}
              {!stats?.byGender?.length ? <li className="muted">No data yet</li> : null}
            </ul>
            <h4>By blood type</h4>
            <ul className="chip-row">
              {(stats?.byBloodType || []).map((b) => (
                <li key={b.label}>
                  {b.label} <strong>{b.count}</strong>
                </li>
              ))}
              {!stats?.byBloodType?.length ? <li className="muted">No data yet</li> : null}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
