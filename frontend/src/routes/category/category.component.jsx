import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';
// import useCollapse from 'react-collapsed';


// import SHOP_DATA from '../../shop-data.json';

const Category =()=>{
    const {products, categories} = useContext(ProductsContext);
    const [productList, setProductList] = useState([]);

    const {id} = useParams();

    // const pid = location.state.id;
 
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    useEffect(()=>{
        setProductList(products);
      },[products])
    useEffect(()=>{
        const filterProducts = products.filter((product)=> product.category === id);
        setProductList(filterProducts)
},[products])

    useEffect(()=>{
            const filterProducts = products.filter((product)=> product.category === id);
            setProductList(filterProducts)
    },[products])

   

  
    return (
        <div className='container flex space-between '>
          <div className='products-container categoty-page-container'>
            {productList.map((product)=>(
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          </div>
    )
  }

  export default Category;