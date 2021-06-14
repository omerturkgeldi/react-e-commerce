// import React, { useState, useEffect } from "react";
import "./UrunKatalogu.css";
import { Button } from "../../Button.style";
import urunler from "../../data/urunler.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function UrunKatalogu(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  console.log(data);

  console.log(urunler);

  const [favourite, setFavourite] = useState(false);
  const [cart, setCart] = useState(false);
  const favouriteItems = [];
  const cartItems = [];

  // function handleFavourites() {

  // }

  const handleFavourites = () => {
    setFavourite(!favourite);
    console.log(favourite);
    if (favourite) {
      favouriteItems.push();
    } else {
      favouriteItems.push();
    }
  };

  return (
    <div className="container">
      <h1 className="items-page-title">Ürünlerimiz</h1>
      {/* 
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
      </div> */}

      <div class="container pt-3">
        <div class="row mt-5">
          {urunler.map((urun) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm mb-5 mt-5 ">
                <div
                  class="card d-flex p-4 ml-4 mr-4 align-it ems-center"
                  style={{ border: "none" }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    className="fa v-item-link"
                    to={`/detail/${urun.id}`}
                  >
                    <img
                      src={urun.img}
                      class="card-img-top"
                      alt={urun.name}
                      style={{ objectFit: "cover", aspectRatio: "1" }}
                    />
                  </Link>

                  <div class="card-body rounded-bottom">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="fa v-item-link"
                      to={`/detail/${urun.id}`}
                    >
                      <h5 class="card-title fw-bold text-nowrap fs-5 mt-3">
                        {urun.name}
                      </h5>
                    </Link>

                    <p class="card-text">
                      Some quick example text to build on the card title and
                      {/* make up the bulk of the card's content. */}
                    </p>
                    <h4 className="item-cost fs-3 d-flex justify-content-end">
                      {urun.cost} <span>₺</span>
                    </h4>
                    <div className="buttons d-flex justify-content-space-between">
                      <button
                        className="btn btn-light "
                        style={{ width: "45%" }}
                      >
                        <i class="fas fa-lg fa-shopping-cart"></i>
                      </button>
                      <button
                        key={urun.id}
                        onClick={handleFavourites}
                        className="btn btn-warning"
                        style={{ width: "45%" }}
                      >
                        {favourite ? (
                          <i class="fas fa-lg fa-heart"></i>
                        ) : (
                          <i class="far fa-lg fa-heart"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UrunKatalogu;
