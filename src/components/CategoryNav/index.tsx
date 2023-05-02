import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { CategoryNavProps } from '@interfaces/index';

const CategoryNav: React.FC<CategoryNavProps> = ({ category }) => {
  return (
    <Breadcrumb mb={3} spacing="5px" fontSize={'md'} separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={`/product/${category}`}>
          {category}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CategoryNav;
