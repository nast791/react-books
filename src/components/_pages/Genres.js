import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import GenresList from "../GenresList/GenresList";

const Genres = () => {
  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, 2]}/>
      <GenresList/>
      <Footer/>
    </React.Fragment>
  );
};

export default Genres;