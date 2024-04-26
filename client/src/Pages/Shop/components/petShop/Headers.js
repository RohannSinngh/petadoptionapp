import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <Navbar
        style={{
          height: "60px",
          background: "blue",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Container> */}
        <NavLink to="/shop" className="text-decoration-none text-light mx-4">
          <h3 className="text-light">Shop</h3>
        </NavLink>
        <NavLink
          to="/shop/cart"
          className="text-decoration-none text-light mx-4"
        >
          <div id="ex4">
            <span
              className="p1 fa-stack fa-2x has-badge"
              data-count={carts.length}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </NavLink>
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default Headers;
