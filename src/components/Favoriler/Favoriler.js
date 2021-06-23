import React from "react";
import urunler from "../../data/urunler.json";
import "./Favoriler.css";
import { Link } from "react-router-dom";

function Favoriler(props) {
  const { favouriteItems } = props;

  return (
    <div className="container">
      <h1 className="cart-title d-flex justify-content-center mb-5 mt-3">
        Favoriler
      </h1>

      <ul class="list-group">
        {favouriteItems.length === 0 ? (
          <h2 style={{ color: "red" }}>Favoriler Boş</h2>
        ) : (
          <>
            {favouriteItems.map((urun) => {
              return (
                <div key={urun.id} className="fav-item">
                  <li class="list-group-item">
                    <div className="fav-items-left">
                      <img
                        style={{
                          objectFit: "cover",
                          aspectRatio: "1",
                          width: "30%",
                        }}
                        className="fav-item-img"
                        src={urun.img}
                        alt={urun.name}
                      />
                    </div>
                    <div className="fav-items-right">
                      <div className="fav-item-name">
                        <a className="fav-item-link" href>
                          <Link
                            className="fav-item-link"
                            to={`/detail/${urun.id}`}
                          >
                            {urun.name}
                          </Link>
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
          </>
        )}

        {/*           
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li> */}
      </ul>
    </div>
  );
}

export default Favoriler;
