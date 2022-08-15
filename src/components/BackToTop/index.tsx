import React, { useEffect, useState } from 'react';

import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

import { IoIosArrowRoundUp } from 'react-icons/io';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box
      position="fixed"
      transition={'all 0.3s ease-in-out'}
      zIndex={5}
      bottom={20}
      right={5}
    >
      {isVisible && (
        <IconButton
          aria-label="go-up"
          onClick={scrollToTop}
          rounded="md"
          transition={'all 0.3s ease-in-out'}
          icon={<IoIosArrowRoundUp size="25px" />}
          size="sm"
          _focus={{
            boxShadow: '0 0 0 3px #C97200',
          }}
          colorScheme="primary"
        />
      )}
    </Box>
  );
};

export default BackToTop;