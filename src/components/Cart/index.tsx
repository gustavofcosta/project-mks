import Close from "@/assets/Close";
import { Button, Container, TotalCart } from "./styled";

export default function Cart() {

    return(
        <Container>
            <div><h2>Carrinho <br/> de compras</h2><Close /></div>
            <ul>

            </ul>
            <TotalCart>
                Total: <span>R${798}</span> 
            </TotalCart>
            <Button>
                Finalizar Compra
            </Button>
        </Container>
    )
};