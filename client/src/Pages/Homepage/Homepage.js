import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPet from "../../components/MainFeaturedPet";
import { featuredPets, mainFeaturedPost } from "../../data";
import FeaturedPet from "../../components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../../redux/pets/action";
import Home from "../../components/Home";

const sections = [{ title: "All Pets", url: "/all" }];

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);
  const allCategories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    dispatch(fetchAllPets());
  }, []);

  return (
    <>
      <MainFeaturedPet post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {/* define the spacing between the components childs */}
        {/* {pets?.map((pet) => (
          <FeaturedPet key={pet._id} pet={pet} />
        ))} */}
        <Home
          title="Pet Adoption Center"
          sections={[
            ...sections,
            ...(allCategories &&
              allCategories.map((category) => ({
                title: category.name,
                url: `/${category?._id}`,
              }))),
          ]}
        />
      </Grid>
    </>
  );
};

export default Homepage;
