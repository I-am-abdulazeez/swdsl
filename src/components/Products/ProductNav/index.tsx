import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { ProductNavProps } from '@interfaces/index';

const ProductNav: React.FC<ProductNavProps> = ({ product }) => {
  return (
    <Breadcrumb mb={10} spacing="5px" fontSize={'sm'} separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={`/product/${product?.productId}`}>
          product/{product?.productId}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ProductNav;
