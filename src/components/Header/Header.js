import React, {useState} from 'react';
import cls from './Header.scss';
import ImageBooks from '../../img/books.jpg';
import Logo from "../_ui/Logo/Logo";
import Container from "../_ui/Container/Container";
import Search from "../Search/Search";
import ToggleMenu from "../_ui/ToggleMenu/ToggleMenu";
import Menu from "../Menu/Menu";

const Header = props => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = (event) => {
    if (event.target !== document.querySelector('[class^="menuActiveLink"]')) {
      setMenu(false);
    }
  };

  const classes = [cls.header];
  if (props.bottom) {
    classes.push(cls.headerOnlyTop);
  }

  return (
    <section className={classes.join(' ')}>
      <div className={cls.headerTop}>
        <Container>
          <Logo/>
          <Search/>
        </Container>
        <ToggleMenu openMenu={openMenu}/>
        <Menu isOpen={menu} onClose={closeMenu}/>
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

export default Header;