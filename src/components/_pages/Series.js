import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AlphabeticalList from "../AlphabeticalList/AlphabeticalList";

const Series = () => {
  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, 4]}/>
      <AlphabeticalList field="series"/>
      <Footer/>
    </React.Fragment>
  );
};

export default Series;