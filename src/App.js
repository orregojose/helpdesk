import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegisterTicket from "./pages/RegisterTicket";
import ConsultTickets from "./pages/ConsultTickets";
import Report from "./pages/Report";
import Profile from "./pages/Profile";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-ticket" element={<RegisterTicket />} />
        <Route path="/consult-tickets" element={<ConsultTickets />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
