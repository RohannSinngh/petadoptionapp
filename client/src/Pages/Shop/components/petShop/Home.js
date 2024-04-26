import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardData";
import { addToCart } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ImageSlider from "../petShop/ImageSlider";
import Petsdata from "./PetsData";
import Excercise from "./Images/excercise.png";
import Health from "./Images/health.png";
import Petfood from "./Images/petfood.png";
import Girl from "./Images/girl.png";
import Facebook from "./Images/facebook.png";
import Twitter from "./Images/twitter.png";
import Instagram from "./Images/instagram.png";
import Map from "./Images/Mapbg.png";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };
  return (
    <>
      <ImageSlider />
      <div
        className=" bg-dark "
        style={{
          marginTop: "30px",
          padding: "100px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "60%" }}>
          <img
            style={{ width: "800px", height: "400px" }}
            src="https://www.cprime.com/wp-content/uploads/2022/12/cprimebloghow-build-pet-care-app.jpeg"
            alt=""
          />
        </div>
        <div style={{ width: "40%" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              fontFamily: "Arial, sans-serif",
              background:
                "linear-gradient(to right, #f32170,#ff6b08, #cf23cf, #eedd44)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              fontWeight: "bolder",
            }}
          >
            {" "}
            Looking to welcome a furry friend into your loving home?
          </h1>
          <p
            className="d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              padding: "0px 30px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            Pawfect Finds makes pet adoption a smooth and joyful experience. We
            connect you with amazing cats and dogs from local shelters and
            rescues, all waiting for their forever families. Browse adorable
            profiles, learn about each pet's personality, and discover the
            perfect match for your lifestyle. <br />
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#F9D9B4",
                fontWeight: "bold",
                display: "contents",
              }}
            >
              But Pawfect Finds goes beyond{" "}
            </a>
            adoption! We understand the importance of a smooth transition for
            both you and your new pet. That's why we offer a secure and
            convenient way to get everything your furry friend needs. Shop from
            our curated selection of pet essentials, all within the app. From
            comfy beds and delicious food to engaging toys and stylish
            accessories, we have everything to spoil your new companion. Plus,
            enjoy on-time delivery, ensuring a seamless start to your new
            adventure together! <br />{" "}
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#F9D9B4",
                fontWeight: "bold",
                display: "contents",
              }}
            >
              At Pawfect Finds, our love for pets shines through in everything
              we do.{" "}
            </a>
            We believe every animal deserves a loving home. We make adoption
            easy, provide all the supplies you need, and prioritize a
            stress-free experience for both you and your pet. Download Pawfect
            Finds today and embark on a journey of unconditional love and
            pawsome memories!
          </p>
        </div>
      </div>

      <section className="iteam_section mt-4 container">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            background: "black",
            width: "100%",
            margin: "5pc 0pc",
            padding: "8pc 0pc",
            fontSize: "20px",
          }}
        >
          Welcome to pawfect find! <br />
          We provide wide carities of foods for Dogs & cats!
        </h1>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">Product: {element.item}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>
                    <div className="lower_data justify-content-between ">
                      <h5>
                        <a
                          href="/"
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          Category:
                        </a>{" "}
                        {element.category}
                      </h5>
                      <h5>
                        <a
                          href="/"
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          Description:
                        </a>{" "}
                        {element.description}
                      </h5>
                    </div>

                    <div className="lower_data justify-content-between ">
                      <span>
                        {" "}
                        <a
                          href="/"
                          className="mr-2"
                          style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "red",
                            fontSize: "20px",
                          }}
                        >
                          Price:₹{element.lprices}
                        </a>
                      </span>
                      <s>Price:₹{element.fprice}</s>
                    </div>
                    <p className="text-capitalize">
                      <a
                        href="/"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "black",
                          fontSize: "16px",
                        }}
                      >
                        Location:{" "}
                      </a>
                      {element.address}
                    </p>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
          <br />
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              background: "black",
              width: "100%",
              margin: "5pc 0pc",
              padding: "5pc 0pc",
              fontSize: "20px",
            }}
          >
            Welcome to pet's product ! <br />
            We provide wide and best quality Product for our beloving pet's.
          </h1>
          {Petsdata.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">Product: {element.item}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>
                    <div className="lower_data justify-content-between ">
                      <h5>
                        <a
                          href="/"
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          Category:
                        </a>{" "}
                        {element.category}
                      </h5>
                      <h5>
                        <a
                          href="/"
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          Description:
                        </a>{" "}
                        {element.description}
                      </h5>
                    </div>

                    <div className="lower_data justify-content-between ">
                      <span>
                        {" "}
                        <a
                          href="/"
                          className="mr-2"
                          style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "red",
                            fontSize: "20px",
                          }}
                        >
                          Price:₹{element.lprices}
                        </a>
                      </span>
                      <s>Price:₹{element.fprice}</s>
                    </div>
                    <p className="text-capitalize">
                      <a
                        href="/"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "black",
                          fontSize: "16px",
                        }}
                      >
                        Location:{" "}
                      </a>
                      {element.address}
                    </p>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
      <h1
        style={{
          color: "#f4d143",
          display: "flex",
          justifyContent: "center",
          background: "black",
          marginTop: "20px",
          marginBottom: "0px",
          paddingTop: "30px",
          fontSize: "18px",
          letterSpacing: "2px",
        }}
      >
        PET CARE TIPS!
      </h1>

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
              style={{ fontSize: "12px", display: "flex", textAlign: "center" }}
            >
              {" "}
              A nutritious diet is essential for your pet's overall health and
              well-being. Choose food formulated for your pet's age, breed, and
              activity level. Look for ingredients like real meat, whole grains,
              and essential vitamins and minerals.
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
              style={{ fontSize: "12px", display: "flex", textAlign: "center" }}
            >
              {" "}
              Exercise keeps your pet physically and mentally fit. Daily walks,
              playtime, and interactive toys are all important for your pet's
              well-being. Consider the specific needs of your pet - active
              breeds may require more exercise than others. Mental stimulation
              can be provided through training, puzzle toys, and exploring new
              environments.
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
              style={{ fontSize: "12px", display: "flex", textAlign: "center" }}
            >
              {" "}
              Regular vet visits are crucial for preventive care and early
              detection of potential health problems. These checkups allow your
              veterinarian to monitor your pet's development, administer
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
              style={{ fontSize: "12px", display: "flex", textAlign: "center" }}
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
            <img src={Map} alt="" style={{ width: "700px", display: "flex" }} />
          </div>
        </div>
      </div>
      <footer style={{ background: "black", color: "white" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Instagram}
            href=""
            alt=""
            style={{ width: "70px", color: "white" }}
          />
          <img
            src={Twitter}
            href=""
            alt=""
            style={{ width: "70px", color: "white" }}
          />
          <img
            src={Facebook}
            href=""
            alt=""
            style={{ width: "70px", color: "white" }}
          />
        </div>
      </footer>
    </>
  );
};

export default Home;
