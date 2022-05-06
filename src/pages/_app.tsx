import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import SwiperCore, {
  Pagination,
  EffectFlip,
  Autoplay,
  Navigation,
} from "swiper";

import { AuthProvider } from "src/context/AuthContext";
import { ProductProvider } from "src/context/ProductContext";

import ClientOnly from "@components/ClientOnly";
import QueryClientWrapper from "src/client";
import customTheme from "@theme/index";

import "@styles/index.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

SwiperCore.use([Navigation, Pagination, EffectFlip, Autoplay]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientWrapper>
        <AuthProvider>
          <ProductProvider>
            <ClientOnly>
              <Component {...pageProps} />
            </ClientOnly>
          </ProductProvider>
        </AuthProvider>
      </QueryClientWrapper>
    </ChakraProvider>
  );
};

export default MyApp;
