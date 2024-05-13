import React, { useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { form, setForm, login } = useContext(authContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
    navigate("/medicine");
    toast({
      title: "Logged In successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Your name"
            name="username"
            onChange={handleChange}
          />
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" onChange={handleChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            colorScheme="teal"
            mt={4}
            w="100%"
            fontSize="md"
          >
            Log In
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
