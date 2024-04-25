import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../redux/pets/action";
import FeaturedPet from "./FeaturedPet";

const AllPets = () => {
  const dispatch = useDispatch();
  const allPets = useSelector((store) => store.pets.allPets);

  useEffect(() => {
    dispatch(fetchAllPets());
  }, []);

  return (
    <Grid container spacing={4}>
      {allPets?.map((pet, index) => (
        <FeaturedPet key={index} pet={pet} />
      ))}
    </Grid>
  );
};

export default AllPets;
