
function Footer() {
  return (
    <div id="socials" className="h-4">
      <p>For questions and concerns, reach out to us on one of our platforms</p>
      <br/><br/>
      <div class="flex justify-center">
        <div class="flex-none w-24 h-24">
          <a href={"https://www.facebook.com/hackabull"}>
            <i className="fa-brands fa-instagram socials text-3xl"/>
          </a>
        </div>
        <div class="flex-none w-24 h-24">
          <a href={"https://www.facebook.com/hackabull"}>
            <i className="fa-brands fa-discord socials text-3xl"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
