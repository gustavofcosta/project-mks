import Close from "@/assets/Close";
import { closeCartModal } from '@/features/cartModal/cartModalSlice';
import { AppDispatch } from '@/store';
import { useDispatch, useSelector } from "react-redux";
import { ICardProducts } from "typings";
import CartProducts from '../CartProducts';

import { Button, Container, TotalCart, Btn } from "./styled";

export default function Cart() {
    const { isOpen } = useSelector((store: any) => store.cartModal)
    const { total } = useSelector((store: any) => store.cart)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Container isOpen={isOpen}>
            <div><h2>Carrinho <br /> de compras</h2><Btn onClick={() => { dispatch(closeCartModal()) }}><Close /></Btn></div>

            <CartProducts />

            <TotalCart>
                Total: <span>R${total}</span>
            </TotalCart>
            <Button>
                Finalizar Compra
            </Button>
        </Container>
    )
};