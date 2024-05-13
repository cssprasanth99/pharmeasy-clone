import React, { useContext, useState } from "react";
import { Image, Text, Button, Box, Flex } from "@chakra-ui/react";
import { medicineData } from "../data/medicine";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { FaStar, FaRegStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";

const MedicineSingle = () => {
  const { id } = useParams();

  const product = medicineData.find((item) => item.id === id);

  console.log(product);

  const { cartItems, addToCart } = useContext(cartContext);

  return (
    <div>
      <Box px="40px">
        <Box marginTop="10px">
          <Flex className="content" justify="space-between">
            <div className="left">
              {
                <Box>
                  <Flex className="product" h="340px" justify="space-between">
                    <Flex
                      className="img"
                      w="30%"
                      direction="column"
                      justify="space-between"
                      position="relative"
                    >
                      <Flex
                        overflow="hidden"
                        h="76%"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        align="center"
                        justify="center"
                        p="10px"
                        cursor="pointer"
                      >
                        <div className="figure">
                          <img
                            className="mainimage"
                            src={product.image}
                            alt={product.model}
                          />
                        </div>
                      </Flex>
                    </Flex>
                    <Box
                      className="description"
                      w="65%"
                      position="relative"
                      textAlign="left"
                      color="#4f585e"
                      py="10px"
                    >
                      <Text
                        istruncated="true"
                        fontSize="20px"
                        fontWeight="700"
                        // noOfLines={1}
                        height="30px"
                      >
                        {product.model}-{product.description}
                      </Text>
                      <Text fontSize="20" color="#0f847e" pt="20px">
                        {product.company}
                      </Text>
                      <Flex
                        className=" rating"
                        paddingBottom="20px"
                        w="35%"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Flex color="#ffd344" fontSize="20px" align="center">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <TiStarHalfOutline fontSize="24px" />
                          <FaRegStar />
                        </Flex>
                        <Text color="#8e9ca7" mt="4" fontSize="14px">
                          (1180 ratings)
                        </Text>
                      </Flex>
                      <Flex
                        className="price"
                        h="2rem"
                        align="center"
                        w="50%"
                        justify="space-between"
                      >
                        <Text fontSize="20px" fontWeight="700">
                          ₹ {product.offerPrice}
                        </Text>
                        <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                          MRP{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            ₹ {product.mrpPrice}
                          </span>{" "}
                        </Text>
                        <Flex
                          align="center"
                          justify="start"
                          px="6px"
                          color="white"
                          fontSize="11px"
                          fontWeight="600"
                          height="72%"
                          w="36%"
                          mb="4"
                          bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                        >
                          {product.offerValue} % OFF
                        </Flex>
                      </Flex>
                      <Text fontSize="10px" color="#8e9ca7">
                        Inclusive of all taxes
                      </Text>
                      <Text py="10px" fontSize="12px">
                        Delivery by{" "}
                        <span style={{ fontWeight: "700" }}>
                          Tomorrow, before 09:00 pm
                        </span>
                      </Text>
                      <Button
                        className="addToStore"
                        position="absolute"
                        variant="#0f847e"
                        bg="#0f847e"
                        color="white"
                        fontWeight="700"
                        fontSize="16px"
                        right="4"
                        top="28"
                        height="2.8rem"
                        w="9rem"
                        placeholder="Add to Cart"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              }
            </div>
            {/* Right hand side */}
            <Box className="right" w="25%" color="#4f585e" textAlign="left">
              <Box className="cartDetails" padding="10px 0">
                <Text fontSize="16" fontWeight="600" py="30px">
                  {cartItems.length} Items in Cart
                </Text>
                <Link to="/cart">
                  <Button
                    className="viewCart"
                    variant="#0f847e"
                    bg="#0f847e"
                    color="white"
                    fontWeight="700"
                    h="3rem"
                    fontSize="16px"
                    transition="all 0.4s ease"
                    borderRadius="md"
                    w="100%"
                    display="flex"
                    align="center"
                    _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
                  >
                    View Cart
                  </Button>
                </Link>
              </Box>
              <Box
                className="offers"
                marginY="50px"
                border="1px dashed pink"
                borderRadius="5px"
                p="15px"
              >
                <Flex justify="space-between" align="center" mb="10px">
                  <Text fontSize="14px" fontWeight="700">
                    Offers Just for you
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    color="#0f847e"
                    cursor="pointer"
                  >
                    View All
                  </Text>
                </Flex>
                <Flex
                  align="center"
                  fontSize="12px"
                  fontWeight="600"
                  gap="10px"
                  mb="10px"
                >
                  <Image
                    src="https://cms-contents.pharmeasy.in/offer/ea20b1fcb6c-11.jpg"
                    h={7}
                    w={7}
                  />
                  <Text size={10}>
                    Additional INR 250 Instant Discount on HDFC Bank Credit Card
                  </Text>
                </Flex>
                <Flex
                  align="center"
                  fontSize="12px"
                  fontWeight="600"
                  gap="10px"
                  mb="10px"
                >
                  <Image
                    src="https://cms-contents.pharmeasy.in/offer/62e13eb58a2-2.jpg"
                    h={7}
                    w={7}
                  />
                  <Text size={10}>
                    Flat INR 750 Instant Discount on OneCard Credit Card Non-EMI
                    Txn
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default MedicineSingle;
