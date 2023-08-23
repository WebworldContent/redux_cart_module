import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const {toggleCart, cartItems } = useSelector(state => state.cart);

  return (
    <Card className={classes.cart}>
      {toggleCart && 
      <div>
        <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems ? cartItems.map((item, indx) => <CartItem key={indx}
              item={{ title: item.title, quantity: item.count, total: item.totalPrice }}
            />) : <p>Cart is Empty</p>}
          </ul>
      </div>}
    </Card>
  );
};

export default Cart;
