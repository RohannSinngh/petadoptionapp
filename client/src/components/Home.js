import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import Petfood from "../images/petfood.png";
import Excercise from "../images/excercise.png";
import Health from "../images/health.png";
import Girl from "../images/girl.png";

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
    <>
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
          </Typography>
        </Toolbar>
        <Grid
          container
          sx={{ padding: "20px" }}
          spacing={2}
          justifyContent="center"
        >
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
                    height="240"
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
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#3387DA",
          }}
        >
          <div style={{ width: "40%" }}>
            <img
              style={{ width: "608px" }}
              src="https://people.com/thmb/BJO005QLK6f4YcZHW0iONQxoJ1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/family-adopt-dog-6c2f1eedd593433f85549e94e07af8bf.jpg"
              alt=""
            />
          </div>

          <div style={{ width: "60%", color: "white", padding: "0px 15px" }}>
            {" "}
            <h1 style={{ fontWeight: "bold" }}>About us</h1>
            <p>
              At Pawfect Finds, we are passionate about connecting loving pet
              owners with their ideal companions while offering a convenient
              platform for all your pet care needs. Our mission is to make the
              journey of pet adoption joyful and hassle-free, ensuring that
              every furry friend finds their forever home. <br /> In addition to
              our adoption services, Pawfect Finds hosts a curated e-commerce
              section featuring a wide range of high-quality pet products and
              nutritious food options. From cozy beds and stylish accessories to
              premium pet food and treats, we provide everything you need to
              keep your furry family members healthy and happy.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "0px", height: "400px" }}>
          <div
            style={{
              width: "30%",
              background: "pink",
              fontSize: "2rem",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <h1 style={{ transform: "rotate(270deg)", fontWeight: "bolder" }}>
              what we do
            </h1>{" "}
          </div>
          <div
            style={{
              width: "50%",
              background: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 20px",
            }}
          >
            <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
              {" "}
              We facilitate the adoption process by connecting loving pet owners
              with their ideal companions. Our platform offers a diverse
              selection of adoptable pets, including dogs, cats, and other small
              animals. We prioritize the well-being of our animals and ensure
              that each adoption is a successful and fulfilling experience for
              both the pet and the adopter. <br /> <br />
              In addition to our adoption services, we provide a comprehensive
              e-commerce platform for all your pet care needs. Explore our
              curated selection of high-quality pet products, ranging from cozy
              beds and stylish accessories to premium pet food and nutritious
              treats. Our goal is to offer pet owners convenient access to
              essential supplies that promote the health and happiness of their
              beloved companions.
            </p>
          </div>
          <div style={{ width: "20%", background: "red" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#DA51EA",
          }}
        >
          <div style={{ width: "40%" }}>
            <img
              style={{ width: "608px" }}
              src="https://missionpossiblepune.org/wp-content/uploads/2018/09/pune-shelter.jpg"
              alt=""
            />
          </div>

          <div style={{ width: "60%", color: "white", padding: "0px 15px" }}>
            {" "}
            <h1 style={{ fontWeight: "bold" }}>Our Mission!</h1>
            <p>
              At Pawfect Finds, our mission is to foster lasting connections
              between pets and families by facilitating seamless adoptions and
              promoting responsible pet ownership. We are committed to providing
              a curated selection of high-quality pet products and food,
              ensuring the health, comfort, and happiness of every furry friend.
              Join us in our dedication to creating a compassionate community
              where every pet adoption is a Pawfect experience. <br /> This
              condensed mission statement captures the essence of your pet
              adoption app's goals: facilitating adoptions, promoting
              responsible pet ownership, offering quality pet products, and
              fostering a compassionate community centered around pet welfare
              and happiness. Feel free to adjust the wording to best align with
              the ethos of your app!
            </p>
          </div>
        </div>
        <div
          style={{
            background: "black",
            display: "flex",
            marginBottom: "20px",
            color: "white",
            padding: "60px 10px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Petfood} style={{ width: "70px" }} alt="" />
            </div>

            <div>
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Feed Your Pet a High-Quality Diet:
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {" "}
                A nutritious diet is essential for your pet's overall health and
                well-being. Choose food formulated for your pet's age, breed,
                and activity level. Look for ingredients like real meat, whole
                grains, and essential vitamins and minerals.
              </p>
            </div>
          </div>
          <div
            style={{ background: "white", width: "5px", marginRight: "20px" }}
          ></div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Excercise} style={{ width: "70px" }} alt="" />
            </div>

            <div>
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Provide Regular Exercise and Mental Stimulation:
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {" "}
                Exercise keeps your pet physically and mentally fit. Daily
                walks, playtime, and interactive toys are all important for your
                pet's well-being. Consider the specific needs of your pet -
                active breeds may require more exercise than others. Mental
                stimulation can be provided through training, puzzle toys, and
                exploring new environments.
              </p>
            </div>
          </div>
          <div
            style={{ background: "white", width: "5px", marginRight: "20px" }}
          ></div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Health} style={{ width: "70px" }} alt="" />
            </div>

            <div>
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Schedule Regular Checkups with Your Veterinarian:
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {" "}
                Regular vet visits are crucial for preventive care and early
                detection of potential health problems. These checkups allow
                your veterinarian to monitor your pet's development, administer
                vaccinations, and address any concerns you may have.
              </p>
            </div>
          </div>
          <div
            style={{ background: "white", width: "5px", marginRight: "20px" }}
          ></div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Girl} style={{ width: "70px" }} alt="" />
            </div>

            <div>
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Provide Plenty of Love and Attention:
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {" "}
                Pets thrive on love and interaction. Show your pet you care with
                cuddles, playtime, and quality time spent together. This
                strengthens your bond and promotes your pet's emotional
                well-being.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "black", marginBottom: "20px" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "22px",
              position: "relative",
              top: "25px",
            }}
          >
            OUR PARTNER & CONNECTIONS
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "70px 5px",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                gap: "7px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>10+</h1>
                <p style={{ fontWeight: "bold" }}>We Deliver in 10+ areas</p>
              </div>
              <div
                style={{ background: "white", width: "3px", height: "190px" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>50+</h1>
                <p style={{ fontWeight: "bold" }}>
                  We Deliver more than 50+ product
                </p>
              </div>
              <div
                style={{ background: "white", width: "3px", height: "190px" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>20+</h1>
                <p style={{ fontWeight: "bold" }}>
                  we have connection with more than 20+ stores.
                </p>
              </div>
              <div
                style={{ background: "white", width: "3px", height: "190px" }}
              ></div>
            </div>
            <div>
              <img
                src={Map}
                alt=""
                style={{ width: "700px", display: "flex" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
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
