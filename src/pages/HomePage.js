import React from "react"

import "../style/CrimeeNo7.css"
import { KmodpBio, CrimeeNo7Info, YoutubeVideo, Image } from "./CrimeeNo7"
import EasyLink from "../components/EasyLink"

export default class HomePage extends React.Component {
  static PAGE_PATH = "/"
  static PAGE_NAME = "[home]"
  static PERMA_PATH = "/crimee-no7-epk"

  render() {
    return (
      <div className="crimee-no-7-page">
        <img alt="background" className="background-img" src="img/artifact-patent-diagram.png" />
        <div className="crimee-content">
          <Image alt="crimee-cover" src="img/crimee-7-cover.jpg" width={500} />
          <div className="crimee-title">
            <h2>〣 crimée no. 7 〢</h2>
            <span>{"< coming 02/02/2024 >"}</span>
          </div>
          <div className="crimee-quote">
            <p>
              <i>"... a whirring, digital magnetic field of mechanical and organic sounds ..."</i>
            </p>
            <p>
              - <EasyLink to="https://tometotheweathermachine.com/">Tome to the Weather Machine</EasyLink>
            </p>
          </div>
          <div className="crimee-text-container">
            <KmodpBio />
          </div>
          <YoutubeVideo src="https://www.youtube.com/embed/M0sxQlrMhrA?si=7Xw1CEEtpLLMkpL0" />
          <div className="crimee-quote">
            <p>
              <i>"a comfy electrostatic pillow on which weary heads can relax."</i>
            </p>
            <p>
              - <EasyLink to="https://www.theslowmusicmovement.org/">The Slow Music Movement</EasyLink>
            </p>
          </div>
          <div className="crimee-text-container">
            <CrimeeNo7Info />
          </div>
          <YoutubeVideo className="leech-video" src="https://www.youtube.com/embed/U4b3P75FPM8?si=9LUytQne_WCMUkVX" />
          <div className="bottom-padding"></div>
        </div>
      </div>)
  }
}