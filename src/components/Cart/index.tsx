import Close from "@/assets/Close";
import { useSelector } from "react-redux";
import { ICardProducts } from "typings";
import CartProducts from '../CartProducts';

import { Button, Container, TotalCart, Btn } from "./styled";

export default function Cart() {


    return (
        <Container>
            <div><h2>Carrinho <br /> de compras</h2><Btn><Close /></Btn></div>

            <CartProducts />

            <TotalCart>
                Total: <span>R${798}</span>
            </TotalCart>
            <Button>
                Finalizar Compra
            </Button>
        </Container>
    )
};