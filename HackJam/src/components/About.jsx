import photoHex from '../assets/hex_photo_gallery.png'

function About() {
  return (
    <div id="about" className="section" style={{'margin-top': '2rem'}}>
      <h1 className="m-auto montserrat select-none text">Think. Code. Innovate.</h1>
      <br/><br/>
      <div className="about">
        <div className="about-content relative select-none">
          <img src={photoHex} className='z-10 relative' alt="photos"/>
          <div className="absolute pink_shadow_about"></div>
        </div>
        <div className="about-content" style={{'margin-bottom': '-1rem'}}>
          <div className="about-text">
            <p className="text-left montserrat text-lg text">Welcome to HackJam - Where Innovation Meets Code!</p>
            <br/>
            <p className="text-left montserrat text-lg text">
              Our hackathon is a dynamic environment where brilliant minds come together to transform ideas into reality. 
              Whether you're a seasoned coder or a passionate novice, HackJam offers an exhilarating opportunity to think outside the box, write innovative code, and create 
              solutions that can change the world. Join us for 12 hours of intense coding, collaboration, and innovation as we embrace the motto 'Think. Code. Innovate.' 
              Together, we'll turn dreams into tangible projects and propel the future of technology. Get ready to jam with us and code your way to greatness!
            </p>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default About;
