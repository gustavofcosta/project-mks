
import { useDispatch, useSelector } from "react-redux";
import { ICardProducts } from '../../../../typings';
import Close from '../../../assets/Close';
import { closeCartModal } from '../../../features/cartModal/cartModalSlice';
import { AppDispatch } from '../../../store';

import CartProduct from "../CartProduct";

import { Button, Container, TotalCart, Btn, WrapperTitle, WrapperProducts } from "./styled";

export default function Cart() {
    const { cartProducts, total } = useSelector((store: any) => store.cart)
    const { isOpen } = useSelector((store: any) => store.cartModal)
    const dispatch = useDispatch<AppDispatch>();


    return (
        <Container isOpen={isOpen}>
            <WrapperTitle><h2>Carrinho <br /> de compras</h2><Btn onClick={() => { dispatch(closeCartModal()) }}><Close /></Btn></WrapperTitle>

            <WrapperProducts>
                {cartProducts.map((products: ICardProducts) => <CartProduct key={products.id} {...products} />)}
            </WrapperProducts>

            <TotalCart>
                <div>Total:</div><span>R${total}</span>
            </TotalCart>
            <Button name='Finalizar compra'>
                Finalizar Compra
            </Button>
        </Container>
    )
};