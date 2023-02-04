import React from 'react'
import { useDispatch } from 'react-redux';
import { disapperProductDescriptionModal } from '../actions';

export default function ProductDescription({ productDescription, productImage, productName, productColors, productPrice}) {
const dispatch = useDispatch();
const [productCount, setproductCount] = React.useState(1)
  return (
    <div className='product-description' onClick={(e)=>{
          e.stopPropagation();
          dispatch(disapperProductDescriptionModal())
    }}>
      <div className="product-description-modal" onClick={(e)=>{
          e.stopPropagation()
      }}>
          <span className='prod-desc-crossicon' onClick={(e)=>{
           dispatch(disapperProductDescriptionModal())
          }}><i className='fa fa-times'></i></span>
          <div className='product-description-image'>
            <img src={productImage} alt={productImage} width='100%' height='100%'/>
          </div>
          <div className='product-description-info'>
            <div>{productName}</div>
             <div>{productDescription}</div>
             <div>₹{productPrice}</div>
          <div>
            <div>
              <span onClick={()=>{
                if(productCount === 1)
                return;
                setproductCount((productCount)=>--productCount)
              }}>-</span>
              <span>{productCount}</span>
              <span onClick={() => {
                if (productCount === 100)
                  return;
                setproductCount((productCount) => ++productCount)
              }}>+</span>
            </div>
            <div><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Add to basket</span></div>
            <div><i className="fa  fa-heart-o"></i></div>
          </div>
          </div>
      </div>
    </div>
  )
}
