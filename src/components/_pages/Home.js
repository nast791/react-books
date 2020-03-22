import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";

const Home = () => {
  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2" />
      <Catalog/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;