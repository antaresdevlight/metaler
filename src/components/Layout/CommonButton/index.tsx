import { useRouter } from "next/router";
import { Button, Text } from "@chakra-ui/react";

const styles = {
  button: {
    w: { base: "150px", md: "170px" },
    h: { base: "40px", md: "45px" },
    minH: { base: "40px", md: "45px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0",
  },
  text: {
    fontSize: { xl: "18px" },
    fontWeight: "400",
    lineHeight: "normal",
  },
};

function CommonButton(props: {
  text: string;
  action?: any;
  route?: string;
  bg?: string;
  color?: string;
  mt?: any;
}) {
  const { text, action, route, bg, color, mt } = props;

  const router = useRouter();

  return (
    <Button
      variant="unstyled"
      {...styles.button}
      bg={bg || "metaler"}
      color={color || "dark"}
      mt={mt || "0"}
      onClick={() => {
        action ? action() : route ? router.push(route) : null;
      }}
    >
      <Text {...styles.text}>{text}</Text>
    </Button>
  );
}

export default CommonButton;
