import CardList from '../CardList';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Section } from './styled';

export default function Store() {
  return (
    <>
      <Navbar />
      <Section>
        <CardList />
      </Section>
      <Footer />
    </>
  );
}
