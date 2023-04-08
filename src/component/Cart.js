import React from 'react'

const Cart = (props) => {
    // console.log(props);
    const cart=props.cart
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if(total === 0){
        shipping = 0;
    }
    else if(total <100){
        shipping = 60;
    }
    else if(total >100){
        shipping = 50;
    }
    let formatNumber = (num)=>{
        const prcision = num.toFixed(2)
        return Number(prcision);
    }
  return (
    <>
      <div className="cart-text">
         <div className="cart-head text-center">
            <h3>Order Summary</h3>
            <p>Items ordered:{cart.length}</p>
         </div>
         <table>
                <tbody>
                    <tr>
                        <td><small>Items:</small></td>
                        <td> ${formatNumber(total)}</td>
                    </tr>
                    <tr>
                        <td><small>Shipping & Handling:</small></td>
                        <td> ${formatNumber(shipping)}</td>
                    </tr>
                </tbody>
         </table>
         <div className="cart-total">
            <h6><span>Total Price:</span> ${formatNumber(total+shipping)}</h6>
         </div>
         <button className='button'><small>Review your order</small></button>
      </div>
    </>
  )
}

export default Cart
