import "./App.css";
import Favoriler from "./components/Favoriler/Favoriler";
import UrunDetay from "./components/UrunDetay/UrunDetay";
import UrunKatalogu from "./components/UrunKatalogu/UrunKatalogu";
import Sepet from "./components/Sepet/Sepet";
import Iletisim from "./components/Iletisim/Iletisim";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <div>
          <Route path="/" exact component={UrunKatalogu} />
        </div>
        <div>
          <Route path="/detail/:id" component={UrunDetay} />
        </div>
        <div>
          <Route path="/favourites" component={Favoriler} />
        </div>
        <div>
          <Route path="/cart" component={Sepet} />
        </div>
        <div>
          <Route path="/contact" component={Iletisim} />
        </div>
      </Router>
    </div>
  );
}

export default App;

