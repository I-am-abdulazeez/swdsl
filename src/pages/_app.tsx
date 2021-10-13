import ClientOnly from "@components/ClientOnly";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@theme/index";
// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, EffectFlip, Autoplay } from "swiper";
// install Swiper modules
SwiperCore.use([Parallax, Pagination, EffectFlip, Autoplay]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import "swiper/css/effect-flip";

import "@styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ClientOnly>
  );
}

export default MyApp;
