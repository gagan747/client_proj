import React from 'react'

export default function Product({imgUrl, price, title}) {
  return (
    <div className='product'>
      <img src={imgUrl} alt={imgUrl} width='100%' height='380px' className='product-image'/>
      <div className='product-title'>{title}</div>
      <div className='product-price'>&#8377;{price}</div>
    </div>
  )
}
