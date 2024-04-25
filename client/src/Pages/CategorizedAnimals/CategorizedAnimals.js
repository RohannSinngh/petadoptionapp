import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FeaturedPet from "../../components/FeaturedPet";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPetsByCategory } from "../../redux/pets/action";

const CategorizedAnimalsPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const petsByCategory = useSelector((store) => store.pets.petsByCategory);

  useEffect(() => {
    dispatch(fetchPetsByCategory({ payload: category }));
  }, [category]);

  return (
    <Grid container spacing={4}>
      {petsByCategory?.map((pet, index) => (
        <FeaturedPet key={index} pet={pet} />
      ))}
    </Grid>
  );
};

export default CategorizedAnimalsPage;
