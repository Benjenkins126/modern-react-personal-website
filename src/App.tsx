import './App.css';
import Main from './router/Main';
import SocialMediaItem from './components/general/social-media/SocialMediaItem';

import $ from "jquery";
import { faTwitter, faDiscord, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <Main />
      <div className="bg-github-section absolute top-1/4 right-0 rounded-tl-xl rounded-bl-xl">
        <SocialMediaItem icon={faTwitter} link="https://twitter.com/benjenk126" lastItem={false} color="text-twitter" />
        <SocialMediaItem icon={faInstagram} link="https://www.instagram.com/benj.126/" lastItem={false} color="text-instagram" />
        <SocialMediaItem icon={faYoutube} link="https://www.youtube.com/c/BenJenkins" lastItem={false} color="text-youtube" />
        <SocialMediaItem icon={faDiscord} link="https://discord.gg/sdF3yjpapA" lastItem={true} color="text-discord" />
      </div>
    </>
  );
}

export default App;
