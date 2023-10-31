import { useDispatch } from 'react-redux';
import {
  calculateNumberOfProducts,
  calculateTotalCart,
  deleteProduct,
} from '../../features/cart/cartSlice';
import { Delete } from '../CartTable/Table.style';

const DeleteProduct = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(calculateNumberOfProducts());
    dispatch(calculateTotalCart());
  };
  return <Delete onClick={handleDelete}>X</Delete>;
};

export default DeleteProduct;
