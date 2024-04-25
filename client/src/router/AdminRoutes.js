import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../components/layouts/admin-layouts";
import { AdminUsers } from "../components/Admin-Users";
import { AdminAdoption } from "../components/Admin-Adoption";

const AdminRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/adoption" element={<AdminAdoption />} />
      </Routes>
    </>
  );
};

export default AdminRouters;
