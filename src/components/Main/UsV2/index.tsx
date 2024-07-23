import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Flex, Text, ScaleFade, Divider } from "@chakra-ui/react";

import CommonButton from "../../Layout/CommonButton";

import usImg from "../../../assets/us.png";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

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
    justifyContent: { lg: "center", xl: "fcenter" },
  },
  darkContainer: {
    w: { base: "100%", md: "100%", lg: "91%", xl: "91%" },
    alignItems: { base: "center", md: "center", lg: "center", xl: "center" },
    bg: "white",
    pt: { base: "21.88vw", md: "7.82vw", lg: "7.82vw", xl: "135px" },
    pb: { base: "21.88vw", md: "7.82vw", lg: "7.82vw", xl: "135px" },
  },
  text: {
    w: { lg: "auto", xl: "630px" },
    maxW: { base: "87.5vw", md: "87.24vw", lg: "48.83vw", xl: "630px" },
    gap: { base: "7.82vw", md: "2.61vw", lg: "2vw", xl: "35px" },
    color: "usDark",
    fontSize: { md: "20px", lg: "24pxpx", xl: "28px" },
    fontWeight: "600",
    lineHeight: "normal",
    p: { base: "1.57vw", md: "3.26vw", lg: "1.47vw", xl: "0" },
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
          {/* DARK CONTAINER */}
          <Flex
            {...styles.darkContainer}
            direction="column"
            position="relative"
          >
            {/* TEXT */}
            <Flex {...styles.text} direction="column">
              <Text textAlign={{ base: "center", md: "center" }}>
                {sectionData.par1}
              </Text>

              <Text textAlign={{ base: "center", md: "center" }}>
                {sectionData.par2}
              </Text>

              {/* <Flex w="100%" justifyContent={{ base: "center", md: "normal" }}>
              <CommonButton
                text={"Leer Más"}
                route={routes.FAQS}
                mt={{ base: "20px" }}
              />
            </Flex> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default UsV2;
