import Image from "next/image";
import {
  Flex,
  Divider,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import logo from "../../../assets/logo.png";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

const styles = {
  mainContainer: {
    w: "100%",
    h: "auto",
    bg: "dark",
    justifyContent: "center",
  },
  header: {
    w: "100%",
    maxW: "2500px",
    h: { base: "80px", md: "98px" },
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
    w: { base: "115px", md: "145px" },
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
  menuItemLink: {
    w: "100%",
    _hover: { textDecoration: "none" },
  },
};

function Header() {
  const sectionData = sitedata.header;

  return (
    <Flex {...styles.mainContainer}>
      <Flex {...styles.header}>
        {/* SOCIAL ICONS */}
        <Flex {...styles.socialIconContainer}>
          <Link href="https://chakra-ui.com" isExternal>
            <AiOutlineFacebook style={styles.socialIcon} />
          </Link>

          <Link href="https://chakra-ui.com" isExternal>
            <AiOutlineInstagram style={styles.socialIcon} />
          </Link>
        </Flex>

        <Flex {...styles.logoConteiner} position="relative">
          <Divider
            {...styles.divider}
            orientation="horizontal"
            position="absolute"
          />

          <Flex {...styles.logo}>
            <Link href={routes.HOME}>
              <Image src={logo} width={145} height={57} alt="metaler logo" />
            </Link>
          </Flex>
        </Flex>

        <Flex {...styles.menu}>
          <Menu>
            <MenuButton as={Button} variant="unstyled" {...styles.menuButton}>
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
            </MenuButton>
            <MenuList zIndex="overlay">
              {sectionData.menu.map((item: any, index: number) => {
                return (
                  <MenuItem key={index}>
                    <Link
                      href={item.route}
                      {...styles.menuItemLink}
                      textDecoration="none"
                    >
                      {item.text}
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
