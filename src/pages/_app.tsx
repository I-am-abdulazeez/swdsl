import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@styles/index.css";
import customTheme from "@theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
