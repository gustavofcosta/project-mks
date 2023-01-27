import Cart from '../../assets/Cart';
import { Nav } from './styled';

export default function Navbar() {
  return (
    <Nav>
      <h1>MKS<span>Sistemas</span></h1>
      <button>
        <Cart />
        <span>0</span>
      </button>
    </Nav>
  );
}
