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
        <Navbar/>
        <div className=" m-auto flex-col">
          <h1 className="m-auto font-bold hover:ease-in-out dark-color tt">HACKJAM</h1>
          <h3 className="m-auto font-bold dark-color tt">2023</h3>
          <br/>
          <br/>
          <h2 className="text-3xl"><sup>USF's Fall Hackathon</sup></h2>
          <h2 className="text-3xl"><sup>October 22nd</sup></h2>
          <br/>
          <form action="https://ocioyx01rpq.typeform.com/to/vSjZMc0c" target="_blank" >
            <button onClick="" className="btn bg-transparent font-semibold py-2 px-4 border btn-border hover:border-transparent rounded">
              Register Now
            </button>
          </form>
        </div>
      </div>
      <br/><br/>
    </>
  );
}

export default Home;