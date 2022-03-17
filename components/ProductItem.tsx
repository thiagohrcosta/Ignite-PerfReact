import { memo, useState } from 'react';
// import { AddProductToWishList } from './AddProductToWishList';
import { AddProductToWishListProps } from './AddProductToWishList';
import dynamic from 'next/dynamic';

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.default);
}, {
  loading: () => <div>Loading...</div>,
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      <h1>{product.title} - {product.priceFormatted}</h1>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
