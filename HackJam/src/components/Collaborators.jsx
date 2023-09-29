import MetaLogo from "../assets/MetaLogo.png"
import AppleLogo from "../assets/AppleLogo.png"
import AmazonLogo from "../assets/AmazonLogo.png"
import NetflixLogo from "../assets/NetflixLogo.png"
import GoogleLogo from "../assets/GoogleLogo.png"

function Collaborators() {
  return (
    <>
      <div id="collaborators" className="h-screen">
        <h1 className="m-auto">Brought to you in collaboration with...</h1>
        <br/><br/>
        <div className="flex flex-row select-none pr-10">
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={MetaLogo} className="stu-org-logo" alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 max-h-30">
            <img src={AppleLogo} className="stu-org-logo" alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={AmazonLogo} className="stu-org-logo" alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={NetflixLogo} className="stu-org-logo" alt="Logo" />
          </div>
          <div className="flex-auto p-0 w-20 m-auto ml-8 ">
            <img src={GoogleLogo} className="stu-org-logo" alt="Logo" />
          </div>
        </div>






        
      </div>
    </>
  );
}

export default Collaborators;
