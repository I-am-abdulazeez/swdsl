import NextLink from "next/link";

import { ChakraNextImage } from "@components/ChakraNextImage";
import { LogoLinkProps } from "src/interfaces";

const LogoLink: React.FC<LogoLinkProps> = (props) => {
  const { width, height } = props;

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
