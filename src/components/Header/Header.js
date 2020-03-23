import React from 'react';
import cls from './Header.scss';
import ImageBooks from '../../img/books.jpg';
import Logo from "../_ui/Logo/Logo";
import Container from "../_ui/Container/Container";
import Search from "../Search/Search";
import ToggleMenu from "../_ui/ToggleMenu/ToggleMenu";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";
import {closeMenu, openMenu} from "../../store/actions/header";

const Header = props => {
  const closeMenu = (event) => {
    if (event.target.closest(`[class^="menuActiveLink"]`)) {
      event.preventDefault();
    } else {
      props.closeMenu();
    }
  };

  const classes = [cls.header];
  if (props.top) {
    classes.push(cls.headerOnlyTop);
  }

  return (
    <section className={classes.join(' ')}>
      <div className={cls.headerTop}>
        <Container>
          <Logo/>
          <Search/>
        </Container>
        <ToggleMenu openMenu={props.openMenu}/>
        <Menu isOpen={props.menu} onClose={closeMenu}/>
      </div>
      <div className={cls.headerBottom} style={{'backgroundImage': `url(${ImageBooks})`}}>
        <Container>
          <h1 className={cls.headerTitle}>{props.title}</h1>
          <p className={cls.headerDesc}>{props.subtitle}</p>
        </Container>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  const { menu } = state.header;
  return { menu };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch(openMenu()),
    closeMenu: () => dispatch(closeMenu())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);