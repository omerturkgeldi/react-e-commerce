import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    const { countCartItems } = props;
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light mt-5">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-primary" href="/">
            MyStore
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Anasayfa
                </NavLink>
                {/* <a class="nav-link" aria-current="page" href="/">Anasayfa</a> */}
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  to="/favourites"
                  activeClassName="active"
                >
                  Favoriler
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  to="/cart"
                  activeClassName="active"
                >
                  Sepet
                  {countCartItems ? (
                      <button className="badge bg-secondary">{countCartItems}</button>
                  ) : ''}
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  activeClassName="active"
                >
                  İletişim
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
