import './home.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import Timer from '../Chronometer/chono';

function ProductCard(data) {
  const [list, setList] = useState(false);
  const { id, image, title } = data;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/product/${id}`);
    setList(true);
  };
  return (
    <div>
      <card className="cardProduct">
        <div className="imagen">
          <img className="card_img" src={image} alt="product" />
        </div>
        <h2 className="card_title">{title}</h2>
        <div className="detail">
          {!list && (
            <button
              type="submit"
              className="detail_button"
              onClick={handleOnClick}
            >
              Detalle producto
            </button>
          )}
        </div>
        <div className="time">
          Tiempo restante: <Timer />
        </div>
      </card>
    </div>
  );
}

export default ProductCard;
