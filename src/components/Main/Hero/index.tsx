import { useEffect, useState } from "react";
import Image from "next/image";
import { Flex, Text, ScaleFade, useDisclosure } from "@chakra-ui/react";

import heroImg from "../../../assets/hero_img.png";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "dark",
    justifyContent: "center",
  },
  hero: {
    w: "100%",
    maxW: "1440px",
    h: "auto",
    bg: "dark",
    px: { base: "20px", md: "30px", lg: "40px", xl: "62px" },
    justifyContent: "center",
    // border: "1px",
    // borderColor: "white",
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
    w: { base: "100%", xl: "1200px" },
    maxW: "1440px",
    h: { xl: "649px" },
    justifyContent: "center",
  },
};

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => setIsOpen(false);
  }, []);

  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Flex {...styles.section}>
        <Flex {...styles.hero} position="relative">
          {/* <Text
            {...styles.text}
            position="absolute"
            textAlign={{ base: "center", lg: "left" }}
          >
            Fundidora Metaler
          </Text> */}

          <Flex {...styles.image}>
            <Image src={heroImg} width={1200} height={649} alt="metaler logo" />
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default Hero;
