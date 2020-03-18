import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Authors = () => {
  return (
    <React.Fragment>
      <Header title="Авторы" subtitle="Найдите книгу по автору" />
      <div className="container">
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Authors;