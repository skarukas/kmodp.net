import React from "react"
import $ from "jquery"
import "../style/welcome.css"

import EasyLink from "../components/EasyLink"
import CityOfWaterPage from "./CityOfWater"
import CrimeeNo7Page from "./CrimeeNo7"

export default class WelcomePage extends React.Component {
  static PAGE_PATH = "/"
  static PAGE_NAME = "[home]"
  componentDidMount() {
    $('.welcome-content')
      .fadeTo(2000, 1)
    $('.arrow-image')
      .delay(1000)
      .fadeTo(1000, 0.3)
    $('.welcome-links-container')
      .delay(1000)
      .fadeTo(1000, 1)
    $('.welcome-links').on('mouseleave', () => selectImage(0))
    $('.welcome-links').children().each((i, e) => {
      $(e).on('mouseenter', () => selectImage(i + 1))
    })

    function selectImage(idx) {
      $('.welcome-image').removeClass('image-selected')
      $(`.welcome-image:nth-child(${idx + 1})`).addClass('image-selected')
    }
  }
  render() {
    document.title = "kmodp"
    return (
      <div id="welcome-page">
        <div className="welcome-content">
          <div className="welcome-content-text">
            <p style={{ textAlign: "center", paddingTop: "15vh" }}>kmodp is a new experimental electronic music project drawing inspiration from microsound, glitch, and ambient music.</p>
            <hr width="200px"></hr>
            <p>
              <EasyLink to={CityOfWaterPage.PAGE_PATH}>〣 city of water [EP, 2023]</EasyLink>
            </p>
            <p>
              <EasyLink to="https://kmodp.bandcamp.com/album/2023-021-crim-e-no-7a">〣 crimee no. 7a [single, 2023]</EasyLink>
            </p>
            <p>
              <EasyLink to={CrimeeNo7Page.PAGE_PATH}>〣 crimee no. 7 [album, 2023]</EasyLink>
            </p>
          </div>
        </div>
        <div className="difference-text"><img className="welcome-full-image" alt="background" src="img/artifact-patent-diagram.png" /></div>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="almost-musical">[ SOMETHING ALMOST MUSICAL ]</div>
        <img className="welcome-full-image artefact" alt="artefact" src="img/bagatelle-machine.jpeg" />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <img className="welcome-full-image" alt="crimee no. 7" src="img/crimee-7-letter.png" />
      </div >

    )
  }
}