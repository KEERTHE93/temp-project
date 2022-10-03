import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addtocart } from '../../redux/product-actions/Productactions'
import { useDispatch } from 'react-redux'


function Productdetails() {
    const {id}=useParams()
    const [products,setproduct]=useState({})
    const [added,isadded]=useState(false)
    const dispatch=useDispatch()
   const  getproductdata=async ()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    //console.log(data)
    setproduct(data)
 }

    useEffect(()=>{
      getproductdata();
    },[])
  return (
    <div className='container'>
      {
        Object.keys(products).length ?(
          <div>
            <div className='row border border-primary mt-2'>
              <div className='col-lg-6 p-5 mt-2'>
                <img src={products.image} alt={products.title} className='img-fluid'/>
                <h2 className='p-5'>{products.categories}</h2>
              </div>
              <div className='col-lg-6 p-5'>
                <h2>{products.title}</h2>
                <p className='p-5'>{products.description}</p>
                <div className='product_price'>
                  <span >
                  <h5 className='bg-info text-light'>Price:${products.price}</h5>
                  </span>
                </div>
                <div className='product_add_to_cart mt-3'>
                  <button className='btn btn-info px-3 py-2' onClick={()=>{dispatch(addtocart(products))
                   isadded(true) 
                }}>{added ?"added ":"addtocart"}</button>
                </div>
                </div>
            </div>
          </div>
        ) :<div >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOPigrS9fwwND-SMEPXzKHpDXSc1atzSKo9isINs&s' alt='loader icon'/>
    </div>              
              
      }
    </div>
  )
}

export default Productdetails