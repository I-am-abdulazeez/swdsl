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
          variant={'outline'}
          colorScheme={
            product?.packSize === '3 Packs'
              ? 'primary'
              : product?.packSize === '4 Packs'
              ? 'red'
              : product?.packSize === '6 Packs'
              ? 'pink'
              : product?.packSize === '10 Packs'
              ? 'orange'
              : product?.packSize === '12 Packs'
              ? 'yellow'
              : undefined
          }
        >
          {product?.packSize}
        </Tag>
      )}
    </>
  );
};

export default ProductTag;
