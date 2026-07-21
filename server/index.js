import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import {
  listPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
  getStats,
  recentPatients,
} from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production";
const dataFile = path.join(__dirname, "..", "data", "patients.json");

if (!fs.existsSync(dataFile)) {
  await import("./seed.js");
}

app.use(cors());
app.use(express.json({ limit: "1mb" }));

function requireFields(body, fields) {
  return fields.filter((f) => !body?.[f] || String(body[f]).trim() === "");
}

app.get("/api/patients", (req, res) => {
  const { search, gender, bloodType } = req.query;
  res.json(listPatients({ search, gender, bloodType }));
});

app.get("/api/patients/stats", (_req, res) => {
  res.json(getStats());
});

app.get("/api/patients/recent", (req, res) => {
  res.json(recentPatients(req.query.limit));
});

app.get("/api/patients/:id", (req, res) => {
  const patient = getPatient(req.params.id);
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
});

app.post("/api/patients", (req, res) => {
  const missing = requireFields(req.body, ["firstName", "lastName", "dateOfBirth", "gender"]);
  if (missing.length) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(", ")}` });
  }
  const patient = createPatient(req.body);
  res.status(201).json(patient);
});

app.patch("/api/patients/:id", (req, res) => {
  const patient = updatePatient(req.params.id, req.body);
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
});

app.delete("/api/patients/:id", (req, res) => {
  const ok = deletePatient(req.params.id);
  if (!ok) return res.status(404).json({ error: "Patient not found" });
  res.status(204).end();
});

if (isProd) {
  const dist = path.join(__dirname, "..", "client", "dist");
  app.use(express.static(dist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(dist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`SHIPLA patient directory listening on http://localhost:${PORT}`);
});
