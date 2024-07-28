import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Flex, Text, Divider, ScaleFade, border } from "@chakra-ui/react";

import ImagesContainer from "./ImagesContainer";

import sitedata from "@/src/constants/sitedata";

import logo from "../../../assets/logo_1.png";
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
    pt: { base: "10vw", md: "10vw", lg: "9vw", xl: "40px" },
    px: { base: "4.69vw", md: "3.91vw", lg: "2.44vw", xl: "10px" },
    justifyContent: "flex-start",
    alignItems: { base: "center", md: "center", lg: "center" },
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
  },
  divider: {
    w: { base: "31.25vw", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
  missionText: {
    maxW: { base: "87.5vw", md: "85vw", lg: "60vw" },
    color: "dark",
    fontSize: { base: "18px", md: "20px", lg: "22px", xl: "24px" },
    fontWeight: "400",
    lineHeight: "normal",
    mt: { base: "3.13vw", md: "2.61vw", lg: "1.96vw", xl: "0px" },
  },
  logo: {
    display: { base: "flex", md: "flex" },
    w: "220px",
    h: "auto",
    mt: "10px",
    mb: { base: "30px", md: "50px", lg: "70px" },
    justifyContent: "center",
    borderRadius: "15px",
    border: "1px",
    borderColor: "gray.200",
  },
  missionImage: {
    display: { base: "flex", md: "flex" },
    w: "84.36vw",
    h: "auto",
    my: { base: "6vw", md: "5vw", lg: "6vw" },
    justifyContent: "center",
  },
  vissionImage: {
    display: { base: "flex", md: "flex", lg: "6vw" },
    w: "84.36vw",
    h: "auto",
    my: { base: "6vw", md: "5vw", lg: "6vw" },
    justifyContent: "center",
  },
};

function MissionVissionV2() {
  const sectionData = sitedata.mission_vission;

  const MissionVissionRef: any = useRef(null);

  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    if (!MissionVissionRef?.current) return;

    const rect = MissionVissionRef.current.getBoundingClientRect();

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

  return (
    <ScaleFade initialScale={0.9} in={isInView}>
      <Flex {...styles.section} ref={MissionVissionRef}>
        <Flex {...styles.missionVission} direction="column">
          {/* LOGO */}
          <Flex {...styles.logo} overflow="hidden">
            <Image src={logo} width={220} height={80} alt="metaler logo" />
          </Flex>

          {/* MISSION TITLE */}
          <Flex {...styles.title}>
            <Divider {...styles.divider} orientation="horizontal" />

            <Text>{sectionData.misionTitle}</Text>
          </Flex>

          {/* MISSION TEXT */}
          <Text
            {...styles.missionText}
            textAlign={{ base: "center", lg: "center", xl: "center" }}
          >
            {sectionData.misionText}
          </Text>

          {/* MISSION IMAGE */}
          <Flex {...styles.missionImage}>
            <Image src={mission} width={700} height={319} alt="right image" />
          </Flex>

          {/* VISION TITLE */}
          <Flex
            {...styles.title}
            direction="row-reverse"
            mt={{ base: "20px", md: "50px" }}
          >
            <Divider {...styles.divider} orientation="horizontal" />

            <Text>{sectionData.visionTitle}</Text>
          </Flex>

          {/* VISION TEXT */}
          <Text
            {...styles.missionText}
            textAlign={{ base: "center", lg: "center", xl: "center" }}
          >
            {sectionData.visionText}
          </Text>

          {/* VISION IMAGE */}
          <Flex {...styles.vissionImage}>
            <Image src={vission} width={700} height={319} alt="right image" />
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default MissionVissionV2;
