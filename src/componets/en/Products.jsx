import "../styles/Products.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import doubleSidedPrintedFilmCircuitImg from '../../assets/imgs/products/doubleSidedPrintedFilmCircuit/img1.png';
import capacitiveFilmImg from '../../assets/imgs/products/capacitiveFilmCircuit/img1.png';
import filmSwitchesImg from '../../assets/imgs/products/filmSwitches/img1.png';
import filmPanelsImg from '../../assets/imgs/products/filmPanels/img1.png';
import heatingProductsImg from '../../assets/imgs/products/heatingProducts/img1.png';

function Products() {
  const navigate = useNavigate();
  // 点击时执行的跳转函数
  const handleClickDoubleSidedPrintedFilmCircuit = (event) => {
    event.stopPropagation();
    navigate('/doubleSidedPrintedFilmCircuit/en');
  };
  const handleClickCapacitiveFilmcircuit = (event) => {
    event.stopPropagation();
    navigate('/capacitiveFilmcircuit/en');
  };
  const handleClickFilmSwitches = (event) => {
    event.stopPropagation();
    navigate('/filmSwitches/en');
  };
  const handleClickFilmPanels = (event) => {
    event.stopPropagation();
    navigate('/filmPanels/en');
  };
  const handleClickHeatingProducts = (event) => {
    event.stopPropagation();
    navigate('/heatingProducts/en');
  };
  return (
    <section id="products">
      <div>
        <h2 className="product-h2">Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <div className="image-container">
              <img src={doubleSidedPrintedFilmCircuitImg} onClick={handleClickDoubleSidedPrintedFilmCircuit} alt="DoubleSidedPrintedFilmCircuit" />
            </div>
            <div className="card-description">
              <h4>dummy description: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h4>
            </div>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src={capacitiveFilmImg} onClick={handleClickCapacitiveFilmcircuit} alt="CapacitiveFilmcircuit" />
            </div>
            <div className="card-description">
              <h4>dummy description: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h4>
            </div>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src={filmSwitchesImg} onClick={handleClickFilmSwitches} alt="FilmSwitches" />
            </div>
            <div className="card-description">
              <h4>dummy description: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h4>
            </div>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src={filmPanelsImg} onClick={handleClickFilmPanels} alt="FilmPanels" />
            </div>
            <div className="card-description">
              <h4>dummy description: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h4>
            </div>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src={heatingProductsImg} onClick={handleClickHeatingProducts} alt="HeatingProducts" />
            </div>
            <div className="card-description">
              <h4>dummy description: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Products;
