import React from "react";
import { Banner, ProductCard } from "@components";
import { useState , useEffect} from "react";
import api from "../../service/api";


const HomePage = () => {
  const [cities, setCities] = useState ([]);
  
  const fetchCities = async () => {
    try {
      const url = "/api/v1/city";
      const response = await api.get(url);
      const payload = {...response.data.data.cities};
      console.log(payload);
      setCities(payload);
    }catch(error) {
     alert (error);
      }
};

  // Product
  const [products, setProduct] = useState ([]);
  const fetchProducts= async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
    const payload = {...response.data.data.products};
      console.log(payload);
      setProduct(payload);
    }catch(error) {
     alert (error);
      }
};
useEffect (() => {
 fetchProducts();
 fetchCities();
}, []);

  return (
    <>
      <Banner />
      <h1 className="text-center">Cities</h1>
      <div className = "bg-primary text-white grid grid-cols-5 gap-4 m-5 rounded text-center p-5">
      {cities.map((item) => {
      return (
      <span key={item.id}> {item.name}</span>
      )
      })}
      </div>

      {/* product */}
      <h1 className="text-center">Products</h1>
      <div className = "bg-primary text-white grid grid-cols-5 gap-4 m-5 rounded text-center p-5">
       {products.map((item) => {
      return (
        <ProductCard
        key={item?.id}
        productName={item.name}
        productCategory={item.categoryId.name}
        productPrice= {item.price}
        onClick = {item.id}
        random={Math.random}
        ></ProductCard>

      )
      })}
      </div> 

      
    </>
  );
};

export default HomePage;
