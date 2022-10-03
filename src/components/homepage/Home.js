import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Home() {
    const [product,setproduct]=useState([])
    const [search,setsearch]=useState('')
    const [filterdata,setfilterdata]=useState([])

    const getproduct= async()=>{
     const data=await axios.get("https://fakestoreapi.com/products")
     console.log(data)
     setproduct(data.data)
    }

    useEffect(()=>{
        getproduct();
    },[])
    useEffect(()=>{
        setfilterdata(
            product.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()))
    )},[product,search])
  return (
    <div className='container py-5'>
        <div>
            <input className='text-primary' type='text' placeHolder='searchitems' onChange={(e)=>setsearch(e.target.value)} />
        </div>
    <div className='row'>
        
        {filterdata.length===0?<div>No result found</div>: filterdata.map((pro)=>(
            <div className='col-md-3'>
                <div className='card my-2'>
        <img src={pro.image} alt={pro.title} />
        </div>
        <div>
            <h2>{pro.title}</h2>
        </div>
        </div>
    ))}</div>
    </div>
  )
}

export default Home