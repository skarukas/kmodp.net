import React from "react"
import "../style/welcome.css"

import EasyLink from "../components/EasyLink"
import CityOfWaterPage from "./CityOfWater"
import CrimeeNo7Page from "./CrimeeNo7"

export default class ReleasesPage extends React.Component {
  static PAGE_PATH = "/releases"
  static PAGE_NAME = "[rls]"
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
              <EasyLink to="https://kmodp.bandcamp.com/album/2023-021-crim-e-no-7a">〣 crimée no. 7a [single, 2023]</EasyLink>
            </p>
            <p>
              <EasyLink to="https://kmodp.bandcamp.com/track/2023-012-electric-telegraphy-24-may-1844">〣 electric telegraphy [single, 2023]</EasyLink>
            </p>
            <p>
              <EasyLink to="https://kmodp.bandcamp.com/track/2023-031-levitator-triple-rotation">〣 levitator ("triple rotation") [single, 2023]</EasyLink>
            </p>
            <p>
              <EasyLink to={CrimeeNo7Page.PAGE_PATH}>〣 crimée no. 7 [album, coming 02/02/2024]</EasyLink>
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
      </div>
    )
  }
}