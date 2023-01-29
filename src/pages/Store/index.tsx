import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Section } from './styled';


export default function Store({ products }: any) {

  return (
    <>
      <Navbar />
      <Section>
        <CardList products={products} />
      </Section>
      <Footer />
    </>
  );
}


