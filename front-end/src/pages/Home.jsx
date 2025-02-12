import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/product";
import ProductCard from "./../components/ProductCard";

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW={"container.xl"} px={4} alignC={"center"}>
      <VStack align={"center"} spacing={4} py={8}>
        {products.length === 0 ? (
          <Text
            fontSize={{ base: "20", sm: "24" }}
            fontWeight=""
            textAlign={"center"}
            color={"gray.500"}
            _hover={{ color: "white", textDecoration: "underline" }}
          >
            <Link to={"/create"}>add products</Link>
          </Text>
        ) : null}
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          Available Products
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={2} w={"full"}>
          {/* Products go here */}
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Home;
