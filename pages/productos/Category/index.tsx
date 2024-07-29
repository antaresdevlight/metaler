import Image from "next/image";
import { Flex, Avatar, Text, Box, Badge, border } from "@chakra-ui/react";

import logo from "../../../src/assets/logo_1.png";

const styles = {
  logo: {
    w: "60px",
    h: "40px",
    borderRadius: "full",
  },
};

function Category(props: { name: string; description: string }) {
  const { name, description } = props;

  return (
    <Flex alignItems="center">
      <Flex {...styles.logo} overflow="hidden">
        <Image src={logo} width={90} height={45} alt="metaler logo" />
      </Flex>
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        {/* <Text fontSize="sm">{description}</Text> */}
      </Box>
    </Flex>
  );
}

export default Category;
