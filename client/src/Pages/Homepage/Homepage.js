import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPet from "../../components/MainFeaturedPet";
import { featuredPets, mainFeaturedPost } from "../../data";
import FeaturedPet from "../../components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../../redux/pets/action";
import allPets from "../../images/pets/allPets.jpg";
import birds from "../../images/pets/birds.jpg";
import cats from "../../images/pets/cats.jpg";
import cows from "../../images/pets/cows.jpg";
import dogs from "../../images/pets/dogs.jpg";
import others from "../../images/pets/others.jpg";
import Home from "../../components/Home";
import ImageSlider from "../../components/HomeCarousel/ImageSlider";

const sections = [{ title: "All Pets", url: "/all", image: allPets }];

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);
  const allCategories = useSelector((state) => state.categories.allCategories);
  const images = [dogs, cats, birds, cows, others];
  useEffect(() => {
    dispatch(fetchAllPets());
  }, []);
  var i = 0;
  return (
    <>
      <MainFeaturedPet post={mainFeaturedPost} />
      <Home
        title="Pet Adoption Center"
        sections={[
          ...sections,
          ...(allCategories &&
            allCategories.map((category) => ({
              title: category.name,
              url: `/${category?._id}`,
              image: images[i++],
            }))),
        ]}
      />
    </>
  );
};

export default Homepage;
