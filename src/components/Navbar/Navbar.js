import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    // <div>
    //   <nav  class="navbar navbar-expand-md navbar-light bg-light">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="/">
    //         Navbar
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>

    //       <div class="collapse navbar-collapse" id="navbarNav">
    //         <ul class="navbar-nav ms-auto">
    //         <li class="nav-item">
    //             <a class="nav-link" href="/">
    //               Anasayfa
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="/favourites">
    //               Favoriler
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="/cart">
    //               Sepet
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="/contact">
    //               İletişim
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

          
    //     </div>
    //   </nav>
    // </div>

<div class="container">
        <nav class="navbar navbar-expand-lg navbar-light mt-5">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-primary" href="/">MyStore</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClassName="active">Anasayfa</NavLink>
                            {/* <a class="nav-link" aria-current="page" href="/">Anasayfa</a> */}
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/favourites" activeClassName="active">Favoriler</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/cart" activeClassName="active">Sepet</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="active">İletişim</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>





  );
}

export default Navbar;
