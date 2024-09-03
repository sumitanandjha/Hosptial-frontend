import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import img from "../../public/signin.png";

const Appointment = () => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>Schedule Your Appointment | Vitality Health Center</h1>
          <p>

            At Vitality Health Center, we pride ourselves on being more than just a healthcare facility—we are your partners in achieving vibrant health. Our commitment to excellence is reflected not only in the expertise of our medical professionals but also in the efficiency and convenience of our services. With a streamlined appointment-making process, we ensure that your journey to better health begins without delay. Our state-of-the-art systems allow for swift scheduling, ensuring that you receive the care you need precisely when you need it. At Vitality, exceptional service is not just a promise; it's the standard. Every interaction is designed to be smooth and stress-free, so you can focus entirely on your well-being.
            
          </p>
        </div>
        <div className="banner">
          <img src={img} alt="hero" className="animated-image" />
          <span>
            <img className="vector" src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
      <AppointmentForm />
    </>
  );
};

export default Appointment;