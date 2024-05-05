import { Flex, Text } from "@chakra-ui/react";

import Hero from "@/src/components/Main/Hero";
import Us from "@/src/components/Main/Us";
import MissionVission from "@/src/components/Main/MissionVission";
import OurFocus from "@/src/components/Main/OurFocus";
import OurProducts from "@/src/components/Main/OurProducts";
import ContactLabel from "@/src/components/Main/ContactLabel";

const styles = {
  page: {
    w: "100%",
    h: "auto",
    justifyContent: "center",
  },
};

function Home() {
  return (
    <Flex {...styles.page} direction="column">
      <Hero />

      <Us />

      {/* <MissionVission />

      <OurFocus />

      <OurProducts />

      <ContactLabel /> */}
    </Flex>
  );
}

export default Home;
