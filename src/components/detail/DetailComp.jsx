import React, { useState } from 'react'

const DetailComp = ({productDetail}) => {
    const [quantity,setQuantity] = useState(null)
    const decrement = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
        
    }
    const increment = () => {
        if(quantity < productDetail?.rating?.count){
             setQuantity(quantity + 1)
        }
       
    }
  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[500px] j-[500px] object-cover' src={productDetail?.image} alt="" />
        <div>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-2 text-2xl'>{productDetail?.description}</div>
            <div className='my-5 text-xl text-red-500'> Rating : {productDetail?.rating?.rate}</div>
            <div className='my-5 text-xl text-red-500'> Count : {productDetail?.rating?.count}</div>
            <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-small'>TL</span></div>
            <div className='flex items-center gap-5 my-5'>
                <div onClick={decrement} className='text-4xl cursor-pointer'>-</div>
                <input className='w-15 text-center text-4xl font-bold' type="text" value={quantity} />
                <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
            </div>
            <div className='border w-[200px] text-2xl rounded-md py-4 bg-gray-200 cursor-pointer flex items-center justify-center'>Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComp