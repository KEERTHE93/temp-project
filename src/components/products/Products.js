import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchproduct } from '../../redux/product-actions/Productactions'

function Products() {
    // const[products,setproducts]=useState([])
    const products=useSelector((state)=>state.productdata.products)
    const dispatch=useDispatch();

// const getproducts=async()=>{
//     // const response=await fetch("https://fakestoreapi.com/products")
//     // const data=await response.json()
//     // console.log(data)
//     // setproducts(data)
    
// }
    useEffect(()=>{
        dispatch(fetchproduct())
    },[])
  return (
    <div><h2>Products</h2>
    <div className='container py-5'>
        <div className='row'>
            {
                products.length>0?
                products.map((product)=>(
                    <div key={product.id} className='col-md-3'>
                        <Link to={`/products/${product.id}`}>
                        <div className='card my-2'>
                            <img src={product.image} alt={product.title} className='card-img-top img-fluid p-2'/>
                            </div>
                            
                            <div>
                                <h3 className='card-title'>{product.category}</h3>
                            </div>
                            </Link>

                    </div>

                )):<div >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOPigrS9fwwND-SMEPXzKHpDXSc1atzSKo9isINs&s' alt='loader icon'/>
                </div>
            }

        </div>

    </div>
    </div>
  )
}

export default Products