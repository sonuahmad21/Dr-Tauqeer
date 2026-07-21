import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const dataFile = path.join(dataDir, "patients.json");

const now = new Date().toISOString();

const demo = {
  nextId: 4,
  patients: [
    {
      id: 1,
      firstName: "Amina",
      lastName: "Khatoon",
      dateOfBirth: "1988-03-14",
      gender: "female",
      email: null,
      phone: "9800000001",
      address: "Line Bazar, Purnea",
      bloodType: "B+",
      allergies: "Dust",
      medications: "Tab Pan 40 BBF",
      conditions: "Migraine follow-up",
      notes: "Demo record for SHIPLA clinic workflow.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 2,
      firstName: "Rafiq",
      lastName: "Alam",
      dateOfBirth: "1975-11-02",
      gender: "male",
      email: null,
      phone: "9800000002",
      address: "Chitragupt Nagar, Araria",
      bloodType: "O+",
      allergies: "None known",
      medications: "Lifestyle advice",
      conditions: "Hypertension screening",
      notes: "Demo Seemanchal outreach patient.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 3,
      firstName: "Sana",
      lastName: "Parveen",
      dateOfBirth: "1996-07-21",
      gender: "female",
      email: null,
      phone: "9800000003",
      address: "Kishanganj",
      bloodType: "A+",
      allergies: "Penicillin",
      medications: "Iron + Vit D protocol",
      conditions: "Anemia evaluation",
      notes: "Demo pediatric-to-adult continuum note.",
      createdAt: now,
      updatedAt: now,
    },
  ],
};

fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(dataFile, JSON.stringify(demo, null, 2));
console.log(`Seeded ${demo.patients.length} demo patients to ${dataFile}`);
