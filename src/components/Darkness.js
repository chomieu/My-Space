import React from "react"

export default function Darkness(props) {
  return (
    <div id="darkness" style={{
      background: `linear-gradient(-80deg, 
        ${props.shadowColor}00, 
        ${props.shadowColor}00, 
        ${props.shadowColor}77, 
        ${props.shadowColor}, 
        ${props.shadowColor})`
    }}>
    </div>
  )
}
