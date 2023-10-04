import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>
        <div className="wave4"></div>
      </div>
      <div className="h-screen select-none flex pt-14">
        <Navbar />
        <div className=" m-auto flex-col">
          <h1 className="m-auto  font-montserrat font-bold hover:ease-in-out dark-color tt">
            HACKJAM
          </h1>
          <h3 className="m-auto font-bold dark-color tt">2023</h3>
          <br />
          <br />
          <h2 className="text-4xl montserrat font-bold	 text">
            <sup>USF's Fall Hackathon</sup>
          </h2>
          <h2 className="text-xl montserrat font-semibold	 text">
            <sup>October 22nd</sup>
          </h2>
          <br />
          <div className="flex justify-center items-center">
            <form className="m-4"
              action="https://ocioyx01rpq.typeform.com/to/vSjZMc0c"
              target="_blank"
            >
              <button
                onClick=""
                className="btn bg-transparent font-semibold py-2 px-4 border btn-border hover:border-transparent rounded text"
              >
                Register Now
              </button>
            </form>
            <form className="m-4"
              action="#Shivam"
              target="_blank"
            >
              <button
                onClick=""
                className="btn bg-transparent font-semibold py-2 px-4 border btn-border hover:border-transparent rounded text"
              >
                Sign Up as Volunteer
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Home;
