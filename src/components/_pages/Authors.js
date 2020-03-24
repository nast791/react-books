import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AlphabeticalList from "../AlphabeticalList/AlphabeticalList";

const Authors = () => {
  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, 3]}/>
      <AlphabeticalList field="author"/>
      <Footer/>
    </React.Fragment>
  );
};

export default Authors;