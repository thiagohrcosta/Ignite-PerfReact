import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}


function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      <h1>{product.title} - R${product.price},00 </h1>

    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
