import Image from "next/image";
import { Flex } from "@chakra-ui/react";

import logo from "../../../../assets/logo.png";
import mission from "../../../../assets/mission.png";
import vission from "../../../../assets/vission.png";

const styles = {
  container: {
    w: "100%",
    h: "100%",
    border: "1px",
    borderColor: "dark",
  },
  logo: {
    w: { xl: "166px" },
    h: "auto",
    top: { xl: "0px" },
    left: { xl: "68px" },
  },
  rightImage: {
    w: { xl: "570px" },
    h: "auto",
    top: { xl: "0px" },
    right: { xl: "0px" },
  },
  leftImage: {
    w: { xl: "405px" },
    h: "auto",
    bottom: { xl: "0px" },
    left: { xl: "0px" },
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
