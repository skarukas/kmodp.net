import React from "react"
import { NavLink } from 'react-router-dom';
import $ from "jquery"

import "../style/NavigationBar.css"

export default class NavigationBar extends React.Component {

  componentDidMount() {
    $(window).on('resize', () => {
      let w = document.body.clientWidth;
      let $title = $("#nav-title")

      /* Hide navbar title */
      if (w < 850) {
        $title.is(":visible") && $title.fadeOut()
      } else {
        $title.is(":hidden") && $title.fadeIn()
      }


      $("#content").css("padding-top", $("#navbar").height())
    })
    $(window).trigger('resize')

  }

  render() {
    return (
      <div id="navbar">
        <div id="navbar-pages">
          {this.props.pages.map(page => <NavLink to={page.PAGE_PATH} exact activeClassName="navbar-selected" key={page.PAGE_NAME}>{page.PAGE_NAME}</NavLink>)}
        </div>
        <span id="nav-title">[ kmodp ]</span>
      </div>
    )
  }
}