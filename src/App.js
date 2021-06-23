import "./App.css";
import Favoriler from "./components/Favoriler/Favoriler";
import UrunDetay from "./components/UrunDetay/UrunDetay";
import UrunKatalogu from "./components/UrunKatalogu/UrunKatalogu";
import Sepet from "./components/Sepet/Sepet";
import Iletisim from "./components/Iletisim/Iletisim";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import urunler from "./data/urunler.json";
import React, { useState } from "react";

function App() {
  // const { products } = urunler;
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);

  // Add to Cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Remove from Cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // const onClickFavourites = (product) => {
  //   const exist = favouriteItems.find((x) => x.id === product.id);
  //   if(exist){
  //     setFavouriteItems([...favouriteItems + product])
  //   }
  //   else{
  //     setFavouriteItems(favouriteItems.filter((x) => x.id !== product.id));
  //   }
  // }

  const onAddFavourites = (product) => {
    const exist = favouriteItems.find((x) => x.id === product.id);
    if (!exist) {
      setFavouriteItems([...favouriteItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveFavourites = (product) => {
    const exist = favouriteItems.find((x) => x.id === product.id);
    if (exist) {
      setFavouriteItems(favouriteItems.filter((x) => x.id !== product.id));
    }
  };
  return (
    <div>
      <Router>
        <Navbar countCartItems={cartItems.length}></Navbar>

        <div>
          <Route path="/" exact>
            <UrunKatalogu
              onAdd={onAdd}
              onAddFavourites={onAddFavourites}
              onRemoveFavourites={onRemoveFavourites}
              products={urunler}
            />
          </Route>
        </div>
        <div>
          <Route path="/detail/:id" component={UrunDetay} />
        </div>
        <div>
          <Route path="/favourites">
            <Favoriler
              favouriteItems={favouriteItems}
            />
          </Route>
        </div>
        <div>
          <Route path="/cart">
            <Sepet onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
          </Route>
        </div>
        <div>
          <Route path="/contact" component={Iletisim} />
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
