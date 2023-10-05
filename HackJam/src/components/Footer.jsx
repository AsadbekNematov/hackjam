import HackJamLogo from '../assets/logo.png'
function Footer() {
  return (
    <div id="socials" className="h-2 pb-30 mb-20">
      {/* <p>For questions and concerns, reach out to us on one of our platforms</p>
      <br/><br/> */}
      <div className="flex justify-center">
        <div className="flex-none w-24 h-24 m-0">
          <a href={"https://www.instagram.com/shpeusf"}  target="_blank">
            <i className="fa-brands fa-instagram socials text-3xl"/>
          </a>
        </div>
        <div className="flex-none m-0 w-24 h-24">
          <a href={"https://discord.gg/wn9J92Qwk2"}  target="_blank">
            <i className="fa-brands fa-discord socials text-3xl"/>
          </a>
        </div>
      </div> 
      <a href="#home">
      <img src={HackJamLogo} className="mx-auto h-24 select-none bottom-logo" alt='logo' /></a>
    </div>
  );
}

export default Footer;