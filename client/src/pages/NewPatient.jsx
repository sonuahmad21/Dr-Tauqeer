import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientForm from "../components/PatientForm.jsx";
import { createPatient } from "../lib/api.js";

export default function NewPatient() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (form) => {
    setBusy(true);
    setStatus("");
    try {
      const patient = await createPatient(form);
      setStatus("Patient record created");
      navigate(`/patients/${patient.id}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page stack-lg">
      <section className="hero-panel compact">
        <div>
          <h2>New Patient</h2>
          <p>Create a clinical record for the SHIPLA directory.</p>
        </div>
      </section>
      <section className="panel form-panel">
        <PatientForm onSubmit={onSubmit} busy={busy} submitLabel="Save Record" />
        {status ? <p className="form-ok">{status}</p> : null}
      </section>
    </div>
  );
}
