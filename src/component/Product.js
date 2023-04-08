import React from 'react';
import { Col, Row, } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock}=props.product
  return (
    <>
        <Row className='product'>
            <Col lg={3}>
             <div className="product-img">
               <img src={img} alt="" />
             </div>
            </Col>
            <Col lg={9}>
              <div className="product-text">
                <h6>{name}</h6>
                <p className='product-saller'>by: <small>{seller}</small></p>
                <p><strong>${price}</strong></p>
                <p><small>only {stock} left in stock - order soon</small></p>
              </div>
              <button onClick={()=>props.handelProduct(props.product)}  className='button'>add to cart</button>
            </Col>
        </Row>
    </>
  )
}

export default Product
