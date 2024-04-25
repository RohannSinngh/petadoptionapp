import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

function Home({ sections }) {
  const location = useLocation();
  const [userName, setUsername] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/getdata", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();

        if (data.name) {
          setUsername(data.name);
          setShow(true);
        } else {
          setUsername("");
          setShow(false);
        }
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          <div className="home-page">
            <div className="home-div">
              <h4>
                HELLO! {userName.toUpperCase()}{" "}
                {show
                  ? "🐱HAPPY TO SEE YOU BACK🐶"
                  : "🐱WELCOME TO PAWFECT FINDS!🐶"}
              </h4>
            </div>
          </div>
          <Link to="/">
            <img src="images/logo.png" alt="logo" width="77" />
          </Link>
        </Typography>
      </Toolbar>
      <Grid container spacing={2} justifyContent="center">
        {sections.map((section) => (
          <Grid item key={section.url} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea
                component={Link}
                to={section.url}
                className={
                  location.pathname === section.url ? "activeNavLink" : ""
                }
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={section.image}
                  alt={section.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {section.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Home.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
