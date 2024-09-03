import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <br/>
          <h5>Who We Are</h5>
          <p>

            At VitalHealth Center, we are a forward-thinking healthcare facility dedicated to providing cutting-edge medical services with a patient-centered approach. Our team of experienced professionals works tirelessly to ensure that every individual receives the highest quality care tailored to their specific needs. With a commitment to innovation and excellence, we strive to create a supportive environment where your health and well-being are our top priorities.

          </p>

          <br/>

          <h5> What We Do </h5>
          <p>
            In 2024, we are pioneering new advancements in healthcare, focusing on integrating technology and personalized treatment plans to enhance patient outcomes. Our ongoing projects include developing state-of-the-art medical solutions , aiming to revolutionize how healthcare services are delivered. Whether you're visiting for a routine check-up or a complex procedure, we ensure that your experience at VitalHealth is both comfortable and reassuring.
          </p>
          <br/>
          <h5>  Our Philosophy </h5>
          <p>

            We believe that healthcare should be both effective and compassionate. Our philosophy is rooted in the idea that every patient deserves respect, empathy, and the best possible care. We are passionate about what we do, constantly pushing the boundaries of medical science to bring you the most innovative and effective treatments available. At VitalHealth, we make coding and technology work for you, because your health is our mission.
            
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;