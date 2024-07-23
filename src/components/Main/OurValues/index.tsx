import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Flex, Text, Divider, ScaleFade } from "@chakra-ui/react";

import CommonButton from "../../Layout/CommonButton";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

import prod1 from "@/src/assets/Producto 1.png";
import prod2 from "@/src/assets/Producto 1.2.png";
import prod3 from "@/src/assets//Producto 2.png";

const productsImages: any = {
  prod1: prod1,
  prod2: prod2,
  prod3: prod3,
};

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
  },
  ourProductsContainer: {
    w: "100%",
    maxW: "1440px",
    h: "auto",
    justifyContent: {
      base: "center",
      md: "center",
      lg: "center",
      xl: "flex-start",
    },
    // border: "1px",
  },
  darkContainer: {
    w: { base: "100%", md: "100%", lg: "100%", xl: "1236px" },
    h: { base: "auto", md: "auto", lg: "auto", xl: "545px" },
    bg: "dark",
    pb: { base: "12.5vw", md: "0" },
    justifyContent: "center",
    alignItems: { base: "center", md: "center" },
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
    mt: { base: "7.82vw", md: "3.91vw", lg: "2.45vw", xl: "0px" },
    // border: "1px",
    // borderColor: "white",
  },
  divider: {
    w: { base: "25vw", md: "35.16vw", lg: "29.79vw", xl: "305px" },
    h: "1px",
    bg: "white",
  },
  productsContainer: {
    w: { base: "100%", md: "100%", lg: "100%", xl: "1170px" },
    h: "auto",
    gap: { base: "12.5vw", md: "2vw", lg: "2vw", xl: "30px" },
    mt: { base: "9.38vw", md: "7.82vw", lg: "6.1vw", xl: "62px" },
    ml: { base: "0", md: "0", lg: "0px", xl: "135px" },
    justifyContent: "center",
    alignItems: { base: "center", md: "center" },
  },
  productCard: {
    w: { base: "270px", md: "23vw", lg: "23vw", xl: "270px" },
    maxW: "270px",
    h: { base: "96.88vw", md: "31vw", lg: "31vw", xl: "370px" },
    bg: "white",
    justifyContent: "center",
  },
  productName: {
    bg: "metaler",
    color: "dark",
    fontSize: { base: "4.38vw", md: "1.83vw", lg: "1.37vw", xl: "14px" },
    fontWeight: "400",
    lineHeight: "normal",
    top: { base: "7.5vw", md: "3.13vw", lg: "2.35vw", xl: "24px" },
    left: { base: "5.32vw", md: "2.22vw", lg: "1.67vw", xl: "17px" },
    p: { base: "5px 14px", md: "5px 14px", lg: "5px 14px", xl: "5px 14px" },
  },
  productDetails: {
    w: { base: "270px", md: "23vw", lg: "23.4vw", xl: "270px" },
    maxW: "270px",
    h: { base: "21.88vw", md: "10vw", lg: "10vw", xl: "97px" },
    color: "white",
    fontSize: { base: "14px", md: "12px", lg: "14px", xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    bottom: { base: "0", md: "-4.56vw", lg: "-3.91vw", xl: "-40px" },
    left: "50%",
    transform: "translate(-50%, 0%)",
    p: { base: "4.69vw", md: "2.22vw", lg: "1.96vw", xl: "17px" },
    bg: "usDark",
    justifyContent: "center",
    alignItems: { base: "center", md: "center" },
  },
};

function OurValues() {
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
      <Flex {...styles.section} ref={OurProductsRef}>
        <Flex {...styles.ourProductsContainer} direction="column">
          <Flex {...styles.darkContainer} direction="column">
            {/* TITLE */}
            <Flex {...styles.title}>
              <Divider {...styles.divider} orientation="horizontal" />

              <Text>{sectionData.title}</Text>
            </Flex>

            {/* PRODUCTS CONTAINER */}
            <Flex
              {...styles.productsContainer}
              direction={{ base: "column", md: "row" }}
            >
              {sectionData.values.map((product: any, index: number) => {
                return (
                  <Flex key={index} {...styles.productCard} position="relative">
                    <Flex {...styles.productName} position="absolute">
                      <Text>{product.name}</Text>
                    </Flex>

                    <Image
                      src={productsImages[product.img]}
                      width={270}
                      height={370}
                      alt="product"
                    />

                    <Flex {...styles.productDetails} position="absolute">
                      <Text textAlign="center">{product.details}</Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          <Flex w="100%" justifyContent={{ base: "center", md: "normal" }}>
            <CommonButton
              text={"Ver Más"}
              route={routes.PRODUCTS}
              mt={{ base: "15vw", md: "13vw", lg: "11vw", xl: "180px" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
}

export default OurValues;
