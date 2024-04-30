import Image from "next/image";
import { Flex, Divider, Button } from "@chakra-ui/react";

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import logo from "../../../assets/logo.png";

const styles = {
  header: {
    w: "100%",
    h: {base: "80px", md: "98px"},
    bg: "dark",
    justifyContent: "space-between",
    alignItems: "center",
    px: { base: "20px", md: "30px", lg: "40px", xl: "62px" },
  },
  logoConteiner: {
    w: { base: "140px", md: "350px", lg: "500px", xl: "710px" },
    h: "auto",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px",
    // borderColor: "white",
  },
  logo: {
    w: {base: "115px", md: "145px"},
    h: "auto",
    zIndex: "overlay",
  },
  divider: {
    w: { base: "auto", md: "150px", lg: "200px", xl: "355px" },
    h: "1px",
    bg: "metaler",
    left: "0",
  },
  socialIconContainer: {
    w: { base: "58px", md: "140px", lg: "160px", xl: "185px" },
    justifyContent: { base: "center", md: "flex-end" },
    alignItems: "center",
    gap: { base: "10px", md: "30px" },
    // border: "1px",
    // borderColor: "white",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
    color: "white",
  },
  menu: {
    w: { base: "58px", md: "140px", lg: "160px", xl: "185px" },
    h: { base: "auto", md: "50px" },
    justifyContent: { base: "flex-end", md: "flex-end" },
    alignItems: { base: "center", md: "center" },
    // border: "1px",
    // borderColor: "white",
  },
  menuButton: {
    w: { base: "40px", md: "50px" },
    h: { base: "40px", md: "50px" },
    mt: { base: "0px", md: "0px" },
  },
};

function Header() {
  return (
    <Flex {...styles.header}>
      {/* SOCIAL ICONS */}
      <Flex {...styles.socialIconContainer}>
        <AiOutlineFacebook style={styles.socialIcon} />
        <AiOutlineInstagram style={styles.socialIcon} />
      </Flex>

      <Flex {...styles.logoConteiner} position="relative">
        <Divider
          {...styles.divider}
          orientation="horizontal"
          position="absolute"
        />

        <Flex {...styles.logo}>
          <Image src={logo} width={145} height={57} alt="metaler logo" />
        </Flex>
      </Flex>

      <Flex {...styles.menu}>
        <Flex {...styles.menuButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="auto"
            viewBox="0 0 50 50"
            fill="none"
          >
            <rect width="50" height="50" fill="#BBCD52" />
            <rect x="19" y="6" width="2" height="31" fill="#0E1B1B" />
            <rect x="28" y="12" width="2" height="31" fill="#0E1B1B" />
          </svg>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
