async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export function fetchPatients(params = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v) qs.set(k, v);
  });
  const suffix = qs.toString() ? `?${qs}` : "";
  return request(`/api/patients${suffix}`);
}

export function fetchStats() {
  return request("/api/patients/stats");
}

export function fetchRecent(limit = 5) {
  return request(`/api/patients/recent?limit=${limit}`);
}

export function fetchPatient(id) {
  return request(`/api/patients/${id}`);
}

export function createPatient(payload) {
  return request("/api/patients", { method: "POST", body: JSON.stringify(payload) });
}

export function updatePatient(id, payload) {
  return request(`/api/patients/${id}`, { method: "PATCH", body: JSON.stringify(payload) });
}

export function deletePatient(id) {
  return request(`/api/patients/${id}`, { method: "DELETE" });
}

export function fullName(p) {
  return `${p.firstName || ""} ${p.lastName || ""}`.replace(/\s+/g, " ").trim();
}

export function ageFromDob(dob) {
  if (!dob) return "—";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "—";
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age -= 1;
  return `${age} yrs`;
}

export function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
