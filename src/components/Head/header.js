import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        Home
      </button>
      <button
        type="submit"
        className="head_button_two"
        onClick={handleButtonAbout}
      >
        About
      </button>
    </div>
  );
}

export default Header;
