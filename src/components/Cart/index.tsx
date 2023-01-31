import Close from "@/assets/Close";
import { useSelector } from "react-redux";
import { ICardProducts } from "typings";
import CartItems from "../CartItems";
import { Button, Container, Items, TotalCart } from "./styled";

export default function Cart() {
    const { cartProducts } = useSelector((store: any) => store.cart)


    return(
        <Container>
            <div><h2>Carrinho <br/> de compras</h2><Close /></div>
            <Items>
                {/* cartProducts.length === 1 ? <span>Carrinho vazio</span> : */ 
                cartProducts.map((products: ICardProducts) => <CartItems key={products.id} {...products}/> )}
            </Items>
            <TotalCart>
                Total: <span>R${798}</span> 
            </TotalCart>
            <Button>
                Finalizar Compra
            </Button>
        </Container>
    )
};