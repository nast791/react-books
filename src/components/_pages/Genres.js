import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";

const Genres = () => {
  return (
    <React.Fragment>
      <Header title="Жанры" subtitle="Найдите книгу по жанру" />
      <Breadcrumbs links={[1, 2]}/>
      <div className="container">
        <p style={{'minHeight': '400px'}} />
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Genres;