import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">
        <div className="footer_icons">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="footer_bottom">
          <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copyright">
            &copy; 1997-2024 Netflix, Inc.
        </div>

        </div>

        
      </div>
    </div>
  );
}

export default Footer;
