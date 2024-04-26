import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { BACKEND_URI } from "../utils/constants";

function FeaturedPet({ pet }) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
        onClick={() => navigate(`/${pet?.category._id}/${pet?._id}`)}
      >
        <CardMedia
          component="img"
          sx={{
            width: "50%",
            height: 250,
            objectFit: "cover",
            borderTopLeftRadius: { xs: "8px", md: 0 },
            borderBottomLeftRadius: { xs: "8px", md: 0 },
          }}
          image={BACKEND_URI + "/" + pet?.image}
          alt={pet?.imageLabel}
        />

        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { xs: "16px", md: "24px" },
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {pet?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Breed - {pet?.breed}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Category - {pet?.category?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Age - {pet?.age}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Color - {pet?.color}
          </Typography>
          <Typography variant="body1" paragraph>
            {pet?.description.length > 20
              ? pet?.description.substring(0, 20) + "..."
              : pet?.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

FeaturedPet.propTypes = {
  pet: PropTypes.shape({
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    category: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FeaturedPet;
