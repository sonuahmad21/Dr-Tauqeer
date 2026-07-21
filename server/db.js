import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const dataFile = path.join(dataDir, "patients.json");

function ensureStore() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ nextId: 1, patients: [] }, null, 2));
  }
}

function readStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeStore(store) {
  ensureStore();
  fs.writeFileSync(dataFile, JSON.stringify(store, null, 2));
}

export function listPatients({ search, gender, bloodType } = {}) {
  let patients = [...readStore().patients];

  if (search) {
    const q = search.toLowerCase().trim();
    patients = patients.filter((p) => {
      const blob = [p.firstName, p.lastName, p.phone, p.email, p.address, p.conditions]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });
  }
  if (gender) patients = patients.filter((p) => p.gender === gender);
  if (bloodType) patients = patients.filter((p) => p.bloodType === bloodType);

  return patients.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

export function getPatient(id) {
  return readStore().patients.find((p) => p.id === Number(id)) || null;
}

export function createPatient(payload) {
  const store = readStore();
  const now = new Date().toISOString();
  const patient = {
    id: store.nextId++,
    firstName: payload.firstName?.trim() || "",
    lastName: payload.lastName?.trim() || "",
    dateOfBirth: payload.dateOfBirth || null,
    gender: payload.gender || null,
    email: payload.email?.trim() || null,
    phone: payload.phone?.trim() || null,
    address: payload.address?.trim() || null,
    bloodType: payload.bloodType || null,
    allergies: payload.allergies?.trim() || null,
    medications: payload.medications?.trim() || null,
    conditions: payload.conditions?.trim() || null,
    notes: payload.notes?.trim() || null,
    createdAt: now,
    updatedAt: now,
  };
  store.patients.push(patient);
  writeStore(store);
  return patient;
}

export function updatePatient(id, payload) {
  const store = readStore();
  const idx = store.patients.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;

  const current = store.patients[idx];
  const next = {
    ...current,
    firstName: payload.firstName?.trim() ?? current.firstName,
    lastName: payload.lastName?.trim() ?? current.lastName,
    dateOfBirth: payload.dateOfBirth ?? current.dateOfBirth,
    gender: payload.gender ?? current.gender,
    email: payload.email?.trim() || null,
    phone: payload.phone?.trim() || null,
    address: payload.address?.trim() || null,
    bloodType: payload.bloodType || null,
    allergies: payload.allergies?.trim() || null,
    medications: payload.medications?.trim() || null,
    conditions: payload.conditions?.trim() || null,
    notes: payload.notes?.trim() || null,
    updatedAt: new Date().toISOString(),
  };
  store.patients[idx] = next;
  writeStore(store);
  return next;
}

export function deletePatient(id) {
  const store = readStore();
  const before = store.patients.length;
  store.patients = store.patients.filter((p) => p.id !== Number(id));
  if (store.patients.length === before) return false;
  writeStore(store);
  return true;
}

export function getStats() {
  const patients = readStore().patients;
  const byGenderMap = {};
  const byBloodMap = {};
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  for (const p of patients) {
    if (p.gender) byGenderMap[p.gender] = (byGenderMap[p.gender] || 0) + 1;
    if (p.bloodType) byBloodMap[p.bloodType] = (byBloodMap[p.bloodType] || 0) + 1;
  }

  return {
    total: patients.length,
    byGender: Object.entries(byGenderMap).map(([label, count]) => ({ label, count })),
    byBloodType: Object.entries(byBloodMap).map(([label, count]) => ({ label, count })),
    addedThisMonth: patients.filter((p) => new Date(p.createdAt) >= monthStart).length,
  };
}

export function recentPatients(limit = 5) {
  return [...readStore().patients]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, Number(limit) || 5);
}
