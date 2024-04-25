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
import { Container } from "@mui/material";

const sections = [
  { title: "All Pets", url: "/" },
  // { title: 'Dogs', url: '/dogs/661057af1ea2368cfe7f9f19' },
  // { title: 'Cats', url: '/cats/' },
  // { title: 'Birds', url: '/birds' },
  // { title: 'Others', url: '/others' },
];

const UserRouters = () => {
  const allCategories = useSelector((state) => state.categories.allCategories);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <SnackBarComponent />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title="Pet Adoption Center"
              sections={[
                ...sections, // Spread existing sections
                ...(allCategories &&
                  allCategories.map((category) => ({
                    title: category.name,
                    url: `/${category?._id}`,
                  }))),
              ]}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/adopt"
          element={
            <PetAdoption sections={sections} title="Pet Adoption Center" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/">
          <Route index element={<Homepage />} />
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
