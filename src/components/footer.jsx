import React from 'react';
import './footer.css';
import logo from '../assets/images/sads_logo_cropped.png'

const Footer = () => {
  return (
 <footer>
  <br></br>
  <img width = "125px" src={logo}></img>
    <br></br>
    <br></br>
    © 2025 Statistics and Data Science Club at SMU
    <br></br>
    <br></br>
    <div class="footer-links">
        <a title="GitHub" target = "_blank" href="https://github.com/Statistics-and-Data-Science-SMU/SADS-Tutorials/tree/main"><i class="fa-brands fa-github"></i></a>
        <a title="Instagram" target = "_blank" href="https://www.instagram.com/sads_dallas/"><i class="fa-brands fa-instagram"></i></a>
        <a title="Email" href="mailto:smusadsclub@gmail.com"><i class="fa fa-envelope"></i></a>
    </div>
    <br></br>
 </footer>
);
};

export default Footer;