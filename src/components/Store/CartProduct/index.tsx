import { decrease, increase, removeItem } from '@/features/cart/cartSlice';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { ICardProducts } from "typings";
import { ListItems,Brand, Price, WrapperBtn, Amount, BtnRemoveProduct, Qtd, AmountValue } from "./styled";

export default function CartProduct({ id, photo, amount, price, brand, name}: ICardProducts) {
    const dispatch = useDispatch()

    return (
        <ListItems>
            <BtnRemoveProduct onClick={() => dispatch(removeItem(id))}>X</BtnRemoveProduct>
            <Image
                src={photo}
                alt={name}
                width={90}
                height={80}
            />
            <Brand>{brand} {name}</Brand>
            <Amount>
                <WrapperBtn>
                    <Qtd>Qtd:</Qtd>
                    <span onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}> - </span>
                    <AmountValue>{amount}</AmountValue>
                    <span onClick={() => {
                        dispatch(increase({ id }));
                    }}> + </span>
                </WrapperBtn>
             
                <Price>R${Math.trunc(price)}</Price>
                
            </Amount>
        </ListItems>
    )
}