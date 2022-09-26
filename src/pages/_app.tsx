import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import SwiperCore, {
  Pagination,
  EffectFlip,
  Autoplay,
  Navigation,
} from 'swiper';

import ClientOnly from '@components/ClientOnly';
import WelcomeModal from '@components/WelcomeModal';

import customTheme from '@theme/index';

import '@styles/index.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';

SwiperCore.use([Navigation, Pagination, EffectFlip, Autoplay]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <ClientOnly>
        <WelcomeModal />
        <Component {...pageProps} />
      </ClientOnly>
    </ChakraProvider>
  );
};

export default MyApp;
