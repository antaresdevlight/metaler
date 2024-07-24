import { Flex, Text } from "@chakra-ui/react";

import Hero from "@/src/components/Main/Hero";
import Us from "@/src/components/Main/Us";
import MissionVission from "@/src/components/Main/MissionVission";
import OurFocus from "@/src/components/Main/OurFocus";
import OurProducts from "@/src/components/Main/OurProducts";
import ContactLabel from "@/src/components/Main/ContactLabel";

import UsV2 from "@/src/components/Main/UsV2";
import OurValues from "@/src/components/Main/OurValues";
import MissionVissionV2 from "@/src/components/Main/MissionVissionV2";
import OurValuesV2 from "@/src/components/Main/OurValuesV2";

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

      <UsV2 />

      {/* <Us /> */}

      <MissionVissionV2 />

      <OurFocus />

      <OurValuesV2 />

      {/* <OurValues /> */}

      <ContactLabel />
    </Flex>
  );
}

export default Home;
