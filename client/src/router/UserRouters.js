import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import PetAdoption from "../components/Petadoption";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";
import Homepage from "../Pages/Homepage/Homepage";
import CategorizedAnimalsPage from "../Pages/CategorizedAnimals/CategorizedAnimals";
import PetProfilePage from "../Pages/PetProfile/PetProfilePage";
import SnackBarComponent from "../components/SnackbarComponent";
import Test from "../components/Text";
import AllPets from "../components/AllPets";

const UserRouters = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <SnackBarComponent />
      </div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/all" element={<AllPets />} />
          <Route path=":category">
            <Route index element={<CategorizedAnimalsPage />} />
            <Route index={false} path=":id" element={<PetProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default UserRouters;
