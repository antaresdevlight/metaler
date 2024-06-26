import { Fragment } from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import sitedata from "@/src/constants/sitedata";
import routes from "@/src/constants/routes";

import logo from "../../../assets/logo.png";

const socialIcons: any = {
  facebook: AiOutlineFacebook,
  instagram: AiOutlineInstagram,
};

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
  leftContainer: {
    w: { base: "20%", lg: "35%" },
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
    //bg: "red.100",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
    color: "white",
  },
  centerContainer: {
    w: { base: "50%", lg: "20%" },
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
    //bg: "blue.100",
  },
  logo: {
    w: { base: "115px", md: "145px" },
    h: "auto",
    zIndex: "overlay",
  },
  rightContainer: {
    w: { base: "20%", lg: "35%" },
    h: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    //bg: "green.100",
  },
  menu: {
    w: { base: "58px", md: "140px", lg: "160px", xl: "185px" },
    h: { base: "auto", md: "50px" },
    justifyContent: { base: "flex-end", md: "flex-end" },
    alignItems: { base: "center", md: "center" },
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
  menuDesktop: {
    w: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    px: "10px",
  },
  menuDesktopLink: {
    w: "24%",
    h: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "500",
    color: "white",
    borderRadius: "5px",
    _hover: { textDecoration: "none", bg: "white", color: "dark" },
    //bg: "blue.100",
  },
  optionsContainer: {
    w: "200px",
  },
  menuDesktopOptionsList: {
    w: "200px",
    px: "0",
  },
  menuDesktopOptionsListOption: {
    w: "100%",
    h: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "dark",
    _hover: { textDecoration: "none", bg: "gray.200" },
  },
};

function HeaderV2() {
  const sectionData = sitedata.header;

  return (
    <Flex {...styles.mainContainer} direction="column">
      <Flex {...styles.header}>
        {/* LEFT */}
        <Flex {...styles.leftContainer}>
          {sectionData?.socialLinks.map((socialLink: any, index: number) => {
            const Icon = socialIcons[socialLink?.icon];

            return (
              <Link key={index} href={socialLink?.link} isExternal>
                <Icon style={styles.socialIcon} />
              </Link>
            );
          })}
        </Flex>

        {/* CENTER */}
        <Flex {...styles.centerContainer}>
          {/* LOGO - MOBILE */}
          <Flex {...styles.logo}>
            <Link as={NextLink} href={routes.HOME}>
              <Image src={logo} width={145} height={57} alt="metaler logo" />
            </Link>
          </Flex>
        </Flex>

        {/* RIGHT */}
        <Flex {...styles.rightContainer}>
          {/* MENU - DESKTOP */}
          <Flex {...styles.menuDesktop} display={{ base: "none", lg: "flex" }}>
            {sectionData.menu.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  {item?.options && (
                    <Popover>
                      <PopoverTrigger>
                        <Button variant="unstyled" {...styles.menuDesktopLink}>
                          {item.text}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent {...styles.optionsContainer}>
                        <PopoverArrow />

                        <PopoverBody {...styles.menuDesktopOptionsList}>
                          <Flex direction="column">
                            {item?.options.map((option: any, indx: number) => {
                              return (
                                <Link
                                  key={indx}
                                  as={NextLink}
                                  href={option.route}
                                  {...styles.menuDesktopOptionsListOption}
                                  textDecoration="none"
                                  textAlign="center"
                                >
                                  {option.text}
                                </Link>
                              );
                            })}
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  )}

                  {!item?.options && (
                    <Link
                      as={NextLink}
                      href={item.route}
                      {...styles.menuDesktopLink}
                      textDecoration="none"
                      textAlign="center"
                    >
                      {item.text}
                    </Link>
                  )}
                </Fragment>
              );
            })}
          </Flex>

          {/* MENU - MOBILE */}
          <Flex {...styles.menu} display={{ base: "flex", lg: "none" }}>
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
                        as={NextLink}
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
    </Flex>
  );
}

export default HeaderV2;
