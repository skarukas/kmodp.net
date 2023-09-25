import React from "react"
import $ from "jquery"

import "../style/CityOfWater.css"
import EasyLink from "../components/EasyLink"

export default class CityOfWaterPage extends React.Component {
  static PAGE_PATH = "/city-of-water"
  static PAGE_NAME = "cit°w"

  componentDidMount() {
    $('#social-container').addClass('inverted')
  }

  render() {
    return (
      <div id="city-of-water-page">
        <div className="city-of-water-container">
          <img id="city-of-water-cover" alt="city of water" src="img/city-of-water-cover.jpg" />
          <div className="city-of-water-text">
            <div><i>City of Water [ Cellartone / Luc Jardie / kmodp ]</i></div>
            <div>[ 2023 ]</div>
            <div>〣 Swollen River Swallow Me 〢</div>
            <div>〣 Leech 〢 <EasyLink to="https://www.youtube.com/watch?v=U4b3P75FPM8">[ ► video ]</EasyLink></div>
            <div>〣 Submerged 〢</div>
          </div>
        </div>
        <img className="welcome-full-image" alt="leech" src="img/leech-water.jpg" />
      </div>
    )
  }
}