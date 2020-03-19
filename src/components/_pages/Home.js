import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../_ui/Container/Container";
import Catalog from "../Catalog/Catalog";

const Home = () => {
  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2" />
      <Container>
        <Catalog/>
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;