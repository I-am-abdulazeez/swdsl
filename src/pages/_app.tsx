import ClientOnly from "@components/ClientOnly";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import SwiperCore, { Parallax, Pagination, EffectFlip, Autoplay } from "swiper";
import customTheme from "@theme/index";
import "@styles/index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import "swiper/css/effect-flip";

SwiperCore.use([Parallax, Pagination, EffectFlip, Autoplay]);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <ClientOnly>
          <Component {...pageProps} />
        </ClientOnly>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
