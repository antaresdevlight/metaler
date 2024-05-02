import { Flex, Text, ScaleFade, Divider } from "@chakra-ui/react";

const styles = {
  footer: {
    w: "100%",
    h: "200px",
    bg: "dark",
  },
};

function Footer() {
  return (
    <Flex {...styles.footer}>
      <Text>Footer</Text>
    </Flex>
  );
}

export default Footer;
