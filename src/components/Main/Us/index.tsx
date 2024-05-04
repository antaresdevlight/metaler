import { useEffect, useState } from "react";
import Image from "next/image";
import { Flex, Text, ScaleFade, Divider } from "@chakra-ui/react";

import CommonButton from "../../Layout/CommonButton";

import usImg from "../../../assets/us.png";

import sitedata from "@/src/constants/sitedata";

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
    h: { lg: "740px", xl: "740px" },
    maxH: "740px",
    border: "1px",
  },
  darkContainer: {
    w: { lg: "91%", xl: "91%" },
    h: { lg: "656px", xl: "656px" },
    alignItems: { lg: "normal", xl: "normal" },
    bg: "usDark",
    gap: { lg: "56px", xl: "56px" },
    pt: { lg: "116px", xl: "116px" },
    pb: { lg: "116px", xl: "116px" },
  },
  title: {
    alignItems: "center",
    top: { lg: "222px", xl: "222px" },
    left: { lg: "436px", xl: "436px" },
    gap: { xl: "23px" },
    color: "white",
    fontSize: { lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { lg: "0", xl: "0" },
    // border: "1px",
    // borderColor: "white",
  },
  titleText: {},
  divider: {
    w: { lg: "305px", xl: "305px" },
    h: "1px",
    bg: "metaler",
  },
  image: {
    w: { lg: "549px", xl: "549px" },
    maxW: "549px",
    h: { lg: "624px", xl: "624px" },
    // border: "1px",
    // borderColor: "white",
  },
  text: {
    w: { lg: "630px", xl: "630px" },
    gap: { lg: "35px", xl: "35px" },
    color: "white",
    fontSize: { lg: "18px", xl: "18px" },
    fontWeight: "600",
    lineHeight: "normal",
    mt: { lg: "215px", xl: "215px" },
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
        <Flex {...styles.darkContainer} direction="row" position="relative">
          {/* TITLE */}
          <Flex {...styles.title} position="absolute">
            <Text>{sectionData.title}</Text>

            <Divider {...styles.divider} orientation="horizontal" />
          </Flex>

          {/* IMAGE */}
          <Flex {...styles.image}>
            <Image src={usImg} width={549} height={624} alt="us" />
          </Flex>

          {/* TEXT */}
          <Flex {...styles.text} direction="column">
            <Text>{sectionData.par1}</Text>

            <Text>{sectionData.par2}</Text>

            <CommonButton text={"Leer Más"} route="/contact" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Us;
