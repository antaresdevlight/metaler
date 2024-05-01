import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Flex, Text, ScaleFade, useDisclosure } from "@chakra-ui/react";

import heroImg from "../../../assets/hero_img.png";

const styles = {
  hero: {
    w: "100%",
    h: "auto",
    bg: "dark",
    px: { base: "20px", md: "30px", lg: "40px", xl: "62px" },
    justifyContent: "flex-end",
  },
  text: {
    maxW: { base: "auto", xl: "282px" },
    fontSize: { base: "40px", md: "40px", lg: "50px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    color: "white",
    zIndex: "1",
    top: { base: "50%", xl: "154px" },
    left: { base: "50%", xl: "154px" },
    transform: { base: "translate(-50%, -50%)", xl: "none" },
    // border: "1px",
    // borderColor: "white",
  },
  image: {
    w: { base: "auto", xl: "1043px" },
    maxW: "1043px",
    h: { xl: "649px" },
  },
};

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    setIsOpen(true);

    return () => setIsOpen(false);
  }, []);

  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Flex {...styles.hero} position="relative">
        <Text
          {...styles.text}
          position="absolute"
          textAlign={{ base: "center", lg: "left" }}
        >
          Fundidora Metaler
        </Text>

        <Flex {...styles.image}>
          <Image src={heroImg} width={1043} height={649} alt="metaler logo" />
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default Hero;
