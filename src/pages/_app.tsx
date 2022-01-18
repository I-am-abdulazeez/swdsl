import ClientOnly from "@components/ClientOnly";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import SwiperCore, {
  Pagination,
  EffectFlip,
  Autoplay,
  Navigation,
} from "swiper";
import customTheme from "@theme/index";
import "@styles/index.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

SwiperCore.use([Navigation, Pagination, EffectFlip, Autoplay]);

const MyApp = ({ Component, pageProps }: AppProps) => {
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
};

export default MyApp;
