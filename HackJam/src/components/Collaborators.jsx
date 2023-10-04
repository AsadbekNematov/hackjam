import SHPELogo from "../assets/SHPELogo.png"
import ACMLogo from "../assets/ACMLogo.png"
import IEEEcsLogo from "../assets/IEEEcsLogo.png"
import WiCSELogo from "../assets/WiCSELogo.png"
import GDSCLogo from "../assets/GDSCLogo.png"
import GWCLogo from "../assets/GWCLogo.png"
import DSCLogo from "../assets/DSCLogo.png"
import MECHLogo from "../assets/MECHLogo.png"

function Collaborators() {
  return (
    <>
      <div id="collaborators" className="h-min relative mb-20 section">
        <h1 className="m-auto section-title text">In collaboration with...</h1>
        <br/><br/>
          <div className="absolute purple_shadow_y"></div>
        <div className="cohostContainer select-none">
          <div className="cohost p-0 w-20 m-auto ml-8 max-h-30">
            <img src={ACMLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={DSCLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={GDSCLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={GWCLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={IEEEcsLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={MECHLogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={SHPELogo} alt="Logo" />
          </div>
          <div className="cohost p-0 w-20 m-auto ml-8">
            <img src={WiCSELogo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborators;
