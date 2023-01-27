import CardList from '../CardList';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { MaxWidth, Section } from './styled';

export default function Store() {
  return (
    <>
      <Navbar />
      <Section>
        <MaxWidth>
          <CardList />
        </MaxWidth>
      </Section>
      <Footer />
    </>
  );
}
