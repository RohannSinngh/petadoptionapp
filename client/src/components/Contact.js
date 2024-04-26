import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import contact from "../images/contact.png";

const Contact = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
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
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        setUserData(data); // Assuming the response is an object with user data
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      setUserData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
        <div
          style={{
            background: "#3E8EDE",
            color: "white",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Get in touch with us
          </Typography>
          <img src={contact} alt="Contact" style={{ width: "80%" }} />
          <Typography variant="body1" gutterBottom>
            Have questions or feedback? Get in touch with us! Our team at
            Pawfect Finds is here to assist you and ensure a smooth adoption
            experience.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <form onSubmit={contactForm}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            name="message"
            value={userData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Send
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          Send us your query or contact us through social media:
        </Typography>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a
              href="https://www.instagram.com/pawfect.finds.pets"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Ibiza2412"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Ibiza2412"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Facebook
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Contact;
