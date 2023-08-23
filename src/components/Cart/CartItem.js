import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../store';

const CartItem = (props) => {
  const { title, quantity, total } = props.item;
  const dispatch = useDispatch();
  
  const increaseItem = (title) => {
    dispatch(cartAction.incrementItemCount(title));
  };

  const decreaseItem = (title) => {
    dispatch(cartAction.decrementItemCount(title));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => decreaseItem(title)}>-</button>
          <button onClick={() => increaseItem(title)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
