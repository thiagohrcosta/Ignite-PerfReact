import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}


function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      <h1>{product.title} - R${product.price},00 </h1>
      <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
