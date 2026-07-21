import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Patients from "./pages/Patients.jsx";
import NewPatient from "./pages/NewPatient.jsx";
import PatientProfile from "./pages/PatientProfile.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/new" element={<NewPatient />} />
        <Route path="/patients/:id" element={<PatientProfile />} />
      </Route>
    </Routes>
  );
}
