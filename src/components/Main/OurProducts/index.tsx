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
    justifyContent: "flex-start",
    //mb: { xl: "250px" },
    border: "1px",
  },
  darkContainer: {
    w: { xl: "1236px" },
    h: { xl: "445px" },
    bg: "dark",
  },
  title: {
    w: "100%",
    h: "max-content",
    alignItems: "center",
    gap: { xl: "20px" },
    color: "white",
    fontSize: { xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "0px" },
    px: { xl: "0px" },
    border: "1px",
    borderColor: "white",
  },
  divider: {
    w: { xl: "305px" },
    h: "1px",
    bg: "white",
  },
  productsContainer: {
    w: { xl: "1170px" },
    h: "auto",
    border: "1px",
    borderColor: "white",
    gap: { xl: "30px" },
    mt: { xl: "62px" },
    ml: { xl: "135px" },
    justifyContent: "center",
  },
  productCard: {
    w: { xl: "370px" },
    h: { xl: "408px" },
    bg: "white",
  },
  productName: {
    bg: "metaler",
    color: "dark",
    fontSize: { xl: "14px" },
    fontWeight: "400",
    lineHeight: "normal",
    top: { xl: "24px" },
    left: { xl: "17px" },
    p: { xl: "5px 14px" },
  },
  productDetails: {
    w: { xl: "336px" },
    h: { xl: "97px" },
    bg: "dark",
    color: "white",
    fontSize: { xl: "24px" },
    fontWeight: "400",
    lineHeight: "normal",
    bottom: { xl: "-40px" },
    left: "50%",
    transform: "translate(-50%, 0%)",
    p: { xl: "17px" },
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
          <Flex {...styles.productsContainer}>
            {sectionData.products.map((product: any, index: number) => {
              return (
                <Flex key={index} {...styles.productCard} position="relative">
                  <Flex {...styles.productName} position="absolute">
                    <Text>{product.name}</Text>
                  </Flex>

                  <Image
                    src={productsImages[product.img]}
                    width={370}
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

        <CommonButton
          text={"Ver Más"}
          route={routes.CONTACT}
          mt={{ base: "100px", md: "219px" }}
        />
      </Flex>
    </Flex>
  );
}

export default OurProducts;
