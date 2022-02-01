import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import SwiperCore, {
  Pagination,
  EffectFlip,
  Autoplay,
  Navigation,
} from "swiper";
import ClientOnly from "@components/ClientOnly";
import customTheme from "@theme/index";
import "@styles/index.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import { AuthProvider } from "src/context/AuthContext";

SwiperCore.use([Navigation, Pagination, EffectFlip, Autoplay]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <AuthProvider>
          <ClientOnly>
            <Component {...pageProps} />
          </ClientOnly>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
