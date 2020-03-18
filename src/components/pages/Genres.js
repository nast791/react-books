import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Genres = () => {
  return (
    <React.Fragment>
      <Header title="Жанры" subtitle="Найдите книгу по жанру" />
      <div className="container">
        <p style={{'minHeight': '400px'}}></p>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Genres;