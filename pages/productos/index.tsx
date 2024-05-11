import { Flex, Text, Divider } from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    alignItems: "center",
  },
  products: {
    w: "100%",
    maxW: "1200px",
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    alignItems: "center",
    mb: { md: "60px", lg: "60px" },
  },
  title: {
    alignItems: "center",
    top: { base: "auto", md: "auto", lg: "15.63vw", xl: "222px" },
    left: { base: "auto", md: "auto", lg: "26.37vw", xl: "436px" },
    gap: { base: "3vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "dark",
    fontSize: { base: "10vw", md: "7.82vw", lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    my: { base: "40px", md: "40px", lg: "50px" },
    //border: "1px",
  },
  divider: {
    w: { base: "100px", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
};

function Products() {
  const sectionData = sitedata.productos;

  return (
    <Flex {...styles.section} direction="column">
      <Flex {...styles.products} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Text>{sectionData.title}</Text>

          <Divider {...styles.divider} orientation="horizontal" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Products;
