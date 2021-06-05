import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav  class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/">
                  Anasayfa
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favourites">
                  Favoriler
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  Sepet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
