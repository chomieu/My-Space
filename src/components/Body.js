import React from "react"
import Darkness from "./Darkness"
import Line from "./Line"
import Header from "./Header"
import Contents from "./Contents"
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import "./Body.css"

export default function Body(props) {

  return (
    <div className="bg" style={{ backgroundImage: `url(${props.bgImg})` }}>
      <Darkness shadowColor={props.shadowColor} />
      <Line lineColor={props.lineColor} />
      <Header hamburger={props.hamburger} themeColor={props.themeColor} />
      <Contents pageContents={props.pageContents} galaxyImg={props.galaxyImg}/>
      <Particles id="tsparticles" options={tsparticles} />
    </div>
  )
}
