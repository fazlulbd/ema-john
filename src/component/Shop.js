import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fakeData from '../fakeData';
import Product from './Product';
import Cart from './Cart';
const Shop = () => {
  const productItem =fakeData.slice(0, 15);
  const [product, setProduct]=useState(productItem);
  const [cart, setCart]= useState([])
  const handelProduct= (product)=>{
    // console.log('add product',product)
    const newCart= [...cart, product];
    setCart(newCart);
    setCart([...cart, product])
  }
  return (
    <>
      <Container>
        <Row>
        <Col lg={9}>
            {
              product.map(item => <Product
                                    product={item}
                                    handelProduct = {handelProduct}
                                  ></Product>)
            }
            
        </Col>
        <Col lg={3} className='cart'>
            <Cart cart= {cart}></Cart>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default Shop
