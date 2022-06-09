import { createContext, useState, useEffect } from "react";

// import PRODUCTS from "./../shop-data.json";

export const ProductsContext = createContext({
    products:[]
})


export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(result => setProducts(result));
    }, [])
    

    useEffect(()=>{
        fetch("http://localhost:3000/categories")
        .then(res => res.json())
        .then(result => {
            result = result.filter(category=>category.enabled === true);
            setCategories(result)
        });
    }, [])

    const value = {products, categories, setProducts}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}