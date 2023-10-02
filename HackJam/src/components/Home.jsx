import Navbar from "./Navbar";

function Home() {
  return (
    <div className="h-screen flex">
      <Navbar/>
      <div className=" m-auto flex-col">
        <h1 className="m-auto font-bold hover:ease-in-out dark-color tt text-9xl">HACKJAM</h1>
        <h3 className="m-auto font-bold dark-color tt text-6xl">2023</h3>
        <br/>
        <br/>
        <h2 class="" style={{width: "100%"}}>October 22<sup>nd</sup></h2>
        <br/>
        <form action="https://en.wikipedia.org/wiki/Hot_dog">
          <button onClick="" class="btn bg-transparen font-semibold py-2 px-4 border btn-border hover:border-transparent rounded">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

