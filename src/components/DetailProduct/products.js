import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

function Product() {
  const { productId } = useParams();
  const [dataFake, setDataFake] = useState([]);

  // Uso de la fakeStoreApi para obtener cada producto
  const fakeStoreApi = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const jsonData = await res.json();
    setDataFake(jsonData);
  };
  useEffect(() => {
    fakeStoreApi();
  }, [fakeStoreApi, productId]);

  if (!dataFake.id) {
    return <h1>...</h1>;
  }
  return (
    <div className="containerPa">
      <div className="container1">
        <p className="category">Category: {dataFake.category}</p>
        <h3 className="title">{dataFake.title}</h3>
        <div>
          <img className="img" src={dataFake.image} alt="imageProduct" />
        </div>
        <p className="description">{dataFake.description}</p>
        <div className="container_2">
          <p className="price">${dataFake.price} USD</p>
          <p>
            rate:
            {dataFake.rating.rate}
          </p>
          <p>
            calification:
            {dataFake.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
