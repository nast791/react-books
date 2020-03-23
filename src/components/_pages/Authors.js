import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";

const Authors = () => {
  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, 3]}/>
      <div className="container">
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Authors;