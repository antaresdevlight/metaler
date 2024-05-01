import { Flex, Text } from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";
import Hero from "@/src/components/Main/Hero";

const styles = {};

function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Hero />
    </Flex>
  );
}

export default Home;
