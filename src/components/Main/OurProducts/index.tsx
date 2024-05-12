import Image from "next/image";
import { Flex, Text, Divider } from "@chakra-ui/react";

import CommonButton from "../../Layout/CommonButton";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

import prod1 from "../../../assets/prod1.png";
import prod2 from "../../../assets/prod2.png";
import prod3 from "../../../assets/prod3.png";

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
    h: { base: "auto", md: "auto", lg: "auto", xl: "445px" },
    bg: "dark",
    pb: { base: "12.5vw", md: "0" },
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
    gap: { base: "12.5vw", md: "3.26vw", lg: "2.93vw", xl: "30px" },
    mt: { base: "9.38vw", md: "7.82vw", lg: "6.1vw", xl: "62px" },
    ml: { base: "0", md: "0", lg: "0px", xl: "135px" },
    justifyContent: "center",
    alignItems: { base: "center", md: "normal" },
    // border: "1px",
    // borderColor: "white",
  },
  productCard: {
    w: { base: "87.5vw", md: "28.65vw", lg: "28.33vw", xl: "370px" },
    h: { base: "96.88vw", md: "32.56vw", lg: "31.25vw", xl: "408px" },
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
    w: { base: "90%", md: "26.1vw", lg: "25.4vw", xl: "336px" },
    h: { base: "21.88vw", md: "13.68vw", lg: "11.72vw", xl: "97px" },
    bg: "dark",
    color: "white",
    fontSize: { base: "5vw", md: "2.35vw", lg: "2.15vw", xl: "24px" },
    fontWeight: "400",
    lineHeight: "normal",
    bottom: { base: "3.13vw", md: "-4.56vw", lg: "-3.91vw", xl: "-40px" },
    left: "50%",
    transform: "translate(-50%, 0%)",
    p: { base: "4.69vw", md: "2.22vw", lg: "1.96vw", xl: "17px" },
  },
};

function OurProducts() {
  const sectionData = sitedata.our_products;

  return (
    <Flex {...styles.section}>
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
            {sectionData.products.map((product: any, index: number) => {
              return (
                <Flex key={index} {...styles.productCard} position="relative">
                  <Flex {...styles.productName} position="absolute">
                    <Text>{product.name}</Text>
                  </Flex>

                  <Image
                    src={productsImages[product.img]}
                    width={672}
                    height={408}
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
            mt={{ base: "15.63vw", md: "13.1vw", lg: "11.72vw", xl: "219px" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default OurProducts;
