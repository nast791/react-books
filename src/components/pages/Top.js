import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Top = () => {
  return (
    <React.Fragment>
      <Header title="Топ-100" subtitle="Самые загружаемые книги" />
      <div className="container">
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Top;