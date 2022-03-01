/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import './home.css';

import ProductCard from './productCard';

function ListProduct() {
  const [dataFake, setDataFake] = useState([]);

  const fakeStoreApi = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?Limit=10`);
    const jsonData = await res.json();
    setDataFake(jsonData);
  };
  useEffect(() => fakeStoreApi(), []);
  console.log(dataFake);

  return (
    <div className="container">
      {dataFake.map((items) => (
        <ProductCard key={items.id} {...items} />
      ))}
    </div>
  );
}

export default ListProduct;
