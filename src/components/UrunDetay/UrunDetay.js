import React from "react";
import urunler from "../../data/urunler.json";
import "./UrunDetay.css";

function UrunDetay(props) {
  console.log(props.match.params.id);
  console.log(props);
  // console.log(urunler)
  const specific_item = urunler.filter(
    (urun) => urun.id === props.match.params.id
  );
  console.log(specific_item);
  return (
    <div className="container">
      <h1 className="detail-page-title">{specific_item[0].name}</h1>

      <div className="container detail-item-container">
        {specific_item.map((urun) => {
          return (

            <div className="detail-item">
              <div className="detail-items-left">
                <img className="detail-item-img" src={urun.img} alt="" />
              </div>
              <div className="detail-items-right">
                <div className="detail-item-rating">
                  <span>Ortalama Puan: </span>
                  <span className="rating-span">{urun.rating}</span>
                  <span> /5</span>
                </div>
                <div className="detail-item-cost">
                  {urun.cost} <span>₺</span>
                </div>
                <div className="detail-buttons">
                    {/* <Button backgroundColor="blue">Sepete Ekle</Button> */}
                    <button className="btn btn-info">Sepete Ekle</button>
                    {/* <Button backgroundColor="red">Favorilere Ekle</Button> */}
                    <button className="btn btn-danger">Favorilere Ekle</button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UrunDetay;
