import { useContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
import useCollapse from 'react-collapsed'


// import SHOP_DATA from '../../shop-data.json';

const Shop = () => {
  const { products, categories } = useContext(ProductsContext);
  const [productList, setProductList] = useState([]);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  // const pid = location.state.id;

  // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    setProductList(products);
  }, [products])

  const filterProducts = (id) => {
    const filterProducts = products.filter((product) => product.category === id);
    setProductList(filterProducts)
  }


  return (
    <div className='container flex space-between display-column'>
      <aside className='category-filter-container' aria-label='Category Filter'>
        <div className='mobile-category'>
          <button {...getToggleProps()}>
            {isExpanded ? 'Collapse Category' : 'Select Category'}
          </button>
          <section {...getCollapseProps()}>
            <ul>
              {categories.map((category) => {
                const { id, name } = category;
                return (
                  <li key={id} onClick={() => filterProducts(id)}>{name}</li>
                )
              })}
            </ul>
          </section>
        </div>
        <ul className='desktop-category'>
          {categories.map((category) => {
            const { id, name } = category;
            return (
              <li key={id} onClick={() => filterProducts(id)}>{name}</li>
            )
          })}
        </ul>
      </aside>
      <div className='products-container'>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop;