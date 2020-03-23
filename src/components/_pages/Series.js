import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";
import Container from "../_ui/Container/Container";

const Series = () => {
  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, 4]}/>
      <Container>

      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default Series;