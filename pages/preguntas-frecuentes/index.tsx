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
} from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";

const styles = {
  page: {
    w: "100%",
    h: "max-content",
    justifyContent: "center",
    alignItems: "center",
  },
  faqs: {
    w: "100%",
    maxW: "1200px",
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    alignItems: "center",
    mb: { base: "60px", md: "60px", lg: "80px" },
    px: { base: "20px", md: "35px", lg: "40px" },
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    gap: { base: "3vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "dark",
    fontSize: { base: "30px", md: "40px", lg: "50px", xl: "60px" },
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
  faqsContainer: {
    w: "100%",
  },
};

function FAQS() {
  const sectionData = sitedata.preguntas_frecuentes;

  return (
    <Flex {...styles.page} direction="column">
      <Flex {...styles.faqs} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Divider {...styles.divider} orientation="horizontal" />

          <Text>{sectionData.title}</Text>
        </Flex>

        <Flex {...styles.faqsContainer} direction="column">
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            pb={{ base: "20px", md: "0" }}
          >
            {sectionData?.faqs?.map((faq: any, index: number) => {
              return (
                <AccordionItem key={index} py={{ base: "10px", md: "10px" }}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {faq?.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{faq?.answer}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FAQS;
