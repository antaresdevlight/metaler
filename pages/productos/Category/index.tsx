import { Flex, Avatar, Text, Box, Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

function Category(props: { name: string; description: string }) {
  const { name, description } = props;

  return (
    <Flex alignItems="center">
      <Avatar src="https://picsum.photos/200/300" />
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        {/* <Text fontSize="sm">{description}</Text> */}
      </Box>
    </Flex>
  );
}

export default Category;
