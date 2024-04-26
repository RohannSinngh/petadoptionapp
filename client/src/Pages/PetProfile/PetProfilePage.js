import React, { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { featuredPets } from "../../data";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Zoom from "react-medium-image-zoom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AdoptionForm from "../../components/AdoptionForm";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URI } from "../../utils/constants";
import { fetchPetById } from "../../redux/pets/action";
import { getUser } from "../../redux/auth/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PetProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const selectedPet = useSelector((state) => state.pets.selectedPet);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchPetById({ payload: { id } }));
    dispatch(getUser());
  }, [id]);

  const images = useMemo(() =>
    selectedPet?.additionalImages
      ? [
          BACKEND_URI + "/" + selectedPet?.image,
          ...selectedPet?.additionalImages.map(
            (image) => BACKEND_URI + "/" + image
          ),
        ]
      : [BACKEND_URI + "/" + selectedPet?.image]
  );

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ padding: 10 }}
    >
      <Grid item xs={12} md={6}>
        <ImageList sx={{ height: 600 }} variant="woven" cols={3} gap={8}>
          {images?.map((item) => (
            <ImageListItem key={item}>
              <Zoom>
                <img
                  src={`${item}?w=161&fit=crop&auto=format`}
                  srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                  width={160}
                />
              </Zoom>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{selectedPet?.name}</Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          className="line_height_40"
        >
          Breed - {selectedPet?.breed}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          className="line_height_40"
        >
          Category - {selectedPet?.category?.name}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          className="line_height_40"
        >
          Age - {selectedPet?.age}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          className="line_height_40"
        >
          Color - {selectedPet?.color}
        </Typography>

        <Typography variant="subtitle1" paragraph>
          {selectedPet?.description}
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Adopt
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 400, ...style }}>
            <Typography variant="h5" className="form-title">
              Adoption Form
            </Typography>
            {/* <AdoptionForm closeModal={() => setOpen(false)} /> */}
            <AdoptionForm
              closeModal={() => setOpen(false)}
              pet={id}
              user={user}
            />
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default PetProfilePage;
