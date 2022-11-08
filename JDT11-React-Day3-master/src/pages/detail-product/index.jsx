import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../service/api";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  const fetchProduct = async (id) => {
  
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response.data.data.product };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);

  return (
    <>
    <button className="mt-5" type="primary" onClick={() => navigate(-1)}>Pulang</button>
      <div>DetailProduct</div>
      <p>Nama Product : {product?.name}</p>
      <p>Harga        : {product?.price}</p>
      <p>Kategori     : {product?.categoryId.name}</p>
    </>
  )
}

export default DetailProduct