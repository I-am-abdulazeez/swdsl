import { Box, BoxProps } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (props) =>
    [
      "width",
      "height",
      "layout",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(props),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <linearGradient id="g">
    <stop stop-color="#cecece" offset="20%" />
    <stop stop-color="#cecece" offset="50%" />
    <stop stop-color="#cecece" offset="70%" />
  </linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#333" />
<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const ChakraNextImage = (props: ImageProps & BoxProps & {}) => {
  const { src, alt, width, quality, height, layout, ...rest } = props;

  return (
    <Box pos="relative" {...rest}>
      <ChakraNextUnwrappedImage
        w="auto"
        h="auto"
        loader={myLoader}
        width={width}
        quality={quality}
        height={height}
        layout={layout}
        placeholder="blur"
        blurDataURL={`data:image/png;base64,${toBase64(shimmer(700, 475))}`}
        src={src}
        alt={alt}
        transition="all 0.2s"
      />
    </Box>
  );
};
