// import React, { useState, useEffect } from "react";
import "./UrunKatalogu.css";
import { Button } from "../../Button.style";
import urunler from "../../data/urunler.json";
import { Link } from "react-router-dom";

function UrunKatalogu(props) {
  console.log(urunler);

  return (
    <div className="container">
      <h1 className="items-page-title">Ürünlerimiz</h1>

      <div className="container items-container">
        <div className="row row-container">
          {urunler.map((urun) => {
            return (
              <>
                <div key={urun.id} class="col-lg-3 col-md-5 item-div">
                  <div className="item-image-container">
                    <img
                      className="item-image"
                      src={urun.img}
                      alt={urun.name}
                    />
                  </div>
                  <h6 className="item-name">{urun.name}</h6>
                  <div className="item-infos">
                    <h4 className="item-cost">
                      {urun.cost} <span>₺</span>
                    </h4>
                    <h6 className="item-moreInfo">
                      <a href="/details">
                        <Link className="fa v-item-link" to={`/detail/${urun.id}`}>Detaylar...</Link>
                      </a>
                    </h6>
                  </div>
                  <Button backgroundColor="red">Sepete Ekle</Button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UrunKatalogu;
