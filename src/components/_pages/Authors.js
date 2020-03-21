import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";

const Authors = () => {
  return (
    <React.Fragment>
      <Header title="Авторы" subtitle="Найдите книгу по автору" />
      <Breadcrumbs links={[1, 3]}/>
      <div className="container">
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Authors;