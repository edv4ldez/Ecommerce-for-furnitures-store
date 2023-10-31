import Footer from './components/Footer/Footer.component';
import AppRouter from './router/AppRouter';
import { FurnituresMain, GlobalStyle } from './GlobalStyle.style';

const Furnitures = () => {
  return (
    <>
      <GlobalStyle />
      <FurnituresMain data-testid="furnitures">
        <AppRouter />
        <Footer />
      </FurnituresMain>
    </>
  );
};

export default Furnitures;
