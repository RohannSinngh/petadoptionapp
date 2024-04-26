import { Grid } from "@mui/material"
import AdoptionCard from "./AdoptionCard"
import { fetchAllAdoptions } from "../../redux/adoption/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AdminAdoption = () => {
    const dispatch = useDispatch();

    const { adoption } = useSelector((store) => store);


    useEffect(() => {
        dispatch(fetchAllAdoptions());
      }, []);

      
    return (
        <Grid container spacing={3}>
        {adoption?.alladoption.map((adoption) => (
          <Grid key={adoption._id} item xs={12}>
            <AdoptionCard adoption={adoption} />
          </Grid>
        ))}
      </Grid>
    )
}
 