interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}
export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      <h1>{product.title} - R${product.price},00 </h1>

    </div>
  );
}
