import { useEffect, useState } from "react";

const empty = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  phone: "",
  address: "",
  bloodType: "",
  allergies: "",
  medications: "",
  conditions: "",
  notes: "",
};

export default function PatientForm({ initial, onSubmit, submitLabel = "Save Record", busy }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initial) {
      setForm({
        ...empty,
        ...initial,
        email: initial.email || "",
        phone: initial.phone || "",
        address: initial.address || "",
        bloodType: initial.bloodType || "",
        allergies: initial.allergies || "",
        medications: initial.medications || "",
        conditions: initial.conditions || "",
        notes: initial.notes || "",
        dateOfBirth: initial.dateOfBirth || "",
        gender: initial.gender || "",
      });
    }
  }, [initial]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.firstName.trim() || !form.lastName.trim() || !form.dateOfBirth || !form.gender) {
      setError("First name, last name, date of birth, and gender are required.");
      return;
    }
    try {
      await onSubmit(form);
    } catch (err) {
      setError(err.message || "Could not save record.");
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          First name
          <input value={form.firstName} onChange={set("firstName")} required />
        </label>
        <label>
          Last name
          <input value={form.lastName} onChange={set("lastName")} required />
        </label>
        <label>
          Date of birth
          <input type="date" value={form.dateOfBirth} onChange={set("dateOfBirth")} required />
        </label>
        <label>
          Gender
          <select value={form.gender} onChange={set("gender")} required>
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={set("phone")} placeholder="Mobile number" />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={set("email")} placeholder="Optional" />
        </label>
        <label className="full">
          Address
          <input value={form.address} onChange={set("address")} placeholder="Seemanchal locality" />
        </label>
        <label>
          Blood type
          <select value={form.bloodType} onChange={set("bloodType")}>
            <option value="">Unknown</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          Allergies
          <textarea
            value={form.allergies}
            onChange={set("allergies")}
            rows={3}
            placeholder="List any known allergies..."
          />
        </label>
        <label className="full">
          Conditions
          <textarea
            value={form.conditions}
            onChange={set("conditions")}
            rows={3}
            placeholder="Active diagnoses and history"
          />
        </label>
        <label className="full">
          Medications
          <textarea
            value={form.medications}
            onChange={set("medications")}
            rows={3}
            placeholder="Current medications and dosing"
          />
        </label>
        <label className="full">
          Clinical notes
          <textarea
            value={form.notes}
            onChange={set("notes")}
            rows={6}
            placeholder="C/O, vitals, Ix, Dx, Rx, advice, follow-up"
          />
        </label>
      </div>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={busy}>
        {busy ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
