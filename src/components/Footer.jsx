import React from "react";
import "../styles/footer.css";
import {
  Box,
  Grid,
  SimpleGrid,
  Stack,
  Image,
  Button,
  Text,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const Footer = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <footer>
      <hr />
      <Stack
        direction={isLargeScreen ? "horizontal" : "column"}
        gap={isLargeScreen ? "130px" : "20px"}
        marginLeft={isLargeScreen ? "17%" : "0"}
        padding="30px"
        marginBottom="20px"
      >
        <Center>
          <Image
            width={isLargeScreen ? "210px" : "40%"}
            src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
          />
        </Center>
        <Stack gap="30px" marginTop="10px">
          <Text fontSize="19px" textAlign="left" color="gray.600">
            Download the App for Free
          </Text>
          <Stack direction="horizontal" gap="20px">
            <a
              href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                leftIcon={
                  <FaGooglePlay style={{ width: "25px", height: "30px" }} />
                }
                bg="#586166"
                fontSize="12px"
                color="white"
                width="175px"
                height="56px"
                style={{ display: "flex", justifyContent: "left" }}
                _hover={{ bg: "#3e4346" }}
              >
                Google Play
              </Button>
            </a>
            <a
              href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                leftIcon={<FaApple style={{ width: "25px", height: "30px" }} />}
                bg="#586166"
                fontSize="12px"
                color="white"
                width="175px"
                height="56px"
                style={{ display: "flex", justifyContent: "left" }}
                _hover={{ bg: "#3e4346" }}
              >
                App Store
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
      <div className="container-fluid full-footer">
        <div className="row">
          <div className="col-md-3">
            <h5>Company</h5>
            <a href="#">About Us</a>
            <br />
            <a href="#">Contact Us</a>
            <br />
            <a href="#">Blogs</a>
            <br />
            <a href="#">PartnerShip with PharEasy</a>
            <br />
            <a href="#">Sell at PharmEasy</a>
            <br />
            <br />
            <h5>Our Services</h5>
            <a href="#">Order Medicine</a>
            <br />
            <a href="#">Healthcare Products</a>
            <br />
            <a href="#">Lab Tests</a>
            <br />
            <a href="#">Find Nearest Collection Centre</a>
            <br />
          </div>
          <div className="col-md-3">
            <h5>Featured Categories</h5>
            <a href="#">Top Products</a>
            <br />
            <a href="#">Elderly Care</a>
            <br />
            <a href="#">Personal Care</a>
            <br />
            <a href="#">Healthcare Devices</a>
            <br />
            <a href="#">Summer Store</a>
            <br />
            <a href="#">Skin Care</a>
            <br />
            <a href="#">Mother and Baby Care</a>
            <br />
            <a href="#">Accessories & Wearables</a>
            <br />
            <a href="#">Fitness Supplements</a>
            <br />
            <a href="#">Ayurvedic Care</a>
            <br />
            <a href="#">Sexual Wellness</a>
            <br />
            <a href="#">Diabetic Care</a>
            <br />
            <a href="#">Health Condition</a>
            <br />
            <a href="#">Home Care</a>
            <br />
            <a href="#">Trending Products</a>
            <br />
          </div>
          <div className="col-md-3">
            <h5>Need Help</h5>
            <a href="#">Browse All Medicines</a>
            <br />
            <a href="#">Browse All Molecules</a>
            <br />
            <a href="#">Browse All Cities</a>
            <br />
            <a href="#">Browse All Areas</a>
            <br />
            <a href="#">Browse All Stores</a>
            <br />
            <a href="#">FAQs</a>
            <br />
            <br />
            <h5>Policy Info</h5>
            <a href="#">Editorial Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Vulnerability Disclosure Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Customer Support Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Smartbuy Policy</a>
          </div>
          <div className="col-md-3 follow-us">
            <h5>Follow Us on</h5>
            <a
              href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fpharmeasyapp%2F&is_from_rle"
              target="_blank"
            >
              <i className="fa-brands fa-2x fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-2x fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands  fa-2x fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-2x fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid full-footer">
        <div className="row">
          <div className="col-md-6 pay">
            <h5>Our Payment Partners</h5>
            <div className="payment-apps">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
              <img
                src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"
                alt="logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-row-reverse mb-5 copyrights">
              <p>© 2024 PharmEasy. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
