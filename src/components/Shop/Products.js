import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = useSelector(state => state.items.items)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((data, key) => <ProductItem
          key={key}
          title={data.title}
          price={data.price}
          description={data.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
