import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsList = () => {

  const {agregarCarrito} = useContext(CartContext)


  let endpoint = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    /*  const getData = async()=>{
        const getProducts = await fetch(endpoint);
        const res = await getProducts.json()
        const data = await res; 
        setProducts(data)
    } */

    const getData = async () => {
      const getProducts = axios.get(endpoint);
      const data = await getProducts;
      setProducts(data.data);
    };

    getData();
  }, []);

  console.log(products);

  return (
    <div>
        {products.length > 0 && (
        
            products.map((product)=> (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt="" />
                </div>
            ))
        )}
    </div>

  );
};

export default ProductsList;
