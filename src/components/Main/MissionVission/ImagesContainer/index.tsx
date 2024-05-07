import Image from "next/image";
import { Flex } from "@chakra-ui/react";

import logo from "../../../../assets/logo.png";
import mission from "../../../../assets/mission.png";
import vission from "../../../../assets/vission.png";

const styles = {
  container: {
    w: "100%",
    h: "100%",
    // border: "1px",
    // borderColor: "dark",
  },
  logo: {
    w: { md: "13vw", lg: "11.72vw", xl: "166px" },
    h: "auto",
    top: { md: "1.31vw", lg: "0px", xl: "0px" },
    left: { md: "3.91vw", lg: "1vw", xl: "68px" },
  },
  rightImage: {
    w: { md: "31.25vw", lg: "41.02vw", xl: "570px" },
    h: "auto",
    top: { md: "0", lg: "0px", xl: "0px" },
    right: { md:"0", lg: "0px", xl: "0px" },
  },
  leftImage: {
    w: { md: "30.60vw", lg: "31.25vw", xl: "405px" },
    h: "auto",
    bottom: { md: "0", lg: "0px", xl: "0px" },
    left: { md: "0", lg: "0px", xl: "0px" },
    zIndex: "overlay",
  },
};

function ImagesContainer() {
  return (
    <Flex {...styles.container} position="relative">
      {/* LOGO */}
      <Flex {...styles.logo} position="absolute">
        <Image src={logo} width={166} height={77} alt="metaler logo" />
      </Flex>

      <Flex {...styles.rightImage} position="absolute">
        <Image src={mission} width={570} height={385} alt="right image" />
      </Flex>

      <Flex {...styles.leftImage} position="absolute">
        <Image src={vission} width={405} height={319} alt="right image" />
      </Flex>
    </Flex>
  );
}

export default ImagesContainer;
