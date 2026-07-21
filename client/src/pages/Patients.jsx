import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ageFromDob, fetchPatients, formatDate, fullName } from "../lib/api.js";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await fetchPatients({ search, gender, bloodType });
        if (live) setPatients(data);
      } catch (err) {
        if (live) setError(err.message);
      } finally {
        if (live) setLoading(false);
      }
    }, 180);
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [search, gender, bloodType]);

  return (
    <div className="page stack-lg">
      <section className="hero-panel compact">
        <div>
          <h2>Patient Directory</h2>
          <p>Search and manage SHIPLA clinical records across Seemanchal.</p>
        </div>
        <Link className="btn btn-primary" to="/patients/new">
          Add Patient
        </Link>
      </section>

      <section className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, phone, address, condition…"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <select value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
          <option value="">All blood types</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </section>

      {error ? <p className="form-error">{error}</p> : null}

      <section className="panel table-panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Blood</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="muted">
                  Loading…
                </td>
              </tr>
            ) : null}
            {!loading && patients.length === 0 ? (
              <tr>
                <td colSpan={6} className="muted">
                  No patients found matching your criteria.
                </td>
              </tr>
            ) : null}
            {patients.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link to={`/patients/${p.id}`}>{fullName(p)}</Link>
                </td>
                <td>{ageFromDob(p.dateOfBirth)}</td>
                <td>{p.gender || "—"}</td>
                <td>{p.phone || p.email || "—"}</td>
                <td>{p.bloodType || "—"}</td>
                <td>{formatDate(p.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
