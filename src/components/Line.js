import React from "react"

export default function Line(props) {
  return (
    <div className="path-line">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.8 0 19 18.5">
        <path d="M5 0A1 1 0 0020 15" stroke={props.lineColor} stroke-width="0.05" fill="none" />
      </svg>
    </div>
  )
}
