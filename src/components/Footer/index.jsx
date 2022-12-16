import React from "react";
import "./style.scss";
const index = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p className="footer__text">{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default index;
