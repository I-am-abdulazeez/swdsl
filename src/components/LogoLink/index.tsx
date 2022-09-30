import NextLink from 'next/link';

import { ChakraNextImage } from '@components/ChakraNextImage';

import { LogoLinkProps } from '@interfaces/index';

const LogoLink: React.FC<LogoLinkProps> = ({ width, height }) => {
  return (
    <NextLink href="/">
      <a>
        <ChakraNextImage
          width={width}
          height={height}
          src="/svgs/swdsl-logo.svg"
          alt="shayo-logo"
        />
      </a>
    </NextLink>
  );
};

export default LogoLink;
