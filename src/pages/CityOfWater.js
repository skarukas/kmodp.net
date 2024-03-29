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
          <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/album/3T61aJ7RFb0qyGzGeHC63W?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <EasyLink to="https://www.youtube.com/watch?v=U4b3P75FPM8">[ ► "Leech" music video ]</EasyLink>
        <img className="welcome-full-image" alt="leech" src="img/leech-water.jpg" />
      </div>
    )
  }
}