import { useEffect, useState, useRef } from "react";
import {
  Flex,
  Text,
  Divider,
  ScaleFade,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
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
    py: { base: "21.88vw", md: "13.1vw", lg: "9.28vw", xl: "126px" },
    justifyContent: "center",
    alignItems: "center",
    // border: "1px",
  },
  content: {
    w: { base: "100%", md: "91.15vw", lg: "92.78vw", xl: "1240px" },
    h: { base: "auto", md: "auto", lg: "auto", xl: "509px" },
    justifyContent: { base: "center", md: "center", lg: "flex-end" },
    // border: "1px",
  },
  rightContainer: {
    w: { base: "100%", md: "100%", lg: "68.36vw", xl: "1040px" },
    h: { base: "93.75vw", md: "39.1vw", lg: "35.16vw", xl: "367px" },
    bg: "dark",
    alignItems: "center",
    pt: { base: "9.38vw", md: "3.26vw", lg: "3.42vw", xl: "35px" },
  },
  title: {
    w: "100%",
    alignItems: "center",
    gap: { base: "3.13vw", md: "2.61vw", lg: "1.96vw", xl: "20px" },
    color: "white",
    fontSize: { base: "8.75vw", md: "48px", lg: "4.89vw", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "6.25vw", md: "3vw", lg: "2.93vw", xl: "23px" },
    px: { base: "3.13vw", md: "4.56vw", lg: "3.42vw", xl: "35px" },
    // border: "1px",
    // borderColor: "white",
  },
  divider: {
    w: { base: "21.88vw", md: "35.16vw", lg: "24.42vw", xl: "305px" },
    h: "1px",
    bg: "white",
  },
  text: {
    maxW: "600px",
    color: "white",
    fontSize: { base: "5vw", md: "16px", lg: "16px", xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    px: { base: "6.25vw", md: "0" },
    // border: "1px",
    // borderColor: "white",
  },
  boxesContainer: {
    alignItems: "center",
    gap: { base: "3.75vw", md: "3.91vw", lg: "2.93vw", xl: "30px" },
    mt: { base: "14.1vw", md: "5.86vw", lg: "5.86vw", xl: "78px" },
  },
  box: {
    w: { base: "28.13vw", md: "22.14vw", lg: "14.65vw", xl: "170px" },
    h: { base: "28.13vw", md: "22.14vw", lg: "14.65vw", xl: "170px" },
    maxW: "170px",
    maxH: "170px",
    justifyContent: "center",
    alignItems: "center",
    gap: { base: "4.38vw", md: "1.83vw", lg: "1.37vw", xl: "14px" },
    bg: "white",
    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.10)",
    pt: { base: "9.38vw", md: "4.56vw", lg: "3.42vw", xl: "35px" },
    pb: { base: "9.38vw", md: "5.99vw", lg: "4.5vw", xl: "46px" },
    color: "dark",
    fontSize: { base: "3.8vw", md: "18px", lg: "18px", xl: "18px" },
    fontWeight: "600",
    lineHeight: "normal",
  },
  icon: {
    w: { base: "9.38vw", md: "50px" },
    h: { base: "9.38vw", md: "50px" },
  },
  leftContainer: {
    w: { base: "87.5vw", md: "45.58vw", lg: "27.35vw", xl: "370px" },
    h: { base: "auto", md: "39.1vw", lg: "27.35vw", xl: "354px" },
    bg: "metaler",
    bottom: { lg: "0", xl: "0" },
    left: { lg: "0", xl: "0" },
    py: { base: "14.1vw", md: "5.86vw", lg: "4.4vw", xl: "85px" },
    px: { base: "6.25vw", md: "4.56vw", lg: "1.95vw", xl: "35px" },
    justifyContent: "center",
    alignItems: "center",
    gap: { base: "3.13vw", md: "1.31vw", lg: "0.98vw", xl: "10px" },
    mb: { base: "0", md: "0", lg: "-5.86vw", xl: "0" },
  },
  leftContainerItem: {
    w: "100%",
    color: "dark",
    fontSize: { base: "4.1vw", md: "16px", lg: "16px", xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    my: "10px",
  },
  leftContainerItemText: {},
};

function OurFocus() {
  const sectionData = sitedata.our_focus;

  const OurFocusRef: any = useRef(null);

  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    if (!OurFocusRef?.current) return;

    const rect = OurFocusRef.current.getBoundingClientRect();

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
      <Flex {...styles.section} ref={OurFocusRef}>
        <Flex
          {...styles.ourFocusContainer}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex {...styles.content} position="relative">
            {/* RIGHT CONTAINER */}
            <Flex {...styles.rightContainer} direction="column">
              {/* TITLE */}
              <Flex {...styles.title}>
                <Divider {...styles.divider} orientation="horizontal" />

                <Text>Nuestro Enfoque</Text>
              </Flex>

              {/* TEXT */}
              <Text {...styles.text} textAlign={{ base: "center", md: "left" }}>
              Somos una empresa dedicada a la realización de moldes para fundición, noyos y la producción de piezas terminadas, para diferentes tipos de industrias con la más alta calidad y los precios más competitivos del mercado.
              </Text>

              {/* BOXES */}
              <Flex {...styles.boxesContainer}>
                {sectionData.boxes.map((box: any, index: number) => {
                  const Icon = Icons[box.icon];

                  return (
                    <Flex key={index} {...styles.box} direction="column">
                      <Flex {...styles.icon}>
                        <Icon />
                      </Flex>
                      <Text>{box.text}</Text>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>

            {/* LEFT CONTAINER */}
            <Flex
              {...styles.leftContainer}
              position={{ lg: "absolute" }}
              direction="column"
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              <UnorderedList>
                {sectionData.list.map((item: string, indx: number) => {
                  return (
                    <ListItem key={indx} {...styles.leftContainerItem}>
                      <Text {...styles.leftContainerItemText} textAlign="left">
                        {item}
                      </Text>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Flex>
          </Flex>

          {/* LEFT CONTAINER  - for medium and small screens */}
          <Flex
            {...styles.leftContainer}
            direction="column"
            display={{ base: "flex", md: "flex", lg: "none" }}
            mt={{ base: "25vw", md: "15vw" }}
          >
            <UnorderedList>
              {sectionData.list.map((item: string, indx: number) => {
                return (
                  <ListItem key={indx} {...styles.leftContainerItem}>
                    {/* <IoCheckmark /> */}
                    <Text {...styles.leftContainerItemText} textAlign="left">
                      {item}
                    </Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default OurFocus;
