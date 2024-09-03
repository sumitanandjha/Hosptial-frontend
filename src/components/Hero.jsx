import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Vitality Health Center is a cutting-edge facility devoted to delivering exceptional healthcare with a 
            focus on empathy and excellence. Our team of highly trained professionals is dedicated to providing 
            personalized care that meets the unique needs of every patient. At Vitality, your well-being is our top 
            priority, and we are here to guide you on a seamless path to achieving optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img className="vector" src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;