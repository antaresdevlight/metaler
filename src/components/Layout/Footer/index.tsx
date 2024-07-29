import Image from "next/image";
import { Flex, Text, ScaleFade, Divider, Link } from "@chakra-ui/react";

import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
} from "react-icons/io5";

import sitedata from "@/src/constants/sitedata";

import logo from "../../../assets/logo_1.png";

import routes from "@/src/constants/routes";

const contactIcons: any = {
  mail: IoMailOutline,
  phone: IoPhonePortraitOutline,
  location: IoLocationOutline,
};

const styles = {
  mainContainer: {
    w: "100%",
    h: "auto",
    bg: "dark",
    justifyContent: "center",
  },
  footer: {
    w: "100%",
    maxW: "2500px",
    h: { base: "auto", md: "200px" },
    bg: "dark",
    justifyContent: "space-between",
    alignItems: "center",
    px: { base: "25px", md: "35px", lg: "40px", xl: "45px" },
    py: { base: "35px", md: "30px", lg: "0px" },
    gap: { base: "25px", xl: "0px" },
  },
  copyText: {
    w: "max-content",
    color: "white",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    transform: "rotate(-90deg)",
    // border: "1px",
    // borderColor: "white",
  },
  logoConteiner: {
    w: { base: "230px", md: "260px", xl: "338px" },
    h: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    mb: { base: "10px", md: "0" },
    // border: "1px",
    // borderColor: "white",
  },
  logo: {
    w: { base: "110px", xl: "110px" },
    h: "auto",
    zIndex: "overlay",
    borderRadius: "15px",
  },
  divider: {
    w: { base: "200px", xl: "228px" },
    h: "1px",
    bg: "metaler",
    left: "0",
  },
  whiteDivider: {
    w: "1px",
    h: { base: "0px", lg: "86px", xl: "86px" },
    bg: "white",
  },
  contactInfo: {
    color: "white",
    fontSize: { base: "12px", xl: "14px" },
    fontWeight: "400",
    lineHeight: "normal",
    gap: { base: "25px", lg: "15px", xl: "60px" },
    alignItems: { base: "center", md: "normal" },
    // border: "1px",
    // borderColor: "white",
  },
  contactItem: {
    w: "100%",
    alignItems: "center",
    gap: { base: "10px", xl: "15px" },
    justifyContent: { base: "center", md: "center" },
  },
  contactIcon: {
    width: "24px",
    height: "24px",
    color: "white",
  },
};

function Footer() {
  const sectionData = sitedata.footer;

  return (
    <Flex {...styles.mainContainer}>
      <Flex
        {...styles.footer}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        {/* <Text {...styles.copyText}>{sectionData.copy}</Text> */}

        <Flex {...styles.logoConteiner} position="relative">
          <Divider
            {...styles.divider}
            orientation="horizontal"
            position="absolute"
          />

          <Flex {...styles.logo} overflow="hidden">
            <Link href={routes.HOME}>
              <Image src={logo} width={110} height={20} alt="metaler logo" />
            </Link>
          </Flex>
        </Flex>

        <Divider {...styles.whiteDivider} orientation="vertical" />

        {/* CONTACT INFO */}
        <Flex {...styles.contactInfo} direction={{ base: "column", md: "row" }}>
          {sectionData.contactInfo.map((item: any, index: number) => {
            const Icon = contactIcons[item.icon];

            return (
              <Flex key={index} {...styles.contactItem}>
                <Icon style={styles.contactIcon} />
                <Text textAlign={{ base: "left", md: "left" }}>
                  {item.text}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
