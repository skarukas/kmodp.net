import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

import ReleasesPage from "./pages/Releases";
import NavigationBar from "./components/NavigationBar"
import SocialContainer from "./components/SocialContainer"

import './style/App.css'
import CityOfWaterPage from "./pages/CityOfWater";
import CrimeeNo7Page from "./pages/CrimeeNo7";
import EasyLink from "./components/EasyLink";
import The404Page from "./pages/The404Page";
import HomePage from "./pages/HomePage";

const NAVIGATION_BAR_PAGES = [HomePage, ReleasesPage, CityOfWaterPage, CrimeeNo7Page]

const OTHER_ROUTABLE_PAGES = []

window.removeExternalParams = function () {
  // remove params that come before hash (#), for example fbclid
  let splitUrl = window.location.href.split("#")
  if (splitUrl.length === 1) {
    return
  }
  let rest = splitUrl[1]
  let origin = window.location.origin
  let queryString = splitUrl[0].replace(origin, '')
  let url;
  if (queryString.startsWith("/")) {
    queryString = queryString.slice(1)
  }
  if (!queryString) {
    url = origin + "/#" + rest
  } else if (queryString.startsWith("?")) {
    url = origin + "/#" + rest + queryString
  } else {
    url = origin + "/#" + The404Page.PAGE_PATH
  }
  window.location.replace(url)
}

window.updateURLParams = function (paramObj) {
  let params = window.getURLParams()
  for (let [key, value] of Object.entries(paramObj)) {
    if (value == null || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
  }
  let baseUrl = window.location.href.split("?")[0]
  let url = params.size ? baseUrl + "?" + params : baseUrl
  window.location.replace(url)
}

window.getURLParam = function (key) {
  return window.getURLParams().get(key)
}

window.getURLParams = function () {
  return new URLSearchParams(window.location.href.split("?")[1])
}


class App extends React.Component {

  componentDidMount() {
    /*  $('#background').css('background-image', 'url("img/site-background.jpg")') */
    window.removeExternalParams()
  }

  render() {
    let all_pages = [...NAVIGATION_BAR_PAGES, ...OTHER_ROUTABLE_PAGES]
    let perma_pages = all_pages.filter(page => page.PERMA_PATH)
    return (
      <HashRouter basename='/'>
        <div id="background"></div>
        <NavigationBar pages={NAVIGATION_BAR_PAGES} />
        <SocialContainer />
        <div id="content">
          <Switch>
            {
              all_pages.map(page => <Route exact path={page.PAGE_PATH} key={page.PAGE_NAME} component={page} />)
            }
            {
              perma_pages.map(page => <Route exact path={page.PERMA_PATH} key={page.PAGE_NAME + "_perma"} component={page} />)
            }
            {/* Catches all other routes (404). */}
            <Route component={The404Page}/>
          </Switch>
        </div>
        <div id="footer">
          <div className="web-credit invertible" >
            design by <EasyLink to="https://www.skarukas.com">stephen karukas</EasyLink>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
