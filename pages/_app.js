import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  dark: "#0E1B1B",
  metaler: "#BBCD52",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "96em",
};

export const theme = extendTheme({ colors, breakpoints });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
