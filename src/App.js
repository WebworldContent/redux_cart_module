import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchCart, sendCartDate } from './store/cartThunk';

let initial = true;

function App() {
  const cart = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('fetch useeffect runs');
    dispatch(fetchCart()); 
  }, [dispatch]);

  useEffect(() => {
    
    if (initial) {
      initial = false;
      return;
    }

    dispatch(sendCartDate(cart));

  }, [cart, dispatch])

  console.log(initial);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
