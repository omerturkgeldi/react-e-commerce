import React from "react";
import urunler from "../../data/urunler.json";
import "./Favoriler.css";
import { Link } from "react-router-dom";

function Favoriler(props) {
  return (
    <div className="container">
      <h1 className="fav-page-title">Favoriler</h1>

      <div className="container fav-items-container">
        {urunler.map((urun) => {
          return (
            <div key={urun.id} className="fav-item">
              <div className="fav-items-left">
                <img className="fav-item-img" src={urun.img} alt="" />
              </div>
              <div className="fav-items-right">
                <div className="fav-item-name">
                  <a className="fav-item-link" href>
                    <Link className="fav-item-link" to={`/detail/${urun.id}`} >{urun.name}</Link>
                  </a>
                </div>
                <div className="fav-item-cost">
                  {urun.cost} <span>₺</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favoriler;
