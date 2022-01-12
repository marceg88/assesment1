import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from '../components/DetailProduct/products';

import  Header  from '../components/Head/header';
import  ListProduct  from '../components/Home/listProduct';
import  About  from '../components/Profile/about';

// eslint-disable-next-line import/prefer-default-export
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header>Header</Header>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
