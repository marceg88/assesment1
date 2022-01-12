import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

export function Product() {
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
  }, [productId]);

  if (!dataFake.id) {
    return <h1></h1>;
  }
  return (
    <div className="containerPa">
      <div className="container1">
        <h3>{dataFake.title}</h3>
        <p>{dataFake.price}</p>
        <p>{dataFake.description}</p>
        <p>{dataFake.category}</p>
        <div>
          <img className="img" src={dataFake.image} alt="imageProduct" />
        </div>
        
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
    
  );
}


