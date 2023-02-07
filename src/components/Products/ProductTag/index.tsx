import { Tag } from '@chakra-ui/react';
import { ProductProps } from '@interfaces/index';

const ProductTag: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      {product?.packsOrWholesale && (
        <Tag
          fontWeight={'semibold'}
          fontSize={'12px'}
          ml={2}
          colorScheme={
            product?.packSize === '12 Packs' ? 'primary' : 'secondary'
          }
        >
          {product?.packSize}
        </Tag>
      )}
    </>
  );
};

export default ProductTag;
