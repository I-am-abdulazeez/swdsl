import NextLink from 'next/link';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { RiShoppingCartLine } from 'react-icons/ri';

import { IconButtonBadgeProps } from '@interfaces/index';

const IconButtonBadge: React.FC<IconButtonBadgeProps> = ({ badgeContent }) => {
  const { pathname } = useRouter();

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const activeCart = pathname === '/cart' ? 'secondary' : '';

  return (
    <NextLink href="/cart" passHref>
      <IconButton
        aria-label="shopping cart"
        size={buttonSize}
        colorScheme={activeCart}
        variant="ghost"
        icon={
          <>
            <RiShoppingCartLine size="19px" />
            <Box
              as={'span'}
              color={'white'}
              position={'absolute'}
              top={'-2px'}
              width="15px"
              height="15px"
              display={'flex'}
              alignItems="center"
              fontSize={'10px'}
              justifyContent={'center'}
              right={'-2px'}
              bgColor={'red.600'}
              rounded="full"
            >
              {badgeContent}
            </Box>
          </>
        }
      />
    </NextLink>
  );
};

export default IconButtonBadge;
