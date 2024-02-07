import "../common/Footer.css";
import fb from "../assets/Group 11fb.png";
import insta from "../assets/Group 12insta.png";
import mail from "../assets/Group 14msg.png";
import Twitter from "../assets/Group 13twitter.png";
import pic from "../assets/dummy logo.png";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <>
    <footer>
      <div class="footer-column">
        <div class="logo1">
          <img src={pic} alt="Dummy Logo" />
        </div>
        <p class="follow-us">Follow us</p>
        <div class="social-icons">
          <a href="#">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="#">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:your@email.com">
            <img src={mail} alt="Email" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <div class="footer-column footer-column1">
        <h3>Quick Links</h3>
        <ul class="foot1">
          <li class="foot2">
            <Link to ='/doctor' style={{ color: '#4E4949',textDecoration:'none'}}>Counselling Sessions</Link>
          </li>
          <li class="foot2">
          <Link to ='/doctor' style={{ color: '#4E4949', textDecoration:'none' }}>Meditation & Mindfulness</Link>
          </li>
          <li class="foot2" >
          <Link to ='/doctor' style={{ color: '#4E4949',textDecoration:'none' }}>Mind Assessment</Link>
          </li>
        </ul>
      </div>
      <div class="footer-column footer-column2">
        <h3>Other Links</h3>
        <ul class="foot1">
          <li class="foot2">
          <Link to ='/doctor'style={{ color: '#4E4949',textDecoration:'none'}}>About team</Link>
          </li>
          <li class="foot2">
          <Link to ='/doctor'style={{ color: '#4E4949',textDecoration:'none' }}>Terms to be used</Link>
          </li>
          <li class="foot2">
          <Link to ='/doctor' style={{ color: '#4E4949',textDecoration:'none' }}>Profile detail</Link>
          </li>
        </ul>
      </div>
    </footer>
    <div class="copyright">
      &copy; 2023 Netfotech Solutions. All rights reserved.
    </div>
    </>
  );
};
