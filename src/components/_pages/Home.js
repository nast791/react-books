import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import Spinner from "../_ui/Spinner/Spinner";

const Home = () => {
  const [state, setState] = useState({loading: true});

  useEffect(() => {
    setState({loading: false});
  }, [Catalog]);

  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2" />
      { state.loading ? <Spinner/> : <Catalog/> }
      <Footer/>
    </React.Fragment>
  );
};

export default Home;