import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import {
  useDisclosure,
  useToast,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { authContext } from "../context/AuthContext";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [pincode, setPincode] = useState({
    city: "",
    pincode: "",
  });
  const { form, logout, userData } = useContext(authContext);
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useContext(cartContext);
  const toast = useToast({
    position: "top",
    title: "Please Login",
    containerStyle: {
      maxWidth: "100%",
    },
  });

  function handleChange(e) {
    setPincode({ ...pincode, [e.target.name]: e.target.value });
  }

  console.log(pincode);
  const handleLogout = () => {
    // Perform logout action
    logout();

    // Clear cart items
    setCartItems([]);

    // Show a toast message indicating successful logout
    toast({
      title: "Logged out successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <div className="navbar1">
        <div className="nav1">
          <Link to="/">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
              alt="logo"
              className="img-fluid"
              id="logo"
            />
          </Link>
          <div></div>
          <div id="pick-address" className="pincode">
            <div>
              <img
                src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
                alt="pin-add"
              />
              <p style={{ marginTop: "1px", marginBottom: "0rem" }}>
                Express delivery to
              </p>
            </div>
            <button ref={btnRef} onClick={onOpen}>
              {pincode.pincode} {pincode.city}
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Choose your Location</DrawerHeader>

                <DrawerBody>
                  <label htmlFor="city" className="p-2">
                    City:
                  </label>
                  <Input
                    placeholder="city name"
                    name="city"
                    onChange={handleChange}
                  />
                  <label htmlFor="pincode" className="p-2">
                    Pincode:
                  </label>
                  <Input
                    placeholder="pincode"
                    type={"number"}
                    name="pincode"
                    onChange={handleChange}
                  />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      alert("Your address is available to deliver");
                    }}
                  >
                    Save
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="download-app">
            <i className="fas fa-mobile-alt"></i>
            <p style={{ marginTop: "1px", marginBottom: "0rem" }}>
              <a
                href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643?mt=8"
                target="_blank"
              >
                Download App
              </a>
            </p>
          </div>
          <ul>
            <li id="open-login">
              <i className="fa-regular fa-user"></i>
              <p style={{ marginTop: "1px", marginBottom: "0rem" }}>
                {userData && userData.length > 0 ? (
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => {
                      toast();
                    }}
                  >
                    Hello, Log In
                  </Link>
                )}
              </p>
            </li>
            <li className="offers">
              <a href="#">
                <i className="fa-regular fa-percentage"></i>
                <p style={{ marginTop: "1px", marginBottom: "0rem" }}>
                  <Link to="/offers" className="navLink">
                    Offers
                  </Link>
                </p>
              </a>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
              <p style={{ marginTop: "1px", marginBottom: "0rem" }}>
                <Link to="/cart" className="navLink">
                  <button type="button" className="btn btn-success">
                    cart
                    <span className="badge badge-light">
                      {cartItems.length}
                    </span>
                  </button>
                </Link>
              </p>
            </li>
          </ul>
        </div>
        {/* menubar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    <Link to="/medicine">Medicine</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/labtests">Lab Tests</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/healthcare-products">Health Care</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/health-blogs"> Health Blogs</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PLUS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/value-store">Value Store</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
