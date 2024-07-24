import { useEffect, useState, useRef } from "react";
import { Flex, Text, Divider, ScaleFade } from "@chakra-ui/react";

import { RiTeamLine } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { LiaHandshakeSolid } from "react-icons/lia";
import { BsJournalCheck } from "react-icons/bs";

import CommonButton from "../../Layout/CommonButton";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

const Icons: any = {
  team: RiTeamLine,
  efectivness: GoGoal,
  confidence: LiaHandshakeSolid,
  responsability: BsJournalCheck,
};

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
    mb: "80px",
  },
  coloredContainer: {
    w: { base: "100%", md: "90%" },
    h: "auto",
    bg: "dark",
    py: "60px",
  },
  title: {
    w: "100%",
    h: "max-content",
    alignItems: "center",
    gap: { base: "4.69vw", md: "2.61vw", lg: "1.96vw", xl: "20px" },
    color: "white",
    fontSize: { base: "7.19vw", md: "6.52vw", lg: "5.86vw", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "0", md: "0", lg: "0px", xl: "0px" },
    px: { base: "3.13vw", md: "2.61vw", lg: "2.45vw", xl: "0px" },
    mt: "0",
    // border: "1px",
    // borderColor: "white",
  },
  divider: {
    w: { base: "25vw", md: "35.16vw", lg: "29.79vw", xl: "305px" },
    h: "1px",
    bg: "white",
  },
  valuesContainer: {
    alignItems: { base: "center", md: "normal" },
    justifyContent: "center",
    my: "50px",
    gap: "20px",
  },
  value: {
    w: { base: "270px", md: "280px" },
    maxW: "280px",
    py: "30px",
    px: "10px",
    alignItems: "center",
    color: "white",
    border: "1px",
    _hover: { opacity: 0.8 },
  },
  valueName: {
    fontSize: { base: "18px", md: "20px", lg: "24px", xl: "26px" },
    fontWeight: "700",
    my: "10px",
  },
  valueDetails: {
    fontSize: { base: "14px", md: "16px", lg: "18px", xl: "20px" },
    fontWeight: "500",
  },
};

function OurValuesV2() {
  const sectionData = sitedata.our_values;

  const OurProductsRef: any = useRef(null);

  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    if (!OurProductsRef?.current) return;

    const rect = OurProductsRef.current.getBoundingClientRect();

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
      <Flex
        {...styles.section}
        ref={OurProductsRef}
        direction="column"
        alignItems="center"
      >
        <Flex {...styles.coloredContainer} direction="column">
          {/* TITLE */}
          <Flex {...styles.title}>
            <Divider {...styles.divider} orientation="horizontal" />

            <Text>{sectionData.title}</Text>
          </Flex>

          {/* VALUES */}
          <Flex
            {...styles.valuesContainer}
            direction={{ base: "column", md: "row" }}
            flexWrap="wrap"
          >
            {sectionData.values.map((value: any, index: number) => {
              const Icon = Icons[value.icon];

              return (
                <Flex key={index} direction="column" {...styles.value}>
                  <Icon style={{ width: "30px", height: "30px" }} />

                  <Text {...styles.valueName}>{value.name}</Text>

                  <Text {...styles.valueDetails} textAlign="center">
                    {value.details}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Flex w="100%" justifyContent={{ base: "center", md: "normal" }}>
          <CommonButton
            text={"Ver Más"}
            route={routes.PRODUCTS}
            mt={{ base: "15vw", md: "13vw", lg: "11vw", xl: "130px" }}
          />
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default OurValuesV2;
