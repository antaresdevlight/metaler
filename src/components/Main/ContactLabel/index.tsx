import { Flex, Text, Divider } from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";

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
    justifyContent: "flex-end",
    py: { xl: "77px" },
    border: "1px",
  },
  title: {
    w: "max-content",
    h: "max-content",
    alignItems: "center",
    gap: { xl: "20px" },
    color: "dark",
    fontSize: { xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { xl: "0px" },
    px: { xl: "0px" },
    border: "1px",
    borderColor: "dark",
  },
  divider: {
    w: { xl: "305px" },
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
          <Text>{sectionData.title}</Text>

          <Divider {...styles.divider} orientation="horizontal" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ContactLabel;
