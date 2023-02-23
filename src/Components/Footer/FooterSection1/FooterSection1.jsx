import React from "react";
import "./FooterSection1.css";
import { AiFillInstagram } from "react-icons/ai";
import { TfiVimeoAlt } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

const FooterSection1 = () => {
  return (
    <div className="fs1-main-container">
      <div>
        <ul className="social-media-container">
          <li className="insta-container">
            <a
              href="https://instagram.com/supernovamproductions?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className="insta-container">
            <TfiVimeoAlt />
          </li>
          <li className="insta-container">
            <RiFacebookFill />
          </li>
          <li className="insta-container">
            <AiFillYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection1;
