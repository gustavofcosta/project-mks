import React from 'react'
import { useSelector } from 'react-redux'
import { ICardProducts } from 'typings'
import Product from '../Product'
import { Container } from './styled'

export default function CartProducts() {
  const { cartProducts } = useSelector((store: any) => store.cart)

  return (
    <Container>
      {cartProducts.map((products: ICardProducts) => <Product key={products.id} {...products} />)}
    </Container>
  )
}
