import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../assets/Cart';
import { openCartModal } from '../../features/cartModal/cartModalSlice';
import { AppDispatch } from '../../store';
import { Nav } from './styled';



export default function Navbar() {
  const { cartProducts } = useSelector((store: any) => store.cart)
  const dispatch = useDispatch<AppDispatch>();


  return (
    <Nav>
      <h1>MKS<span>Sistemas</span></h1>
      <button onClick={() => { dispatch(openCartModal()) }}>
        <Cart />
        <span>{cartProducts.length}</span>
      </button>
    </Nav>
  );
}
