import styled from 'styled-components';

export const HeaderMain = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const HeaderItems = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
  border-color: black;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 88px;

  @media (max-width: 1007px) {
    justify-self: flex-start;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
  }
`;

export const SearchMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  justify-content: center;
`;

export const SearchIcon = styled.div`
  background-color: #ff385c;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 8px;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
`;

export const CloseButton = SearchIcon;
