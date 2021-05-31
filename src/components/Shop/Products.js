import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
  id:'p1',
  title:'My first Book',
  price: 99,
  description:'I have ever wrote my first book'
},
{
  id:'p2',
  title:'My second Book',
  price: 90,
  description:'I have ever wrote my second book'
},
]

const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_DATA.map((product) => (
            <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            />
          ))
        }
        
      </ul>
    </section>
  );
};

export default Products;
