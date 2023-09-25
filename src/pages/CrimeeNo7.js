import React from "react"
import $ from "jquery"

import "../style/CrimeeNo7.css"
import EasyLink from "../components/EasyLink"

export default class CrimeeNo7Page extends React.Component {
  static PAGE_PATH = "/crimee-no-7"
  static PAGE_NAME = "crmén7"

  render() {
    return (
      <div id="crimee-no-7-page">
        <div className="crimee-content">
        </div>
        <img className="welcome-full-image" alt="crimee No. 7a" src="img/crimee-7a-cover.png"/>
        <div className="difference-text"><img className="welcome-full-image" alt="background" src="img/artifact-patent-diagram.png" /></div>
      </div>
    )
  }
}