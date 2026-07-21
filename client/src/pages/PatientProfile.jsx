import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PatientForm from "../components/PatientForm.jsx";
import {
  ageFromDob,
  deletePatient,
  fetchPatient,
  formatDate,
  fullName,
  updatePatient,
} from "../lib/api.js";

export default function PatientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const load = async () => {
    setError("");
    try {
      setPatient(await fetchPatient(id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  const onSave = async (form) => {
    setBusy(true);
    try {
      const updated = await updatePatient(id, form);
      setPatient(updated);
      setEditing(false);
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async () => {
    setBusy(true);
    try {
      await deletePatient(id);
      navigate("/patients");
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  if (error && !patient) return <p className="form-error">{error}</p>;
  if (!patient) return <p className="muted">Loading profile…</p>;

  return (
    <div className="page stack-lg">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Patient Profile</p>
          <h2>{fullName(patient)}</h2>
          <p>
            {patient.gender || "—"} · {ageFromDob(patient.dateOfBirth)} · DOB{" "}
            {formatDate(patient.dateOfBirth)}
            {patient.bloodType ? ` · ${patient.bloodType}` : ""}
          </p>
        </div>
        <div className="action-row">
          <button className="btn btn-ghost" type="button" onClick={() => setEditing((v) => !v)}>
            {editing ? "Cancel Edit" : "Edit Profile"}
          </button>
          <button className="btn btn-danger" type="button" onClick={() => setConfirmDelete(true)}>
            Delete Record
          </button>
          <Link className="btn btn-ghost" to="/patients">
            Back
          </Link>
        </div>
      </section>

      {confirmDelete ? (
        <section className="panel warn-panel">
          <h3>Delete this record?</h3>
          <p>The record will be permanently removed.</p>
          <div className="action-row">
            <button className="btn btn-danger" type="button" disabled={busy} onClick={onDelete}>
              {busy ? "Deleting…" : "Confirm Delete"}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setConfirmDelete(false)}>
              Keep Record
            </button>
          </div>
        </section>
      ) : null}

      {editing ? (
        <section className="panel form-panel">
          <PatientForm initial={patient} onSubmit={onSave} busy={busy} submitLabel="Update Record" />
        </section>
      ) : (
        <div className="profile-grid">
          <section className="panel">
            <h3>Contact</h3>
            <dl className="detail-list">
              <div>
                <dt>Phone</dt>
                <dd>{patient.phone || "—"}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{patient.email || "—"}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{patient.address || "—"}</dd>
              </div>
            </dl>
          </section>
          <section className="panel">
            <h3>Allergies & Intolerances</h3>
            <p className="pre">{patient.allergies || "No allergies recorded."}</p>
          </section>
          <section className="panel">
            <h3>Conditions</h3>
            <p className="pre">{patient.conditions || "No conditions recorded."}</p>
          </section>
          <section className="panel">
            <h3>Medications</h3>
            <p className="pre">{patient.medications || "No medications recorded."}</p>
          </section>
          <section className="panel full">
            <h3>Clinical notes</h3>
            <p className="pre">{patient.notes || "No notes yet."}</p>
          </section>
        </div>
      )}
    </div>
  );
}
