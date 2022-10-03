import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcart } from '../../redux/product-actions/Productactions'

function Cart() {
    const [total,settotal]=useState(0)
    const dispatch=useDispatch()
   const cart_data= useSelector((state)=>state.productdata.cartData)
   console.log(cart_data.length)
   const totalvalue=cart_data.reduce((prevvalue,currentvalue)=>{
    return prevvalue+currentvalue.price
   },0)
   const totalitems=cart_data.length;
//    cart_data.reduce((previtem,currentitem)=>{
//     return Number(previtem+currentitem.length) 
//    },0)
  return (
    <div>
        { cart_data && cart_data.length && (<div className='products_total'>
            <p>Total price:{totalvalue}</p>
            <p>Total items:{totalitems}</p>
        </div>)}
        
        <div className='container mt-4 border border-dark'>
            {
                cart_data && cart_data.length ?(
                    cart_data.map((product)=>(
                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <img src={product.image} alt={product.title} height="200px" className='img-fluid' />
                            </div>
                            <div className='col-md-6'>
                                <div className='mt-2 p-1'>
                                    <div><h2>Title:{product.title}</h2></div>
                                </div>
                                <div>
                                    <span className='mt-2'>{product.category}</span>
                                </div>
                                <div>
                                    <span className='mt-2'>{product.description}</span>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='mt-2'>
                                    <div className='pt-2'>price:${product.price}</div>
                                </div>
                                <button className='btn btn-danger mt-2 px-3' onClick={()=>{
                                    dispatch(removefromcart(product.id))
                                }}>Remove</button>
                            </div>


                        </div>
                    ))
                ):<p>add some items</p>
            }
        </div>
    </div>
  )
}

export default Cart