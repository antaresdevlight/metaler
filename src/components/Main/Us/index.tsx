import { useEffect, useState } from "react";
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
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    //maxH: "740px",
    justifyContent: { lg: "center", xl: "flex-start" },
    // border: "1px",
  },
  darkContainer: {
    w: { base: "100%", md: "100%", lg: "91%", xl: "91%" },
    h: { base: "max-content", md: "max-content", lg: "656px", xl: "656px" },
    alignItems: { base: "center", md: "center", lg: "normal", xl: "normal" },
    bg: "usDark",
    gap: { base: "9.38vw", md: "5.21vw", lg: "2.45vw", xl: "56px" },
    pt: { base: "21.88vw", md: "7.82vw", lg: "7.82vw", xl: "116px" },
    pb: { base: "21.88vw", md: "7.82vw", lg: "7.82vw", xl: "116px" },
  },
  title: {
    alignItems: "center",
    top: { base: "auto", md: "auto", lg: "15.63vw", xl: "222px" },
    left: { base: "auto", md: "auto", lg: "26.37vw", xl: "436px" },
    gap: { base: "3.13vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "white",
    fontSize: { base: "10.94vw", md: "7.82vw", lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    // border: "1px",
    // borderColor: "white",
  },
  titleText: {},
  divider: {
    w: { base: "130px", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "metaler",
  },
  image: {
    // w: { lg: "549px", xl: "549px" },
    maxW: { base: "87.5vw", md: "52.1vw", lg: "549px" },
    h: { base: "auto", md: "58.6vw", lg: "624px", xl: "624px" }, //109.38vw
    // border: "1px",
    // borderColor: "white",
  },
  text: {
    w: { lg: "auto", xl: "630px" },
    maxW: { base: "87.5vw", md: "87.24vw", lg: "48.83vw", xl: "630px" },
    gap: { base: "7.82vw", md: "2.61vw", lg: "2vw", xl: "35px" },
    color: "white",
    fontSize: { md: "1.96vw", lg: "16px", xl: "18px" },
    fontWeight: "600",
    lineHeight: "normal",
    mt: { lg: "18vw", xl: "215px" },
    p: { base: "1.57vw", md: "3.26vw", lg: "1.47vw", xl: "0" },
    mr: { lg: "2.44vw", xl: "0" },
    // border: "1px",
    // borderColor: "white",
  },
};

function Us() {
  const sectionData = sitedata.us;

  return (
    <Flex {...styles.section}>
      <Flex {...styles.us}>
        {/* DARK CONTAINER */}
        <Flex
          {...styles.darkContainer}
          direction={{ base: "column", lg: "row" }}
          position="relative"
        >
          {/* TITLE */}
          <Flex {...styles.title} position={{ md: "relative", lg: "absolute" }}>
            <Text>{sectionData.title}</Text>

            <Divider {...styles.divider} orientation="horizontal" />
          </Flex>

          {/* IMAGE */}
          <Flex {...styles.image}>
            <Image src={usImg} width={549} height={624} alt="us" />
          </Flex>

          {/* TEXT */}
          <Flex {...styles.text} direction="column">
            <Text textAlign={{ base: "center", md: "left" }}>
              {sectionData.par1}
            </Text>

            <Text textAlign={{ base: "center", md: "left" }}>
              {sectionData.par2}
            </Text>

            <Flex w="100%" justifyContent={{ base: "center", md: "normal" }}>
              <CommonButton
                text={"Leer Más"}
                route={routes.CONTACT}
                mt={{ base: "20px" }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Us;
