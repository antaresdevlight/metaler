import { Flex, Text } from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import Hero from "@/src/components/Main/Hero";
import Us from "@/src/components/Main/Us";

const styles = {};

function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Hero />

      <Us />

      <Footer />
    </Flex>
  );
}

export default Home;
