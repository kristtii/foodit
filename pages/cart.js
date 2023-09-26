import dynamic from 'next/dynamic';

const CartPage = dynamic(() => import('../components/cartPage/CartPage'), {
  ssr: false,
});

export default CartPage;