import React, { useState } from "react";
// import urunler from "../../data/urunler.json";

function Sepet(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.cost * c.qty, 0);
  const shippingPrice = itemsPrice > 400 ? "Kargo Ücretsiz!" : 10;
  const totalPrice = itemsPrice > 400 ? itemsPrice : itemsPrice + shippingPrice;

  //   const [empty, setEmpty] = useState(false);

  console.log(props);
  return (
    <div className="container">
      <h1 className="cart-title d-flex justify-content-center mb-5 mt-3">
        Sepet
      </h1>

      {cartItems.length === 0 ? (
        <h2 style={{ color: "red" }}>Cart Is Empty</h2>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ÜRÜN İSMİ</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Birim Fiyat
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Adet
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Toplam Fiyat
              </th>
              <th scope="col">
                Ekle
              </th>
              <th scope="col">
                Çıkar
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((urun) => {
              return (
                <tr key={urun.id}>
                  <th scope="row">
                    <img
                      src={urun.img}
                      alt={urun.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                    {urun.name}
                  </th>
                  <td style={{ textAlign: "center" }}>
                    {urun.cost}
                    <span>₺</span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <h4>{urun.qty}</h4>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {urun.qty * urun.cost}
                    <span>₺</span>
                  </td>
                  <td>
                    <button
                      onClick={() => onAdd(urun)}
                      className="btn btn-warning d-flex justify-content-center"
                      style={{ padding: "10px 15px" }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => onRemove(urun)}
                      className="btn btn-warning d-flex justify-content-center"
                      style={{ padding: "10px 15px" }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {cartItems.length !== 0 && (
        <>
          <div className="d-flex" style={{ marginTop: "70px" }}>
            <h2>Ara Toplam:</h2>
            <h2 style={{ paddingLeft: "20px" }}>
              {itemsPrice.toFixed(2)}
              <span>₺</span>
            </h2>
          </div>
          <hr />
          <div className="d-flex">
            <h2>Kargo Ücreti:</h2>
            <h2 style={{ paddingLeft: "20px" }}>
              {shippingPrice === "Kargo Ücretsiz!"
                ? shippingPrice
                : shippingPrice + "₺"}
            </h2>
          </div>
          <hr />
          <div className="d-flex">
            <h1>Genel Toplam:</h1>
            <h1 style={{ paddingLeft: "20px" }}>
              {totalPrice.toFixed(2)}
              <span>₺</span>
            </h1>
          </div>
          <hr />
          <div>
            <button
              onClick={() =>
                alert(
                  "Kasaya Hoşgeldiniz! Toplam Borcunuz: " +
                    totalPrice.toFixed(2) +
                    " ₺"
                )
              }
              className="btn btn-warning"
            >
              Kasaya Git
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Sepet;
