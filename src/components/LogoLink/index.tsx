import NextLink from "next/link";

import { ChakraNextImage } from "@components/ChakraNextImage";

const LogoLink: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
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
