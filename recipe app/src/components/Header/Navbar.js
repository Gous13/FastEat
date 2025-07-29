import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from "../../context/sidebarContext";


const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    // check if user is logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? "scrolled" : ""}`}>
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            
            {/* Brand Logo */}
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <MdFoodBank />
              <span className="navbar-brand-text fw-7">FastEat.</span>
            </Link>

            {/* Right side: login/register or welcome/logout */}
            <div className="navbar-btns flex align-center">
              {user ? (
                <>
                  <span className="welcome-text">Welcome,  { user.name} </span>
                  <button className="nav-btn" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-btn">Login</Link>
                  <Link to="/register" className="nav-btn">Register</Link>
                  <Link to="/about" className="nav-btn">About Us</Link>
                </>
              )}

              {/* Sidebar Menu Button */}
              <button type="button" className="navbar-show-btn text-white" onClick={openSidebar}>
                <IoMdMenu size={27} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
