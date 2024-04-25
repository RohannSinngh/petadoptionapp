import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Logout from "../components/Logout";
import { AdminLayout } from "../components/Admin/admin-layouts";
import { AdminUsers } from "../components/Admin/Admin-Users";
import { AdminAdoption } from "../components/Admin/Admin-Adoption";
import AdminNavbar from "../components/Admin/AdminNavbar";

const AdminRouters = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <Routes>
        <Route path="/" element={<AdminLayout />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/adoption" element={<AdminAdoption />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default AdminRouters;
