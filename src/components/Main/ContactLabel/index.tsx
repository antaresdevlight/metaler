import { Flex, Text, Divider, Link } from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    justifyContent: "center",
  },
  contactLabel: {
    w: "100%",
    maxW: "1440px",
    h: "auto",
    justifyContent: { base: "center", md: "flex-end" },
    py: { base: "12vw", md: "5vw", lg: "5vw", xl: "50px" },
    //border: "1px",
  },
  title: {
    w: "max-content",
    h: "max-content",
    alignItems: "center",
    gap: { base: "1.96vw", md: "1.96vw", lg: "1.96vw", xl: "20px" },
    color: "dark",
    fontSize: { base: "30px", md: "55px", lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "0px", md: "0px", lg: "0px", xl: "0px" },
    px: { base: "0px", md: "0px", lg: "0px", xl: "0px" },
    // border: "1px",
    // borderColor: "dark",
  },
  divider: {
    w: { base: "120px", md: "230px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
};

function ContactLabel() {
  const sectionData = sitedata.contact_label;

  return (
    <Flex {...styles.section}>
      <Flex {...styles.contactLabel}>
        {/* TITLE */}
        <Flex {...styles.title}>
          <Link href={routes.CONTACT} _hover={{ textDecoration: "none" }}>
            <Text>{sectionData.title}</Text>
          </Link>

          <Divider {...styles.divider} orientation="horizontal" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ContactLabel;
