import React, { useState } from "react";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Radio,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Flex,
} from "@chakra-ui/react";
import "../styles/products.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { HiOutlineSearch } from "react-icons/hi";
import { medicineData } from "../data/medicine";
import { Link } from "react-router-dom";

const Medicine = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (medicine) => {
    if (selectedProduct.includes(medicine)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== medicine));
    } else {
      setSelectedProduct([...selectedProduct, medicine]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? medicineData
      : medicineData.filter((medicine) =>
          selectedProduct.includes(medicine.company)
        );

  console.log(filteredProduct);

  return (
    <div>
      <div className="container">
        <Stack direction="horizantal" gap={"50px"}>
          <Stack width="25%" textAlign="left">
            <Heading fontSize="28px" fontWeight="600" marginBottom="40px">
              Filter
            </Heading>
            <Heading fontSize="16px" fontWeight="700">
              Category
            </Heading>
            <Stack
              direction="horizontal"
              justify="space-between"
              alignItems="center"
              paddingTop="15px"
              paddingBottom="10px"
            >
              <Text fontSize="14px">MEDICINE</Text>
              <Radio type="radio" colorScheme="teal" isChecked size="lg" />
            </Stack>
            <hr />
            <Heading
              fontSize="16px"
              fontWeight="700"
              style={{ marginTop: "20px", marginBottom: "15px" }}
            >
              Disease
            </Heading>
            <InputGroup>
              <InputRightElement color={"gray.400"}>
                <HiOutlineSearch fontSize={"24px"} />
              </InputRightElement>
              <Input
                marginBottom={"20px"}
                type="text"
                colorScheme="teal"
                placeholder="Search"
              />
            </InputGroup>
            <hr />
            <Heading
              fontSize="16px"
              fontWeight="700"
              style={{ marginTop: "10px" }}
            >
              Brand
            </Heading>
            {medicineData.map((medicine, index) => (
              <Stack
                direction="horizontal"
                justify="space-between"
                align="center"
                key={index}
              >
                <Text fontSize="14px" fontWeight={"500"}>
                  {medicine.company}
                </Text>
                <Checkbox
                  isChecked={selectedProduct.includes(medicine.company)}
                  onChange={() => companyHandler(medicine.company)}
                  colorScheme="teal"
                  size="lg"
                />
              </Stack>
            ))}
          </Stack>
          <Stack width="75%">
            <Stack
              direction="horizontal"
              marginBottom="40px"
              justify="space-between"
              align="center"
            >
              <Heading fontSize="26px" fontWeight="600">
                MEDICINE
              </Heading>
              <Stack direction="horizontal" gap="40px" align="center">
                <Text fontSize="14px" width="60px">
                  Sort By:
                </Text>
                <Select width="248px" height="39px">
                  <option value="">Select</option>
                  <option value="asc">Price Low to High</option>
                  <option value="des">Price High to Low</option>
                </Select>
              </Stack>
            </Stack>
            <Grid templateColumns="repeat(3,0.5fr)" gap="5">
              {filteredProduct.map((item) => (
                <Link key={item.id} to={`/medicine/${item.id}`}>
                  <Box
                    height="330px"
                    width="230px"
                    padding="10px"
                    border="1px solid #e1e1e1"
                    borderRadius="7px"
                    position="relative"
                  >
                    <Box
                      padding="20px"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Image src={item.image} height={"150px"} />
                    </Box>
                    <Heading
                      marginTop="20px"
                      fontSize="16px"
                      fontWeight="700"
                      noOfLines={2}
                    >
                      {item.model}
                    </Heading>
                    <Flex
                      gap={"10px"}
                      position="absolute"
                      bottom="40px"
                      alignItems={"center"}
                    >
                      <Heading
                        fontSize="13px"
                        fontWeight="500"
                        textDecoration={"line-through"}
                        color="#8897A2"
                      >
                        {`MRP ₹${item.mrpPrice}`}
                      </Heading>
                      <div className="discount">{`${item.offerValue}% off`}</div>
                    </Flex>
                    <Heading
                      fontSize="17px"
                      fontWeight="600"
                      position="absolute"
                      bottom="20px"
                    >
                      {`₹ ${item.offerPrice}`}
                    </Heading>
                  </Box>
                </Link>
              ))}
            </Grid>
          </Stack>
        </Stack>
        <hr />
      </div>
    </div>
  );
};

export default Medicine;
