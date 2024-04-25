import React, { useState, useEffect } from "react";
import contact from "../images/contact.png";
import { NavLink, useNavigate } from "react-router-dom";

const Contact = () => {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:"50px"
      }}
    >
      <div style={{ }}>
        <div
          /*className="signup-image "*/ style={{
            width: "50vw",
            background: "#3E8EDE",
            color: "white",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "system-ui",
            alignItems:"center",
            flexDirection:"column",
            padding:"10px 50px"
          }}
        >
          <figure>
            <img
              src={contact}
              alt="registration pic"
              style={{width:"80%"}}
            />
          </figure>
          <ul style={{fontSize:"17px", textAlign:"initial"}}>
            <li>
              Have questions or feedback? Get in touch with us! Our team at
              Pawfect Finds is here to assist you and ensure a smooth adoption
              experience.
            </li>
            <li>
              Reach out to Pawfect Finds with your inquiries or suggestions.
              We're eager to hear from you and help you with any pet
              adoption-related queries!
            </li>
            <li>Contact Us</li>
            <li>
              Thank you for considering Pawfect Finds. Your input matters to us
              as we strive to make pet adoption a joyful and fulfilling
              experience for all
            </li>
            <li>
              Maintain a professional yet friendly tone on the "Contact Us"
              page. Use clear contact information, such as email addresses or a
              contact form, and reassure users that their messages will be
              attended to promptly.
            </li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: "600px" }}>
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "40px",
            fontWeight: "bolder",
            fontFamily: "system-ui",
          }}
        >
          GET IN TOUCH WITH US
        </h2>
        <form>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="name"
              style={{
                fontFamily: "math",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{
                padding: " 3px 10px",
                border: "2px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "300px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="email"
              style={{
                fontFamily: "math",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              style={{
                padding: " 3px 10px",
                border: "2px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "300px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="phone"
              style={{
                fontFamily: "math",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              style={{
                padding: " 3px 10px",
                border: "2px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "300px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="message"
              style={{
                fontFamily: "math",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              style={{
                padding: " 3px 10px",
                border: "2px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "300px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
              value={userData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            onClick={contactForm}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "7px",
            }}
          >
            Send
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <h5 style={{ fontFamily: "system-ui" }}>
            Send us your query or Contact us through Social Media
          </h5>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
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
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
