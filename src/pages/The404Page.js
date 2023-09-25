import React from "react"
import $ from "jquery"
import "../style/The404Page.css"

export default class The404Page extends React.Component {
  static PAGE_PATH = "/404"
  static PAGE_NAME = "404"
  componentDidMount() {
    $('#the-404-page').css('background-image', 'url("img/flanders-construction.jpg")')
    window.removeExternalParams()
  }

  render() {
    return (
      <div id="the-404-page">
        <div className="the-404-text">
          <p><strong>404.</strong> the document you have requested could not be found.</p>
        </div>
      </div>
    )
  }
}