import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Spinner,
} from "@chakra-ui/react";

import Category from "./Category";
import ProductCard from "./ProductCard";

import sitedata from "@/src/constants/sitedata";

import prod1 from "@/src/assets/Producto 1.png";
import prod1_2 from "@/src/assets/Producto 1.2.png";
import prod1_3 from "@/src/assets/Producto 1.3.png";
import prod2 from "@/src/assets//Producto 2.png";

const images: any = {
  "prod-1": prod1,
  "prod-2": prod1_2,
  "prod-3": prod1_3,
  "prod-4": prod2,
};

const indexByPageQuery: { [key: string]: number } = {
  alcantarillado: 0,
  "agua-potable": 1,
};

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    alignItems: "center",
  },
  products: {
    w: "100%",
    maxW: "1350px",
    h: { base: "max-content" },
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
  categoriesContainer: {
    w: "100%",
    gap: { base: "30px", md: "30px" },
  },
  productsContainer: {
    gap: { base: "20px", md: "30px" },
    alignItems: "center",
    justifyContent: "center",
    my: { base: "30px", md: "30px" },
  },
  emptyBox: {
    maxW: { base: "280px", md: "320px" },
    minW: { base: "280px", md: "320px" },
  },
};

function Products() {
  const sectionData = sitedata.productos;

  const router = useRouter();

  const refCat1 = useRef(null);
  const refCat2 = useRef(null);

  const accordionItemRefs = [refCat1, refCat2];

  const [defaultIndex, setDefaultIndex] = useState<number | undefined>(
    undefined
  );

  const getDefaultIndexFromPageQuery = () => {
    setDefaultIndex(undefined);

    const query = router?.query?.category as string;

    const index = indexByPageQuery[query] || 0;

    setDefaultIndex(index);
  };

  useEffect(() => {
    getDefaultIndexFromPageQuery();
  }, [router?.query]);

  const scrollTo = () => {
    if (!defaultIndex) return;

    const refToScrollTo: any = accordionItemRefs[defaultIndex];

    if (refToScrollTo.current) {
      console.log("refToScrollTo: ", refToScrollTo);
      refToScrollTo.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollTo();
  }, [defaultIndex]);

  if (defaultIndex === undefined) {
    return (
      <Flex {...styles.section} direction="column">
        <Flex {...styles.products} direction="column">
          {/* TITLE */}
          <Flex {...styles.title}>
            <Text>{sectionData.title}</Text>

            <Divider {...styles.divider} orientation="horizontal" />
          </Flex>

          <Flex
            {...styles.categoriesContainer}
            direction="column"
            alignItems="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="dark"
              size="xl"
              my="80px"
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex {...styles.section} direction="column">
      <Flex {...styles.products} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Text>{sectionData.title}</Text>

          <Divider {...styles.divider} orientation="horizontal" />
        </Flex>

        <Flex {...styles.categoriesContainer} direction="column">
          <Accordion
            defaultIndex={[defaultIndex]}
            allowMultiple
            pb={{ base: "50px", md: "0" }}
          >
            {sectionData.categories?.map((category: any, index: number) => {
              return (
                <AccordionItem
                  key={index}
                  py={{ base: "10px", md: "10px" }}
                  ref={accordionItemRefs[index]}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Category
                          name={category?.name}
                          description={category?.description}
                        />
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex
                      {...styles.productsContainer}
                      flexWrap="wrap"
                      direction={{ base: "column", md: "row" }}
                    >
                      {category?.products?.map((product: any, indx: number) => {
                        return (
                          <ProductCard
                            key={indx}
                            name={product?.name}
                            description={product?.description}
                            image={product?.image}
                          >
                            <Image
                              src={images[product?.id]}
                              width={549}
                              height={624}
                              alt="us"
                              placeholder="blur"
                            />
                          </ProductCard>
                        );
                      })}

                      <Flex {...styles.emptyBox} />
                      <Flex {...styles.emptyBox} />
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Products;
