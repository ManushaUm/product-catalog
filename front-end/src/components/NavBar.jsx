import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <div>
      <Container maxW={"container.xl"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight="bold"
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            <Link to={"/"}>Product Store</Link>
          </Text>

          <HStack spacing={8} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <FaPlusSquare />
              </Button>
            </Link>
            <ColorModeButton />
          </HStack>
        </Flex>
      </Container>
    </div>
  );
};

export default NavBar;
