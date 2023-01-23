import React from 'react'

export default function Box({ bgUrl, btnMsg, distanceFromBottom }) {
  return (
    <div className='box' style={{backgroundImage:`url(${bgUrl})`}}>
      <span className='box-button' style={{ bottom:`${distanceFromBottom}px`}}>{btnMsg}</span>
    </div>
  )
}
