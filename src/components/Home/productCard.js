import './home.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function ProductCard(data) {
  const [list, setList] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/product/${data.id}`);
  };
  
  return (
    <div>
      <card className="cardProduct">
        <img className="card_img" src={data.image} alt="product" />
        <h2 className="card_title">{data.title}</h2>
        <div className="detail">
          {!list && (
            <button className="detail_button" onClick={handleOnClick}>
              Detalle producto
            </button>
          )}
        </div>
      </card>
    </div>
  );
}

export default ProductCard;
