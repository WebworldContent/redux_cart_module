import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const items = useSelector(state => state.items.items)
  const dispatch = useDispatch();
  const addToCart = (title) => {
    dispatch(cartAction.addCartItem(items.filter(item => item.title === title)));
    dispatch(cartAction.increaseItemsAmount());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCart(title)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
