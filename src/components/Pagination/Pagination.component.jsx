import { useDispatch, useSelector } from 'react-redux';
import { backPage, nextPage } from '../../features/products/productsSlice';
import {
  ButtonLeft,
  ButtonRight,
  Index,
  PaginationContainer,
} from './Pagination.style';
const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((state) => state.products);
  const handleIncrement = () => {
    dispatch(nextPage(page));
  };

  const handleDecrement = () => {
    dispatch(backPage(page));
  };
  return (
    <PaginationContainer>
      <ButtonLeft onClick={handleDecrement} disabled={page === 1}>
        <i className="fas fa-arrow-left"></i>
      </ButtonLeft>
      <Index>{page}</Index>
      <ButtonRight onClick={handleIncrement} disabled={page === totalPages}>
        <i className="fas fa-arrow-right"></i>
      </ButtonRight>
    </PaginationContainer>
  );
};

export default Pagination;
