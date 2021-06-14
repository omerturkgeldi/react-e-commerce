import React from "react";
import urunler from "../../data/urunler.json";
import "./Favoriler.css";
import { Link } from "react-router-dom";

function Favoriler(props) {
  return (
    <div className="container">
      <h1 className="fav-page-title">Favoriler</h1>

      {/* <div className="container fav-items-container">
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
      </div> */}

      <ul class="list-group">
        


        {urunler.map((urun) => {
          return (
            <div key={urun.id} className="fav-item">
              <li class="list-group-item">
              <div className="fav-items-left">
                <img style={{ objectFit: "cover", aspectRatio: "1", width: '30%'}} className="fav-item-img" src={urun.img} alt={urun.name} />
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
              </li>
            </div>
          );
        })}
          
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

export default Favoriler;
