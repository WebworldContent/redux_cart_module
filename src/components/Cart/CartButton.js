import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const itemsCount = useSelector(state => state.cart.itemsCount);
  const dispatch = useDispatch();
  const handleCartToggle = () => {
    dispatch(cartAction.toggleCart());
  }

  return (
    <button onClick={handleCartToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
