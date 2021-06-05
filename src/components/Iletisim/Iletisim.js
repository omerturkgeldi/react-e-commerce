import React from "react";
import "./Iletisim.css";

function Iletisim(props) {
  return (
    <div className="container">
      <h1 className="contact-page-title">İletişim</h1>
      <hr />
      <h1 style={{display: 'flex',justifyContent:'center',margin:"80px 0"}}>Ömer Türkgeldi</h1>
      <div className="row">
        <div className="col">
          <h3>
            <a href="https://github.com/omerturkgeldi" target="_blank">
              Github Hesabım
            </a>
          </h3>
        </div>
        <div className="col">
          <h3>
            <a
              href="https://www.linkedin.com/in/omerturkgeldi/"
              target="_blank"
            >
              Linkedin Hesabım
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
