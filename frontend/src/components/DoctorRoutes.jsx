import { Navigate, Route, Routes } from "react-router-dom";
import AppointmentManagement from "../pages/doctorPages/AppointmentManagement";
import AppointmentTimeSlot from "../pages/doctorPages/AppointmentTimeSlot";
import CreatePrescriptionScreen from "../pages/doctorPages/CreatePrescriptionScreen";
import ManagePrescription from "../pages/doctorPages/ManagePrescription";
import PatientDetail from "../pages/doctorPages/PatientDetails";
import PatientRecordAccess from "../pages/doctorPages/PatientRecordAccess";
import PrescriptionView from "../pages/doctorPages/PrescriptionView";
import TeleConsultationScreen from "../pages/doctorPages/TeleConsultationScreen";
import CreatePrescriptionForm from "./CreatePrescriptionForm";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProfileScreen from "../pages/adminPages/ProfileScreen";
import ChatPage from "../pages/patientPages/ChatPage";
import EditAppointment from "../pages/doctorPages/EditAppointment";
import DoctorMeetingConference from "../pages/doctorPages/DoctorMeetingConference";

const DoctorRoutes = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={"doctor"} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/appointment-management" element={<AppointmentManagement />} />
            <Route path="/appointment-time-slot" element={<AppointmentTimeSlot />} />
            <Route path="/edit-appointment" element={<EditAppointment />} />
            <Route path="/patient-record-access" element={<PatientRecordAccess />} />
            <Route path="/patient-detail/:id" element={<PatientDetail />} />
            <Route path="/prescription-tools/create" element={<CreatePrescriptionScreen />} />
            <Route path="/prescription-view/:id" element={<PrescriptionView />} />
            <Route path="/create-prescription/:id" element={<CreatePrescriptionForm />} />
            <Route path="/prescription-tools/manage" element={<ManagePrescription />} />
            <Route path="/teleconsultation" element={<TeleConsultationScreen />} />
            <Route path="/doctor-chat" element={<ChatPage />} />
            <Route path="/doctorMeetingConference/:appointmentId" element={<DoctorMeetingConference />} />
            <Route path="/" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <DoctorManagement /> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorRoutes;
