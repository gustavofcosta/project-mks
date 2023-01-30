import { useSelector } from 'react-redux';
import Cart from '../../assets/Cart';
import { Nav } from './styled';


export default function Navbar() {
  const { amount } = useSelector((store: any) => store.cart)

  return (
    <Nav>
      <h1>MKS<span>Sistemas</span></h1>
      <button>
        <Cart />
        <span>{amount}</span>
      </button>
    </Nav>
  );
}
