import React from 'react'
import xyz from './xyz.mp4';

export default function Box({ bgUrl, btnMsg, distanceFromBottom }) {
  return (
    <div className="box">
<video id="box" src={xyz} type="video/mp4" autoPlay loop muted />
 <span className='box-button' style={{ bottom:`${distanceFromBottom}px`}}>{btnMsg}</span>
    </div>
  )
}
