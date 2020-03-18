import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2" />
      <div className="container">
        <p style={{'minHeight': '1200px'}}></p>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;