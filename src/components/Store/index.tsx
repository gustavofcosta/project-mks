import CardList from '../CardList';
import { Section } from './styled';


export default function Store({ products }: any) {

  return (
    <Section>
      <CardList products={products} />
    </Section>
  );
}


