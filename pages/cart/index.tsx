import dynamic from 'next/dynamic';

import { useGetCart } from '../../src/hooks/cart';
import { AuthCheck } from '../../src/components/global';
import { CartFallback } from '../../src/components/cart';

const CartList = dynamic(() => import('../../src/components/cart/CartList'));

export default function CartPage() {
  const cart = useGetCart();

  return (
    <AuthCheck fallback={<CartFallback />}>
      <CartList cart={cart ?? []} />
    </AuthCheck>
  );
}
