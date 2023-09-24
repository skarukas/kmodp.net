import "../style/SocialContainer.css"
import EasyLink from "./EasyLink"

export default function SocialContainer() {
    return (
        <div id="social-container">
            <SocialLink img="img/email-icon.png" name="Email" href="mailto:kmodp.music@gmail.com"/>
            <SocialLink img="img/facebook-icon.png" name="Facebook" href="https://www.facebook.com/profile.php?id=100091303565240"/>
            <SocialLink img="img/instagram-icon.png" name="Instagram" href="https://www.instagram.com/kmodp.music"/>
            <SocialLink img="img/youtube-icon.png" name="YouTube" href="https://www.youtube.com/@k.mod.p"/>
            {/* <SocialLink img="img/linkedin-icon.png" name="Bandcamp" href="https://kmodp.bandcamp.com/"/> */}
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