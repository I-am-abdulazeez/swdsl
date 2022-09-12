import { Box, Container, VStack } from '@chakra-ui/layout';
import { RiArrowDownLine } from 'react-icons/ri';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

import Navbar from '@components/Navbar';
import BackToTop from '@components/BackToTop';
import Footer from '@components/Footer';
import ShowCase from '@components/Showcase';
import Helmet from '@components/Helmet';
import DrinkSearch from '@components/DrinkSearch';
import WrappedSwiper from '@components/SwipeComponent/WrappedSwiper';
import VideoSwipe from '@components/SwipeComponent/VideoSwipe';
import LogoLink from '@components/LogoLink';
import WelcomeModal from '@components/WelcomeModal';

const Home: React.FC = () => {
  return (
    <>
      <Helmet title="ShayoWithDSL | #1 Online wine store" />
      <Navbar />
      <WelcomeModal />
      <Box as="main" mt={{ base: '4rem', md: '6rem' }}>
        <Container maxW="container.sm">
          <DrinkSearch />
        </Container>
        <Box textAlign="center" mt={{ base: '3rem', md: '5rem' }}>
          <LogoLink width="800px" height="230px" />
        </Box>
        <VideoSwipe />
        <ShowCase />
        <WrappedSwiper />
      </Box>

      <VStack
        as="section"
        id="get"
        spacing={{ base: 5, md: 8 }}
        align="center"
        justify="center"
        bg="#501815"
        color="#fff"
        height="300px"
        textAlign="center"
        p={6}
      >
        <Heading fontWeight="semibold" size={'xl'} lineHeight="1.5">
          QUALITY DRINKS DELIVERED TO YOUR DOORSTEP.
        </Heading>
        <Button
          bg="transparent"
          _hover={{
            bg: 'transparent',
          }}
          size="lg"
          _active={{
            backgroundColor: 'transparent',
          }}
          textTransform="uppercase"
          rightIcon={<RiArrowDownLine className="fade-in-down" size="25px" />}
        >
          Get your Now!
        </Button>
      </VStack>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
