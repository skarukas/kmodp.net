import { useEffect } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../style/SocialContainer.css"
import EasyLink from "./EasyLink"
import $ from "jquery"
import CityOfWaterPage from "../pages/CityOfWater";

export default function SocialContainer() {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === CityOfWaterPage.PAGE_PATH) {
        $('.invertible').addClass('inverted')
      } else {
        $('.invertible').removeClass('inverted')
      }
    }, [location]);
    return (
        <div id="social-container" className="invertible">
            <SocialLink img="img/icons/email-icon.png" name="Email" href="mailto:kmodp.music@gmail.com"/>
            <SocialLink img="img/icons/facebook-icon.png" name="Facebook" href="https://www.facebook.com/profile.php?id=100091303565240"/>
            <SocialLink img="img/icons/instagram-icon.png" name="Instagram" href="https://www.instagram.com/kmodp.music"/>
            <SocialLink img="img/icons/youtube-icon.png" name="YouTube" href="https://www.youtube.com/@k.mod.p"/>
            <SocialLink img="img/icons/bandcamp-icon.png" name="Bandcamp" href="https://kmodp.bandcamp.com/"/>
            <SocialLink img="img/icons/spotify-icon.png" name="Spotify" href="https://open.spotify.com/artist/4lmC5Ri5LYsFDoUP2sJgel"/>
        </div> 
    )
}

function SocialLink(props) {
    return (
        <EasyLink to={props.href} title={props.name}>
            <img className="transparent-icon" src={props.img} alt={props.name}/>
        </EasyLink>
    )
}