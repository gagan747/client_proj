import React from 'react'
import xyz from './xyz.mp4';
import { Link } from "react-router-dom";

export default function Box({ bgUrl, btnMsg, distanceFromBottom, boxName }) {
  let buttonRedirectLink = `/collection?type=${boxName || 'NEW ARRIVALS'}`
  return (
    <div className="box">
<video id="box" src={xyz} type="video/mp4" autoPlay loop muted />
 <Link to = {buttonRedirectLink} onClick={()=>{
  window.dispatchEvent(new Event('urlChange'))
 }}><span className='box-button' style={{ bottom:`${distanceFromBottom}px`}}>{btnMsg}</span></Link>
 <span className='box-name' style={{ bottom:`${distanceFromBottom}px`}}>{boxName}</span>
    </div>
  )
}
