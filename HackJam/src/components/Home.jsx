import Navbar from "./Navbar";

function Home() {
  return (
    <div className="h-screen flex">
        <Navbar/>
        <div className=" m-auto flex-col">
      <h1 className="m-auto font-bold dark-color tt">HACKJAM</h1>
      <h3 className="m-auto font-bold dark-color tt">2023</h3>
      </div>
    </div>
  );
}

export default Home;

