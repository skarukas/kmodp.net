import React from "react"

import "../style/CrimeeNo7.css"
import EasyLink from "../components/EasyLink"

export default class CrimeeNo7Page extends React.Component {
  static PAGE_PATH = "/crimee-no-7"
  static PAGE_NAME = "crmén7"

  render() {
    return (
      <div className="crimee-no-7-page">
        <img alt="background" className="background-img" src="img/artifact-patent-diagram.png" />
        <div className="crimee-content">
          <div className="crimee-text-container">
            <CrimeeNo7Info />
          </div>
          <div className="bottom-padding"></div>
        </div>
        {/* <Image alt="levitator" src="img/levitator-cover.jpg" url="https://kmodp.bandcamp.com/track/2023-031-levitator-triple-rotation" />
        <Image alt="telegraphy" src="img/electric-telegraphy-cover.jpg" url="https://kmodp.bandcamp.com/track/2023-012-electric-telegraphy-24-may-1844" />
        <Image alt="crimee7a" src="img/crimee-7a-cover.png" url="https://kmodp.bandcamp.com/album/2023-021-crim-e-no-7a" /> */}

        {/*      <div className="crimee-background"><img className="welcome-full-image" alt="background" src="img/crimee-7a-cover.png" /></div> */}
      </div>
    )
  }
}

class SpotifyPreview extends React.Component {
  render() {
    return (
      <iframe className="spotify-preview" title={this.props.title} src={`https://open.spotify.com/embed/track/${this.props.track_id}?utm_source=generator&theme=0`} width="100%" height="100" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
  }
}

export class YoutubeVideo extends React.Component {
  render() {
    return (<iframe className="youtube-video" width="560" height="315" src={this.props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ width: 'calc(min(100vw, 560px))' }}></iframe>)
  }
}

export class Image extends React.Component {
  /* componentDidMount() {
    let clickToggle = true;
    // fix all this
    function show_children() {
      if (clickToggle) {
      $(this).children('.toggle-image-inner-container').fadeIn(500)
      }
    }
    function hide_children() {
      if (!clickToggle) {
        $(this).children('.toggle-image-inner-container').fadeOut(500)
      }
    }
    function toggle_children() {
      hide_children()
      show_children()
      clickToggle = !clickToggle
    }
    $('.album-cover-container').on('mouseenter', show_children)
    $('.album-cover-container').on('mouseleave', hide_children)
    $('.album-cover-container').on('click', toggle_children)
  } */
  render() {
    let w = `calc(min(${this.props.width || 300}px, 100vw))`
    return (<EasyLink to={this.props.url}>
      <div className="album-cover-container" style={{ backgroundImage: `url(${this.props.src})`, width: w, height: w }}>
        {/* <img className="album-cover-image-large" alt={props.alt} src={props.src} /> 
      <div className="toggle-image-inner-container">
        <p>sdfjbdsfjkskb</p>
      </div>*/}
      </div>
    </EasyLink>)
  }
}

export function CrimeeNo7Info() {
  return (
    <div className="crimee-no-7-info">
      <img alt="hand-cranked" className="float-image" src="img/hand-cranked-cylinder-cover.jpg" width="250" />
      <h2>crimée no. 7</h2>
      <p>
        <i>Crimée No. 7</i>, the upcoming solo album from kmodp, is akin to a postcard from a distant past, blending intricate percussive patterns and expansive piano textures into artifacts meant to invoke a nostalgia for an out-of-reach era, an industrial past outside of the pervasive digital culture of our time.
      </p>
      <p>
        Through reference to old media formats (wax cylinders, radio static, analog and digital glitches), each track becomes an artifact sent through time, labeled as they would be in an archival catalog (e.g., <i>2023:01.1</i>).
      </p>
      <p>
        Carefully-selected layers of noise hint at a vintage sound and work to accomplish the ultimate goal of the album: to create a music that is digital yet breathing — <i>"a whirring, digital magnetic field of mechanical and organic sounds"</i> (Tome to the Weather Machine).
      </p>
      <SpotifyPreview title="crimee no. 7a" track_id="3gc1sGwflBEDJm0cwDaYB5" />
      <p>
        Marked by formant-shifted voices and piano lines that have been spliced and looped into rich textures are the three tracks at the heart of the album, <i>Crimée No. 7a</i> through <i>Crimée No. 7c</i>. The most dynamic track, <i>Crimée No. 7b</i>, takes as its backbone an enigmatic percussive pattern, which pulls and pushes wildly in tempo—from 60 to 180 beats per minute—as the music shifts between melancholy piano loops and pointillistic breakbeats. Serving as the source material for the ghostly pads and percussive content of the track is a field recording from riding on metro line 7 to the composer's temporary lodging near the Crimée station in Paris.
      </p>
      <p>
        The album serves as a love letter to city life, from the industrial corners of Seattle, where decrepit tracks cut through forgotten railways, to the nostalgia for the metro stations and graffiti of Paris in the summer of 2018, where the composer first discovered his love for electronic music when studying at the IRCAM in Centre Pompidou.
      </p>
      <SpotifyPreview title="electric-telegraphy" track_id="0nGzmJybDZFyGNZV8H31oc" />
      <p>
        Though written over the course of a year, the bulk of the composition of this album took place at the beginning and end of 2023. Consistent throughout the album is a bittersweet nostalgic mood characteristic of winter, with the warm production of the ambient tracks creating <i>"a comfy electrostatic pillow on which weary heads can relax."</i> (The Slow Music Movement).
      </p>
      <p>
        <i>Crimée No. 7</i> releases on streaming services on February 2, 2024.
      </p>
    </div>
  )
}

export function KmodpBio() {
  return (
    <div className="kmodp-bio">
      <img className="float-image" src="img/kmodp-headshot.jpg" alt="headshot" width="300" />
      <h2>kmodp</h2>
      <p>
        kmodp is the electronic music project of Seattle-based composer <EasyLink to="https://skarukas.com">Stephen Karukas</EasyLink>.
      </p>
      <p>
        Karukas previously performed as a percussionist and composed for contemporary music ensembles before pivoting towards a technical career. kmodp is a rechanneling of musical efforts: a departure from acoustic music into a new electronic medium and an attempt to bring the dynamism of natural sound to a digital world.
      </p>
      <p>
        kmodp's first release, <i>City of Water</i> (April 2023), was a collaborative EP with <EasyLink to="https://lucjardie.bandcamp.com/">Luc Jardie</EasyLink> and <EasyLink to="https://cellartone.bandcamp.com/">Cellartone</EasyLink>, produced by an experimental compositional process taking the form of a musical game of telephone—each artist manipulates and remixes a track without limits, often beyond recognition, before handing it off to the next producer, who does the same.
      </p>
      <p>
        kmodp's first album, <i>Crimée No. 7</i>, will be released in February 2024. Three singles from the album were released throughout the course of 2023.
      </p>
      <p>Find kmodp on <EasyLink to="https://open.spotify.com/artist/4lmC5Ri5LYsFDoUP2sJgel">Spotify</EasyLink>, <EasyLink to="https://www.instagram.com/kmodp.music">Instagram</EasyLink>, <EasyLink to="https://kmodp.bandcamp.com/">Bandcamp</EasyLink>, or <EasyLink to="https://soundcloud.com/kmodp">SoundCloud</EasyLink>.
      </p>
    </div>
  )
}