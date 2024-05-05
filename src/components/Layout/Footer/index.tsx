import Image from "next/image";
import { Flex, Text, ScaleFade, Divider, Link } from "@chakra-ui/react";

import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
} from "react-icons/io5";

import sitedata from "@/src/constants/sitedata";

import logo from "../../../assets/logo.png";

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
    h: "200px",
    bg: "dark",
    justifyContent: "space-between",
    alignItems: "center",
    px: { xl: "35px" },
  },
  copyText: {
    w: "max-content",
    color: "white",
    fontSize: { xl: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    transform: "rotate(-90deg)",
    border: "1px",
    borderColor: "white",
  },
  logoConteiner: {
    w: { xl: "338px" },
    h: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    border: "1px",
    borderColor: "white",
  },
  logo: {
    w: { xl: "125px" },
    h: "auto",
    zIndex: "overlay",
  },
  divider: {
    w: { xl: "213px" },
    h: "1px",
    bg: "metaler",
    left: "0",
  },
  whiteDivider: {
    w: "1px",
    h: { xl: "86px" },
    bg: "white",
  },
  contactInfo: {
    color: "white",
    fontSize: { xl: "14px" },
    fontWeight: "400",
    lineHeight: "normal",
    gap: { xl: "60px" },
    border: "1px",
    borderColor: "white",
  },
  contactItem: {
    alignItems: "center",
    gap: { xl: "15px" },
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
      <Flex {...styles.footer}>
        {/* <Text {...styles.copyText}>{sectionData.copy}</Text> */}

        <Flex {...styles.logoConteiner} position="relative">
          <Divider
            {...styles.divider}
            orientation="horizontal"
            position="absolute"
          />

          <Flex {...styles.logo}>
            <Link href={routes.HOME}>
              <Image src={logo} width={125} height={43} alt="metaler logo" />
            </Link>
          </Flex>
        </Flex>

        <Divider {...styles.whiteDivider} orientation="vertical" />

        {/* CONTACT INFO */}
        <Flex {...styles.contactInfo}>
          {sectionData.contactInfo.map((item: any, index: number) => {
            const Icon = contactIcons[item.icon];

            return (
              <Flex key={index} {...styles.contactItem}>
                <Icon style={styles.contactIcon} />
                <Text>{item.text}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
