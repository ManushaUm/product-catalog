import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { MdAutoDelete, MdEditNotifications } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from "../../store/product";
import UpdateModal from "./updateModal";

const ProductCard = ({ _id, name, price, description, image }) => {
  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (_id) => {
    const { success, message } = await deleteProduct(_id);
    if (success) {
      console.log("success", success);
      console.log("message", message);
    } else console.log("error");
  };
  return (
    <Box
      width="75%"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image src={image} alt={name} h={48} w="full" objectFit="cover" />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" mb={4}>
          ${price}
        </Text>

        <HStack spacing={2}>
          <UpdateModal
            _id={_id}
            name={name}
            price={price}
            description={description}
            image={image}
          />
          <IconButton onClick={() => handleDeleteProduct(_id)}>
            <MdAutoDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
