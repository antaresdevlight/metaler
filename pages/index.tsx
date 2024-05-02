import { Flex, Text } from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import Hero from "@/src/components/Main/Hero";
import Us from "@/src/components/Main/Us";

const styles = {
  page: {
    w: "100%",
    h: "auto",
  },
};

function Home() {
  return (
    <Flex {...styles.page} direction="column">
      <Header />

      <Hero />

      <Us />

      <Footer />
    </Flex>
  );
}

export default Home;
