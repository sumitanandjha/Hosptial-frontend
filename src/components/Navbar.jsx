import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import ConfirmDialog from "./ComfirmLogout";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = () => {
    setIsDialogOpen(true);
  }

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const handleConfirm = async () => {
    await axios.get(`${import.meta.env.VITE_APP_HOST}/api/v1/user/patient/logout`, 
      {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/logo1.png" alt="logo" className="logo1-img" />
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>

        <ConfirmDialog
          isOpen={isDialogOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message="Are you sure you want to log out?"
        />
      </nav>
    </>
  );
};

export default Navbar;