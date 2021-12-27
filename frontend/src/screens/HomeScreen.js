import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//component
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions"; //GET PRODUCTS WALA FUNCTION 


const HomeScreen = ({setLoginUser}) => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);  
  const { products,loading,error} = getProducts;  //ARRAY MA FIL KR DO

  useEffect(()=>{
     dispatch(listProducts())
  },[dispatch]);
  

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className = "button" onClick={() => setLoginUser({})}> Logout </div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (  //COMPONENTS MA SE PRODUCT.JS WALI FILE MA SE SARI CHEEZEN LI OR IS MA FIX KR DI
            <Product
              key={product._id}   
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;