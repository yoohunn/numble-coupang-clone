import dynamic from 'next/dynamic';

import { useGetCart } from '../../src/hooks/cart';
import AuthCheck from '../../src/components/common/AuthCheck';

const CartList = dynamic(() => import('../../src/components/cart/CartList'));

export default function CartPage() {
  const cart = useGetCart();

  return (
    <AuthCheck>
      <CartList cart={cart ?? []} />
    </AuthCheck>
  );
}
