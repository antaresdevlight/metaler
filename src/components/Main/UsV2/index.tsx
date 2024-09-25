import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Flex, Text, ScaleFade, Box } from "@chakra-ui/react";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

import sitedata from "@/src/constants/sitedata";

import heroImg from "../../../assets/metaler_contact.jpg";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
  },
  us: {
    w: "100%",
    maxW: "1440px",
    h: { base: "max-content", md: "max-content" },
    justifyContent: { lg: "center", xl: "center" },
    pb: "30px",
  },
  darkContainer: {
    w: "100%",
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    w: "85vw",
    maxW: "1100px",
    gap: { base: "7.82vw", md: "2.61vw", lg: "2vw", xl: "35px" },
    color: "usDark",
    fontSize: { base: "24px", md: "28px", lg: "34px", xl: "38px" },
    fontWeight: "600",
    lineHeight: "1.7",
    p: "2vw",
  },
  image: {
    w: "100%",
    maxW: "1440px",
    h: { base: "900px", md: "auto", xl: "800px" },
    justifyContent: "center",
  },
};

function UsV2() {
  const sectionData = sitedata.us;

  const UsRef: any = useRef(null);

  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    if (!UsRef?.current) return;

    const rect = UsRef.current.getBoundingClientRect();

    //console.log("rect.top: ", rect.top);

    const displayAtHeight = window.innerHeight / 1.5;
    setIsInView(rect.top < displayAtHeight); // && rect.bottom >= 0
  };

  useEffect(() => {
    checkInView();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
    };
  }, []);

  if (!isInView) {
    return (
      <Flex {...styles.section} ref={UsRef}>
        <Flex {...styles.us}>
          {/* DARK CONTAINER */}
          <Flex
            {...styles.darkContainer}
            direction={{ base: "column", lg: "row" }}
            position="relative"
          ></Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <ScaleFade initialScale={0.9} in={isInView}>
      <Flex {...styles.section} ref={UsRef}>
        <Flex {...styles.us}>
          <Flex {...styles.image} position="relative">
            <Image
              src={heroImg}
              width={1440}
              height={800}
              alt="metaler logo"
              style={{ opacity: 0.06 }}
            />

            {/* TEXT CONTAINER */}
            <Flex
              {...styles.darkContainer}
              direction="column"
              position="absolute"
            >
              <Flex {...styles.text} direction="column">
                <Text textAlign={{ base: "center", md: "center" }}>
                  METALER es una empresa fundada en el 2020, con el objetivo de
                  ser de las más importantes empresas en la industria de la
                  fundición, diseño y fabricación de moldes, noyos y piezas
                  terminadas.
                </Text>

                <Text textAlign={{ base: "center", md: "center" }}>
                  Somos expertos ofreciendo soluciones para redes de
                  abastecimiento de agua, alcantarillado, servicios públicos,
                  pluviales, redes de telecomunicaciones, pesas y equipos para
                  gimnasio.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default UsV2;
