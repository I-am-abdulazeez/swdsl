import { RiArrowRightSLine } from "react-icons/ri";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { ProductNavProps } from "@interfaces/index";

const ProductNav: React.FC<ProductNavProps> = (props): JSX.Element => {
  const { product } = props;

  return (
    <Breadcrumb
      mb={10}
      spacing="5px"
      fontSize={"sm"}
      separator={<RiArrowRightSLine color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={`product/${product?.data?.id}`}>
          product/{product?.data?.id}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ProductNav;
