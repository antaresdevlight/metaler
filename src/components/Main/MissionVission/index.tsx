import { Flex, Text, Divider } from "@chakra-ui/react";

import ImagesContainer from "./ImagesContainer";

import sitedata from "@/src/constants/sitedata";

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
    pt: { xl: "120px" },
    px: { xl: "10px" },
    justifyContent: "flex-start",
    border: "1px",
  },
  title: {
    w: "max-content",
    alignItems: "center",
    gap: { xl: "20px" },
    color: "dark",
    fontSize: { xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "26px" },
    border: "1px",
    borderColor: "dark",
  },
  divider: {
    w: { xl: "305px" },
    h: "1px",
    bg: "dark",
  },
  missionText: {
    color: "dark",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "99px" },
    ml: { xl: "125px" },
  },
  imagesAndVissionContainer: {
    gap: { xl: "33px" },
  },
  imagesContainer: {
    w: { xl: "875px" },
    h: { xl: "467px" },
    px: { xl: "10px" },
  },
  vissionContainer: {
    maxW: { xl: "416px" },
    mt: { xl: "75px" },
  },
  vissionTitle: {
    color: "dark",
    fontSize: { xl: "48px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "33px" },
  },
  vissionText: {
    color: "dark",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
  },
};

function MissionVission() {
  const sectionData = sitedata.mission_vission;

  return (
    <Flex {...styles.section}>
      <Flex {...styles.missionVission} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Divider {...styles.divider} orientation="horizontal" />

          <Text>{sectionData.misionTitle}</Text>
        </Flex>

        {/* TEXT */}
        <Text {...styles.missionText}>{sectionData.misionText}</Text>

        {/* IMAGES / VISION */}
        <Flex {...styles.imagesAndVissionContainer}>
          {/* IMAGES */}
          <Flex {...styles.imagesContainer}>
            <ImagesContainer />
          </Flex>

          {/* VISION */}
          <Flex {...styles.vissionContainer} direction="column">
            <Text {...styles.vissionTitle}>{sectionData.visionTitle}</Text>

            <Text {...styles.vissionText}>{sectionData.visionText}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MissionVission;
