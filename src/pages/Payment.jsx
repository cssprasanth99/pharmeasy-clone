import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Input,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Flex,
  Spacer,
  Icon,
  Tfoot,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FaTag, FaCheckCircle } from "react-icons/fa"; // Import icons

import { cartContext } from "../context/CartContext";

const Payment = () => {
  const [addressList, setAddressList] = useState([]);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    country: "",
  });
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems, setCartItems } = useContext(cartContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Handle order placement based on selected payment method
  const handlePlaceOrder = () => {
    setCartItems([]);
  };

  // Create a map to track quantity of each item
  const itemQuantities = {};
  cartItems.forEach((item) => {
    const key = `${item.model}-${item.product}`;
    if (itemQuantities[key]) {
      itemQuantities[key]++;
    } else {
      itemQuantities[key] = 1;
    }
  });

  // Filter unique items based on model and product
  // const uniqueItems = Object.values(
  //   cartItems.reduce((acc, item) => {
  //     const key = `${item.model}-${item.product}`;
  //     if (!acc[key]) {
  //       acc[key] = item;
  //       acc[key].quantity = 1;
  //     } else {
  //       acc[key].quantity++;
  //     }
  //     return acc;
  //   }, {})
  // );

  // Function to simulate order placement
  const placeOrder = (paymentType) => {
    // Simulate order placement logic
    // Display success toast and reset cartItems after a delay
    toast({
      title: `Order placed successfully (${paymentType})`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      setCartItems([]);
    }, 5000);
  };

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  function handleAddress() {
    // Validation logic can be added here before updating addressList
    // For example, check if all fields are filled before updating
    setAddressList([...addressList, order]);
    setOrder({
      name: "",
      email: "",
      address: "",
      state: "",
      country: "",
    });
  }

  const subTotal = cartItems.reduce((sum, item) => +sum + +item.price, 0);
  const randomDiscountPercentage = 15;

  const discountAmount = (subTotal * randomDiscountPercentage) / 100;
  const discount = discountAmount.toFixed(2);
  const grandTotal = (subTotal - discountAmount).toFixed(2);

  return (
    <Box padding="20px">
      <Box marginBottom="30px">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Product</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.model || item.title}</Td>
                <Td>{item.category}</Td>
                <Td>₹ {item.offerPrice}</Td>
                <Td> {itemQuantities[`${item.model}-${item.product}`]}</Td>
                <Td>
                  ₹{" "}
                  {`${item.offerPrice}` *
                    `${itemQuantities[`${item.model}-${item.product}`]}`}
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan="4">Subtotal</Th>
              <Td>₹ {subTotal}</Td>
            </Tr>
            <Tr>
              <Th colSpan="4">Discount (15%)</Th>
              <Td>₹ {discount}</Td>
            </Tr>
            <Tr>
              <Th colSpan="4">Grand Total</Th>
              <Td>₹ {grandTotal}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </Box>

      <Box marginBottom="30px" borderWidth="1px" borderRadius="lg" p="4">
        <Heading size="md" marginBottom="10px" color="teal.500">
          Cart Details
        </Heading>
        <Stack spacing="4">
          <Box>
            <Text>
              <Icon as={FaTag} color="teal.500" /> Offers: Get 15% off on all
              products!
            </Text>
          </Box>
          <Box>
            <Text>
              <b>Delivery Charges:</b>{" "}
              {subTotal >= 500 ? (
                <span style={{ color: "green" }}>Free Delivery</span>
              ) : (
                <span>₹ 50 (Free delivery with cart value above ₹500) </span>
              )}
            </Text>
          </Box>
          <Box>
            <Text>
              <b>Total:</b> ₹ {subTotal}{" "}
              {subTotal >= 500 ? "" : "+ ₹ 50 (Delivery Charges)"}
            </Text>
          </Box>
        </Stack>
      </Box>

      <Box marginBottom="30px">
        <Heading size="md" marginBottom="10px">
          Delivery Details
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={order.name}
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={order.email}
            onChange={handleChange}
          />
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={order.address}
            onChange={handleChange}
          />

          <FormLabel>State</FormLabel>
          <Select
            placeholder="Select State"
            name="state"
            value={order.state}
            onChange={handleChange}
          >
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </Select>
          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select country"
            name="country"
            value={order.country}
            onChange={handleChange}
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>France</option>
            <option>Japan</option>
            <option>China</option>
            <option>Brazil</option>
            <option>Russia</option>
            <option>South Africa</option>
            <option>Singapore</option>
            <option>Italy</option>
            <option>Spain</option>
          </Select>
          <Button
            mt="4"
            onClick={() => {
              toast({
                title: "Address Updated",
                description: "Your address has been updated",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              handleAddress();
            }}
          >
            Update Address
          </Button>
        </FormControl>
      </Box>

      <Box>
        <Heading size="md" marginBottom="10px" color="teal.500">
          Payment Modes
        </Heading>
        <FormControl as="fieldset" marginBottom="20px">
          <FormLabel as="legend">Select Payment Method:</FormLabel>
          <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
            <Stack direction="column" spacing="4">
              <Radio value="COD">Cash on Delivery</Radio>
              <Radio value="CreditCard">Credit Card</Radio>
              <Radio value="UPI">UPI</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Button
          colorScheme="teal"
          onClick={() => {
            handlePlaceOrder();
            onOpen();
          }}
        >
          Place Order
        </Button>
        {/* Modal for displaying order details */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Your order has been placed successfully!</Text>
            </ModalBody>
            <ModalFooter>
              <Link to="/">
                <Button colorScheme="blue" mr={3}>
                  Home
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Payment;
