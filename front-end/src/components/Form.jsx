import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Field,
  Input,
  Text,
  Textarea,
  useToastStyles,
  VStack,
} from "@chakra-ui/react";
import { schema } from "./validation/FormValidation";
import { useProductStore } from "../../store/product";
import { toaster } from "./ui/toaster";
const Form = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const { createProducts } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = schema.validate(newProduct, { abortEarly: false });

    if (error) {
      console.log(error);
      const errorMessages = {};
      error.details.forEach((error) => {
        errorMessages[error.path[0]] = error.message;
      });
      setErrors(errorMessages);
    } else {
      setErrors({});
      const { success, message } = await createProducts(newProduct);
      console.log("clicked");
      console.log(success);
      console.log(message);
      if (success) {
        toaster.create({ title: message, type: "success" });
        setNewProduct({ name: "", description: "", price: "", image: "" });
      } else {
        toaster.create({ title: message, type: "error" });
      }
    }
  };

  return (
    <div>
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
              <Field.Root required>
                <Field.Label>
                  Product Name
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  type="text"
                  placeholder="Enter Product Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                {errors.name && <Text color="red.500">{errors.name}</Text>}
              </Field.Root>

              <Field.Root required>
                <Field.Label>
                  Price
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  type="text"
                  placeholder="Price in LKR"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                {errors.price && <Text color="red.500">{errors.price}</Text>}
              </Field.Root>

              <Field.Root>
                <Field.Label>
                  Description
                  <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  type="text"
                  placeholder="Short description of product"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label>
                  Image
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  type="text"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                {errors.image && <Text color="red.500">{errors.image}</Text>}
              </Field.Root>

              <Center>
                <Button onClick={handleSubmit}>Add Product</Button>
              </Center>
            </VStack>
          </Box>
        </Center>
      </Container>
    </div>
  );
};

export default Form;
