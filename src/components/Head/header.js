import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

function Header() {
  const navigate = useNavigate();

  const handleButtonHome = () => {
    navigate('/');
  };

  const handleButtonAbout = () => {
    navigate('/about');
  };

  return (
    <div className="head">
      <button
        type="submit"
        className="head_button_one"
        onClick={handleButtonHome}
      >
        HOME
      </button>
      <FontAwesomeIcon className="icon" icon={faBarcode} size="6x" />
      <button
        type="submit"
        className="head_button_two"
        onClick={handleButtonAbout}
      >
        ABOUT
      </button>
    </div>
  );
}

export default Header;
