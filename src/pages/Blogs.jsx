import React from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import CarouselComponent from "../components/Carousal"; // Import your Carousel component
import { Card, CardBody } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <Container maxW="container.xl" mt="20px">
      <Box mb="8">
        <Heading as="h2" fontSize="3xl" mb="4">
          Welcome to Our Health Blog!
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Welcome to our health blog, your go-to destination for insightful
          articles, tips, and resources on health, wellness, nutrition, and
          lifestyle. Whether you're looking to enhance your well-being, adopt
          healthier habits, or stay informed about the latest trends in health
          and medicine, you've come to the right place.
        </Text>
      </Box>

      <Container maxW="container.xl" mt={8}>
        <CarouselComponent />
      </Container>

      <Box mb="8">
        <Heading as="h3" fontSize="2xl" mb="4">
          Explore by Category
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {/* Each category image */}
          <Image
            src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143039/Health-Today-1-2-e1668506427623.jpg"
            alt="Health"
          />
          <Image
            src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143042/Lifestyle-1-1-e1668506475164.jpg"
            alt="Lifestyle"
          />
          <Image
            src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/02074732/Wellness-1-e1668525839475.jpg"
            alt="Wellness"
          />
        </Grid>
      </Box>

      {/* Latest Blogs Section */}
      <Box mb="8">
        <Heading as="h3" fontSize="2xl" mb="4">
          Latest Articles
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {/* Example Cards for Latest Articles */}
          {[
            {
              title: "Arthritis: Symptoms and Treatment",
              imageSrc:
                "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/04/26135832/Hydrocortisone--560x320.jpg",
            },
            {
              title: "Low Carbohydrate Foods for Weight Loss",
              imageSrc:
                "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/03/25134434/499-560x320.jpg",
            },
            {
              title: "Benefits of Vitamin D3 for Health",
              imageSrc:
                "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/04/25131754/373-560x320.jpg",
            },
            {
              title: "Do Posture Correctors Work? A Detailed Research",
              imageSrc:
                "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/04/10115748/574-560x320.jpg",
            },
          ].map((blog, index) => (
            <Card key={index} maxW="sm" boxShadow="lg">
              <Image src={blog.imageSrc} alt={blog.title} borderRadius="md" />
              <CardBody>
                <Stack spacing={2}>
                  <Heading as="h4" size="md">
                    {blog.title}
                  </Heading>
                  <Text>DOCTOR'S SPEAK / FEATURED</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs;
