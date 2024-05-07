import Image from "next/image";
import { Flex, Text, Divider } from "@chakra-ui/react";

import ImagesContainer from "./ImagesContainer";

import sitedata from "@/src/constants/sitedata";

import logo from "../../../assets/logo.png";
import mission from "../../../assets/mission.png";
import vission from "../../../assets/vission.png";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
  },
  missionVission: {
    w: "100%",
    maxW: "1440px",
    h: "auto",
    pt: { base: "12.5vw", md: "13.1vw", lg: "9.77vw", xl: "120px" },
    px: { base: "4.69vw", md: "3.91vw", lg: "2.44vw", xl: "10px" },
    justifyContent: "flex-start",
    alignItems: { base: "center", md: "center", lg: "normal" },
    // border: "1px",
  },
  title: {
    w: "max-content",
    alignItems: "center",
    gap: { base: "4.69vw", md: "2.61vw", lg: "1.45vw", xl: "20px" },
    color: "dark",
    fontSize: { base: "15vw", md: "60px", lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "4.69vw", md: "3.39vw", lg: "2.54vw", xl: "26px" },
    // border: "1px",
    // borderColor: "dark",
  },
  divider: {
    w: { base: "31.25vw", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
  missionText: {
    maxW: { base: "87.5vw", md: "auto" },
    color: "dark",
    fontSize: { base: "18px", md: "16px", lg: "16px", xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mt: { base: "3.13vw", md: "2.61vw", lg: "1.96vw", xl: "0px" },
    mb: { base: "3.13vw", md: "6.52vw", lg: "4.89vw", xl: "99px" },
    ml: { base: "0", md: "0", lg: "0px", xl: "125px" },
    // border: "1px",
  },
  imagesAndVissionContainer: {
    gap: { md: "1.96vw", lg: "2.45vw", xl: "33px" },
  },
  imagesContainer: {
    w: { md: "58.6vw", lg: "58.6vw", xl: "875px" },
    h: { md: "36.46vw", lg: "45.61vw", xl: "467px" },
    px: { md: "1.31vw", lg: "1vw", xl: "10px" },
    display: { base: "none", md: "flex" },
  },
  vissionContainer: {
    maxW: { md: "32.55vw", lg: "34.18vw", xl: "416px" },
    mt: { md: "75px", lg: "75px", xl: "75px" },
    alignItems: { base: "center", md: "normal" },
  },
  vissionTitle: {
    color: "dark",
    fontSize: { md: "48px", lg: "48px", xl: "48px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { md: "3.26vw", lg: "2.44vw", xl: "33px" },
    display: { base: "none", md: "flex" },
  },
  vissionText: {
    maxW: { base: "87.5vw", md: "auto" },
    color: "dark",
    fontSize: { base: "18px", md: "16px", lg: "16px", xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mt: { base: "3.13vw", md: "0" },
    mb: { base: "3.13vw", md: "0" },
    // border: "1px",
  },
  logo: {
    display: { base: "flex", md: "none" },
    w: "51.88vw",
    h: "auto",
    mb: "30px",
    justifyContent: "center",
    // border: "1px",
  },
  missionImage: {
    display: { base: "flex", md: "none" },
    w: "84.36vw",
    h: "auto",
    my: "6.3vw",
    justifyContent: "center",
  },
  vissionImage: {
    display: { base: "flex", md: "none" },
    w: "84.36vw",
    h: "auto",
    my: "6.3vw",
    justifyContent: "center",
  },
};

function MissionVission() {
  const sectionData = sitedata.mission_vission;

  return (
    <Flex {...styles.section}>
      <Flex {...styles.missionVission} direction="column">
        {/* LOGO */}
        <Flex {...styles.logo}>
          <Image src={logo} width={166} height={77} alt="metaler logo" />
        </Flex>

        {/* TITLE */}
        <Flex {...styles.title}>
          <Divider {...styles.divider} orientation="horizontal" />

          <Text>{sectionData.misionTitle}</Text>
        </Flex>

        {/* TEXT */}
        <Text
          {...styles.missionText}
          textAlign={{ base: "center", lg: "center", xl: "left" }}
        >
          {sectionData.misionText}
        </Text>

        {/* MISSION IMAGE */}
        <Flex {...styles.missionImage}>
          <Image src={mission} width={405} height={319} alt="right image" />
        </Flex>

        {/* IMAGES / VISION */}
        <Flex {...styles.imagesAndVissionContainer}>
          {/* IMAGES */}
          <Flex {...styles.imagesContainer}>
            <ImagesContainer />
          </Flex>

          {/* VISION */}
          <Flex {...styles.vissionContainer} direction="column">
            <Text {...styles.vissionTitle}>{sectionData.visionTitle}</Text>

            <Flex {...styles.title} display={{ base: "flex", md: "none" }}>
              <Text>{sectionData.visionTitle}</Text>

              <Divider {...styles.divider} orientation="horizontal" />
            </Flex>

            <Text
              {...styles.vissionText}
              textAlign={{ base: "center", lg: "center", xl: "left" }}
            >
              {sectionData.visionText}
            </Text>

            {/* VISSION IMAGE */}
            <Flex {...styles.vissionImage}>
              <Image src={vission} width={405} height={319} alt="right image" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MissionVission;
