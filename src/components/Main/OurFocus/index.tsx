import { Flex, Text, Divider } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";

import Icons from "./Icons";

import sitedata from "@/src/constants/sitedata";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
  },
  ourFocusContainer: {
    w: "100%",
    maxW: "1440px",
    h: "auto",
    py: { xl: "126px" },
    justifyContent: "center",
    alignItems: "center",
    border: "1px",
  },
  content: {
    w: { xl: "1240px" },
    h: { xl: "509px" },
    justifyContent: "flex-end",
    border: "1px",
  },
  rightContainer: {
    w: { xl: "1040px" },
    h: { xl: "367px" },
    bg: "dark",
    alignItems: "center",
    pt: { xl: "35px" },
  },
  title: {
    w: "100%",
    alignItems: "center",
    gap: { xl: "20px" },
    color: "white",
    fontSize: { xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "23px" },
    px: { xl: "35px" },
    border: "1px",
    borderColor: "white",
  },
  divider: {
    w: { xl: "305px" },
    h: "1px",
    bg: "white",
  },
  text: {
    maxW: "600px",
    color: "white",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
  },
  boxesContainer: {
    alignItems: "center",
    gap: { xl: "30px" },
    mt: { xl: "78px" },
  },
  box: {
    w: { xl: "170px" },
    h: { xl: "170px" },
    justifyContent: "center",
    alignItems: "center",
    gap: { xl: "14px" },
    bg: "white",
    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.10)",
    pt: { xl: "35px" },
    pb: { xl: "46px" },
    color: "dark",
    fontSize: { xl: "18px" },
    fontWeight: "600",
    lineHeight: "normal",
  },
  leftContainer: {
    w: { xl: "370px" },
    h: { xl: "354px" },
    bg: "metaler",
    bottom: { xl: "0" },
    left: { xl: "0" },
    py: { xl: "85px" },
    px: { xl: "35px" },
    justifyContent: "center",
    alignItems: "center",
    gap: { xl: "10px" },
  },
  leftContainerItem: {
    color: "dark",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
  },
  leftContainerItemText: {},
};
function OurFocus() {
  const sectionData = sitedata.our_focus;

  return (
    <Flex {...styles.section}>
      <Flex {...styles.ourFocusContainer}>
        <Flex {...styles.content} position="relative">
          {/* RIGHT CONTAINER */}
          <Flex {...styles.rightContainer} direction="column">
            {/* TITLE */}
            <Flex {...styles.title}>
              <Divider {...styles.divider} orientation="horizontal" />

              <Text>{sectionData.title}</Text>
            </Flex>

            {/* TEXT */}
            <Text {...styles.text}>{sectionData.text}</Text>

            {/* BOXES */}
            <Flex {...styles.boxesContainer}>
              {sectionData.boxes.map((box: any, index: number) => {
                const Icon = Icons[box.icon];

                return (
                  <Flex key={index} {...styles.box} direction="column">
                    <Icon />
                    <Text>{box.text}</Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          {/* LEFT CONTAINER */}
          <Flex
            {...styles.leftContainer}
            position="absolute"
            direction="column"
          >
            {sectionData.list.map((item: string, indx: number) => {
              return (
                <Flex key={indx} {...styles.leftContainerItem}>
                  {/* <IoCheckmark /> */}
                  <Text {...styles.leftContainerItemText} textAlign="center">
                    {item}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default OurFocus;
