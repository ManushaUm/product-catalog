import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => {
    console.log(newProduct);
  };
  return (
    <Container maxW={"container.sm"}>
      <Center maxW={"container.sm"}>
        <Box
          width={{
            base: "full",
            sm: "50%",
          }}
          p={6}
          borderWidth={1}
          borderRadius={8}
          rounded={"lg"}
          shadow={"md"}
          alignContent={"center"}
        >
          <VStack direction={"column"} spacing={4}>
            <Input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Center>
              <Button onClick={handleSubmit}>Add Product</Button>
            </Center>
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default AddProduct;
