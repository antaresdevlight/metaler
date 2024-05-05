import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

import Header from "@/src/components/Layout/Header";

const styles = {};

function Home() {
  return (
    <Flex direction="column">
      <Text>Home - page</Text>

      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </form>
    </Flex>
  );
}

export default Home;
