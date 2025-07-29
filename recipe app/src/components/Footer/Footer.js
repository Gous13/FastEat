import React, { useEffect, useState } from 'react';
import "./Footer.scss";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 10) {
        setShowFooter(true);    // show when at bottom
      } else {
        setShowFooter(false);   // hide otherwise
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? "show" : ""}`}>
      <div className='footer-content text-center'>
        <p className='footer-text'>© {new Date().getFullYear()} Foodie App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
