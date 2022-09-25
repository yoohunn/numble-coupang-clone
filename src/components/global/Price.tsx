export default function Price({ price }: { price: string | number }) {
  return (
    <span>
      <strong>{price.toLocaleString()}</strong>원
    </span>
  );
}
