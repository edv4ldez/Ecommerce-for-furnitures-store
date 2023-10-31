import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import Cart from '../Cart/Cart.component';
import { Search } from '../Search/Search.component';
import {
  CloseButton,
  HeaderItems,
  HeaderMain,
  Logo,
  SearchIcon,
  SearchMenuContainer,
} from './Header.style';

const Header = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [menuSearch, setMenuSearch] = useState(false);
  const { innerWidth: width } = windowSize;

  const handleMenu = () => {
    setMenuSearch((menuSearch) => !menuSearch);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const MiniMenu = (
    <>
      <SearchIcon onClick={handleMenu}>
        <i className="fas fa-search"></i>
      </SearchIcon>
      <Cart />
    </>
  );

  const SearchMenu = (
    <SearchMenuContainer>
      <Search />
      <CloseButton onClick={handleMenu}>
        <i className="fas fa-close"></i>
      </CloseButton>
    </SearchMenuContainer>
  );

  return (
    <HeaderMain>
      {menuSearch ? (
        SearchMenu
      ) : (
        <>
          <Link to="/">
            <Logo data-testid="logo" src={logo} alt="logo" />
          </Link>
          <HeaderItems>
            {width <= 1007 ? (
              MiniMenu
            ) : (
              <>
                <Search />
                <Cart />
              </>
            )}
          </HeaderItems>
        </>
      )}
    </HeaderMain>
  );
};

export default Header;

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}
