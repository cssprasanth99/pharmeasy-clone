import React from "react";
import { cartContext } from "./context/CartContext";
import { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Grid,
  Box,
  Checkbox,
  Center,
  HStack,
  VStack,
  Flex,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./styles/userCart.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(cartContext);

  return (
    <Box px="40px">
      <Box marginTop="10px">
        <Flex className="content" justify="space-between">
          <div className="left">
            {cartItems.map((product, index) => (
              <Box key={index}>
                {" "}
                {/* Assign a unique key */}
                <Flex className="product" h="340px" justify="space-between">
                  {/* Left column (image) */}
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

                  {/* Right column (description) */}
                  <Box
                    className="description"
                    w="65%"
                    position="relative"
                    textAlign="left"
                    color="#4f585e"
                    py="10px"
                  >
                    {/* Product model and description */}
                    <Text fontSize="20px" fontWeight="700" height="30px">
                      {product.model}-{product.description}
                    </Text>

                    {/* Company name */}
                    <Text fontSize="20" color="#0f847e" pt="20px">
                      {product.company}
                    </Text>

                    <Flex align={"center"}>
                      <label className="p-2 m-2">Qty:</label>
                      <Select w="10%" p="2" m="2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </Select>
                    </Flex>

                    {/* Price information */}
                    <Flex
                      className="price"
                      h="2rem"
                      align="center"
                      w="50%"
                      justify="space-between"
                    >
                      {/* Offer price */}
                      <Text fontSize="20px" fontWeight="700">
                        ₹ {product.offerPrice}
                      </Text>
                      {/* MRP price with strikethrough */}
                      <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹ {product.mrpPrice}
                        </span>{" "}
                      </Text>
                      {/* Offer value */}
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

                    {/* Tax information */}
                    <Text fontSize="10px" color="#8e9ca7">
                      Inclusive of all taxes
                    </Text>

                    {/* Delivery details */}
                    <Text py="10px" fontSize="12px">
                      Delivery by{" "}
                      <span style={{ fontWeight: "700" }}>
                        Tomorrow, before 09:00 pm
                      </span>
                    </Text>

                    {/* Add to cart button */}
                    <Button
                      className="addToStore"
                      // variant="solid" {/* Specify the variant */}
                      bg="#0f847e"
                      color="white"
                      fontWeight="700"
                      fontSize="16px"
                      top="-40"
                      left="500"
                      height="2.8rem"
                      w="9.5rem"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove from Cart
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
          </div>
          {/* Right hand side */}
          <Box className="right" w="25%" color="#4f585e" textAlign="left">
            <Box className="cartDetails" padding="10px 0">
              <Link to="/payment">
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
                  Proceed to Payment
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
    // <div>
    //   <Box display={"flex"}>
    //     {cartItems.length > 0 ? (
    //       <Grid p={"5"} m={"10"} templateColumns="repeat(1, 1fr)" gap={"5"}>
    //         {cartItems.map((item, index) => (
    //           <Card
    //             key={index}
    //             direction={{ base: "column", sm: "row" }}
    //             overflow="hidden"
    //             variant="outline"
    //           >
    //             <Image
    //               objectFit="cover"
    //               maxW={{ base: "100%", sm: "200px" }}
    //               src={item.image}
    //               alt={item.model}
    //               m={"5"}
    //             />

    //             <Stack>
    //               <CardBody>
    //                 <Heading size="md">{item.model || item.title}</Heading>

    //                 <Text py="2">{item.description}</Text>
    //                 <Text py="2">${item.price}</Text>
    //               </CardBody>

    //               <CardFooter display={"flex"} gap={"2"}>
    //                 <Button
    //                   variant="solid"
    //                   colorScheme="green"
    //                   onClick={() => removeFromCart(item)}
    //                 >
    //                   Remove
    //                 </Button>
    //               </CardFooter>
    //             </Stack>
    //           </Card>
    //         ))}
    //       </Grid>
    //     ) : (
    //       <Box p="10" m="10">
    //         <Center>
    //           <Box>
    //             <Image
    //               m={"10"}
    //               w={"100"}
    //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAZlBMVEX///8AAAACAgLm5uZZWVkaGhqzs7OGhobS0tIdHR1jY2P8/Pzr6+v29vb5+fnh4eF2dnYvLy+dnZ2UlJS6uro2NjbDw8MQEBBHR0etra1sbGzY2Nh/f3+MjIyjo6NCQkJOTk4kJCQaL/bfAAAGnklEQVR4nO1cC4+qSgx2BBSBAeSpIAj//08eaAcVdhfxbjusN36bkxhP6DSl03fdbD744IMPPvjgg/8xssK5I4zstflZhCQXYxyztVl6DrcQXxB6a3P1DNIR2wmEMP8829VE0Mj22lw9RZgf7sh7tjvez2tz9RSecUcWHkDarVybq5fgnq1e2vlubUZexKVTEiEua7PxIjxQ7VO5Nh8vIoUL+ffv4xhnuI+X97qPGwNU5BCszcdrkAWoyBuEIyMkIOy/7x/HKI8g7DdTbBl2Fnsr3s3R1KAizdpsvIjg+o5WZFP0Xn0bP8ZVfPBcIq7PEIscTS1wwoSGa6nCbE3Iaxq2v+ZljOhERFMZSHRy3bEdknDt5f111KQk3TkOiUvzLxD4Wa3FjENLyLW+WKQCc7WnIdY5mp4ae2HEbfpzLKIA09+DihCZpJ+RQaTW+kTkzqAiKRG1HxHBMQUVOaOBCgNzidUDxyDoTglBsSsyet/CbvtDBB3BhNIk/QTUQxofA3CBIG81myFFDYFiREjxC7BilBqEJG3g2uE02QylF9kC25xWBOwUbYLq7rlVxAcFudLKxe7jMZFS+a2v2IFxDWkPMEwQNl91FdNT4qjBjeENsjkaA0oBLbVUkgOYbGKqN+ygLXGiJuuZrHXKPdwb+tu+5+x2BGj3KF0MIoPkseFxNBlbLAyKfSCqsozR3XUud4COJmagvPHAggiOYmKJ1VU+0iwte/fIZkUwMeWJFyKgHVOVPR8Aos55rCrGIhZ9RhOggtDbvR6QjnKoSAV0uaKFmjb1H+CCi7FYbOpmKLPk1OGqfYQomCtRkqgi1EKJqJPzCWKIRYhVBJLzLWP/uIR48krraGwcjGAwqANOvawt2p4p5l4OKc0xIhDLnlIuMqRPzifAUsuVMlEyQOta1up4Q25FsIYYstYQsYR4ITTZDqg173gBxpRbQslg4ZO3Ng53h3LyArqZzApCP3lRQKmdtVq7ufkEKtnIVIOCwJA2pXlNeKo3X1CT9kwvfCn0CB40fVIaR6OKnjxZzAh4EE31M8uhyEJCax5nOlvlh+i0CEg9g0vmF/xKsFVvvgAK5CK2f4vEwYGQQsOMo0xMUJHHFYT/BNhb6LVawxSs7VjqNIrBG4jW+Zo9Cj4sp2xB2PjvlY/f/Y8oGFMvRBc7CbrZrV4ALdHkzQzwzhMObrUXDTq9Uy9VpOH+96iiJNBgPYwTmlenZFdFQqBT5B5uIYZ7xamCtfl4DQxVBQ3INIXCtKjfck8JeoLENT5+vKesE/6JLQZgp6rRkONRwm0Ze5l8iGFNKX8zzS5x+ziP32srrFYr6iI874jB6HG9gji+voPTD3iNGMRNjS1j9jiwTQ7mtYX6iqKhynbVR5HzZhpB5KT0KpJy9f5v8MqM2oRw2pD3h+8l4bF7tU1cvuZ0PDvusmZxvGRkK5iLYe/vv6HT7Jbff+N8vT13qPTqhYzbBwMohLm0GJOYo+fSWmNwMPjI+/HWspAqykcPCh1VvgFG8+jY1flLsuBKPDyonrtqYtt1Bq+eNuYpxxLrkkACe/D9m2lM8ygUFe62rkKk5NUkdmCUWYz17OebLvYR2TxGWWAY9hnfmNhqidcNTGlEpAyHa1zFkqKUvGCV0By6MF6Mz7FMvk6Bh+cPHtgvxIKuoQ1NutEoGaoM/+LksDU4vnz9d93f7IVUI9bXUUCKEmj4NTsBkVnjm3+GL69zz0kcsR4b9iDV1Lmrv9tAMU5PZ5e870as/Yp42uQH+Hs4fSodaEFac43TEqRaTTIWHHpi781IHDKYShV2svO5GBlnbqYXL4NlBb5hT4Vfcj21zVmrk+upkYPF3tlhdRu4npqZRFP3Hwd4JzKTsP9+mDPYeBuLyUtCavwGe4cTC+MvcUlsdkkHB5wme50eGn/+MLtEuzsyVmqTfPZF+7huMx6iRTPKNi/+AJyWHo2HqIBiXmS4NDUqydpYWODYCpnCtmACL71fvSEsmn+uTyVgruRmsnsDIjSMxQFCFV1fSk/6MkhUyGc9084MS7KiyYzuOcMOVYCtp6vmKTZFbl6qMB2i+/rZe3arIZu4hvvLrWKo66dPYefiXqLcLk1JpDMqyaqP2jomdnqfbFH8L9qQkI4S8FDcE6LV2OYJiiFd3aqkatlzfnR8eLDTMb0/6OvW5r2yeNwvtwJ2eLg/6CTsI08TeFl86hlIi7p85Wxp104v8NaMszV+gtiVnhF48vX0SUojMKR8p9GYDz744IMPluMf3RJWBd3hDU0AAAAASUVORK5CYII="
    //             />
    //             <Heading>Your Cart is Empty</Heading>
    //           </Box>
    //         </Center>
    //       </Box>
    //     )}
    //     <Box m="20">
    //       <Button variant="solid" colorScheme="green">
    //         <Link to="/payment">Proceed to Payment</Link>
    //       </Button>
    //     </Box>
    //   </Box>
    // </div>
  );
};

export default UserCart;
