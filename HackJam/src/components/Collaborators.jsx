import MetaLogo from "../assets/MetaLogo.png"
import AppleLogo from "../assets/AppleLogo.png"
import AmazonLogo from "../assets/AmazonLogo.png"
import NetflixLogo from "../assets/NetflixLogo.png"
import GoogleLogo from "../assets/GoogleLogo.png"

function Collaborators() {
  return (
    <>
      <div id="collaborators" className="h-min mb-20">
        <h1 className="m-auto">Brought to you in collaboration with...</h1>
        <br/><br/>
        <div className="flex flex-row select-none pr-10">
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={MetaLogo} alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 max-h-30">
            <img src={AppleLogo} alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={AmazonLogo} alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={NetflixLogo} alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={GoogleLogo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborators;
