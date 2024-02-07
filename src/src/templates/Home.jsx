// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'react-bootstrap';
// import { useState } from "react";
import "../css/Home.css";

// import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import hero from "../templates/assets/heroback.png";
// import pic from "../assets/dummy logo.png";

import girl from "../templates/assets/girl image.png";
import pink from "../templates/assets/rectanglepink.png";
import anxiety1 from "../templates/assets/Property 1=anxiety.png";
import anxiety2 from "../templates/assets/Property 1=depression.png";
import anxiety3 from "../templates/assets/Property 1=depression.png";
import anxiety4 from "../templates/assets/Property 1=anxiety.png";
import anxiety5 from "../templates/assets/Property 1=anxiety.png";
import anxiety6 from "../templates/assets/Property 1=stress.png";

import cry from "../templates/assets/crying_boy.png";
import frame1 from "../templates/assets/Frame 63wellness img.jpg";
import frame2 from "../templates/assets/Frame 67chat.png";
import frame3 from "../templates/assets/Frame 70call.png";
import frame4 from "../templates/assets/Frame 71Vcall.png";
import talk from "../templates/assets/consultantimg.png";
import med from "../templates/assets/Group 23meditation.png";
import green1 from "../templates/assets/Group 16pink quote.png";
import team1 from "../templates/assets/greenwave.png";
import team2 from "../templates/assets/aboutteamimage.png";
import team3 from "../templates/assets/unsplash_8YG31Xn4dSw.png";
import green from "../templates/assets/green quote.png";
import { Link } from "react-router-dom";
// import {TabbedInterface} from "./accounts/TabbedInterface";
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";


function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState();
  const navigate = useNavigate()
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
}, [navigate, value]);
    
  return (


    <Modal 
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter" 
      centered
    >
      
      <Modal.Body>
        <p className="modalbody"><b>Do you want to talk to  doctor ?</b></p>

      </Modal.Body>
      <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter your room code" className='joining1'/>
      <br></br>
      <button onClick={handleJoinRoom} className='joining'>Join</button>
      <br></br>
    </Modal>
  );
}


export const Home = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate()
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
}, [navigate, value]);
  


  const [modalShow, setModalShow] = React.useState(false);


  const [activeTab, setActiveTab] = useState("London"); // Change default to null

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName); // Toggle activeTab
  };

  const tabContent = {
    London: {
      heading: <h3>Let's Beat Anxiety</h3>,
      text: "Anxiety is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="butt11">Begin your journey</Link>,
    },
    Paris: {
      heading: <h3>Let's Beat Depression</h3>,
      text: "Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/depressinfo"className="butt11">Begin your journey</Link>,
    },
    Tokyo: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/stressinfo"className="butt11">Begin your journey</Link>,
    },
    India: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed"className="butt11">Begin your journey</Link>,
    },
    Kolkata: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed"className="butt11">Begin your journey</Link>,
    },
    Delhi: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed"className="butt11">Begin your journey</Link>,
    },
  };
  return (
    <>

      <div class="her">
        <img class="herimg1" src={hero} alt="" />
        <table class="home">
          <tr>
            <td>
              <div class="her-text">
                <p class="btext-1">Take care of Your</p>
                <p class="btext-2">Mental Health</p>
                <p class="btext-3">
                  A specialized medical facility that <br/>
                  provides diagnostic,therapeutic and <br/>
                  surgical services related to the eyes and<br/>
                  vision
                </p>
              </div>
            </td>
            <td>
              <img class="herimg2" src={girl} alt="" />
            </td>
          </tr>
        </table>
        {/*<button class="cta1" type="button">
          Get Started
        </button>*/}
      </div>

      <div class="wave">
        <img class="img9" src={pink} alt="girl icon" />
        <p class="cardtxt1">Begin your journey</p>
        <p class="cardtxt2">
          Select the Disorder relevant to you and we will guide you
        </p>
      </div>

      <div className="tab">
        <img
          src={anxiety1}
          alt="anxiety1"
          onClick={() => openCity("London")}
          className={activeTab === "London" ? "active" : ""}
          id= "anxiety111"
        />
        <img
          src={anxiety2}
          alt="depression1"
          onClick={() => openCity("Paris")}
          className={activeTab === "Paris" ? "active" : ""}
          id= "anxiety111"
        />
        <img
          src={anxiety3}
          alt="stress1"
          onClick={() => openCity("Tokyo")}
          className={activeTab === "Tokyo" ? "active" : ""}
          id= "anxiety111"
        />
        <img
          src={anxiety4}
          alt="anxiety2"
          onClick={() => openCity("India")}
          className={activeTab === "India" ? "active" : ""}
          id= "anxiety111"
        />
        <img
          src={anxiety5}
          alt="depression2"
          onClick={() => openCity("Kolkata")}
          className={activeTab === "Kolkata" ? "active" : ""}
          id= "anxiety111"
        />
        <img
          src={anxiety6}
          alt="stress2"
          onClick={() => openCity("Delhi")}
          className={activeTab === "Delhi" ? "active" : ""}
          id= "anxiety111"
        />
      </div>

      {/* <!-- Tab content --> */}
      {activeTab && (
        <div className="tabcontent">
          <table>
            <tr>
              <td>
                <p className="cardtxt3">{tabContent[activeTab].heading}</p>
                <p className="cardtxt4">{tabContent[activeTab].text}</p>
                
                <button type="button" className="butt1">
                  {tabContent[activeTab].buttonText}
                </button>
              </td>
              <td>
              <img className='crying12' src={cry }alt="crying boy image"/>
              </td>
            </tr>
          </table>
        </div>
      )}
      {/* <div>
    <img className='crying12' src={cry }alt="crying boy image"/>
    <div> 
    <button type="button"> Begin your Journey</button>
    </div> */}
    
      <br />
      <div class="quotes1">
        <img src={green} alt="green quote" />
        <p>
          Healing may not be easy, but it's possible. Every small step forward
          is a victory.
        </p>
      </div>

      <div class="well">
        <p class="well1">Your Path To wellness</p>
        <p class="well2">Step By Step Guidance Towards Wellness</p>
        <img src={frame1} alt="wellnes image" />
      </div>

      <div class="lets_talk">
        <table>
          <tr class="talk_row">
            <td>
              <p class="talk1">Talk It Out</p>
              <p class="talk2">
                Easily access our licensed counselors and experts. Instant
                guidance and support tailored to your needs, whenever you need
                it. Your well-being, your way.
              </p>
              <table>
                <tr>
                  <td>
                    <img class="talk-img" src={frame2} alt="chat" />
                  </td>
                  <td>
                    <img class="talk-img" src={frame3} alt="call" />
                  </td>
                  <td>
                    <img class="talk-img" src={frame4} alt="video call" />
                  </td>
                </tr>
              </table>
              <div>

              <button onClick={handleJoinRoom}
              variant="primary"
              onClick={() => setModalShow(true)}
              className="btalk-button"
            >
              Let's Connect
            </button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>


            </td>
            <td>
              <img class="talk-img1" src={talk} alt="computer image" />
            </td>
          </tr>
        </table>
      </div>

      <div class="meditation">
        <p class="m1">Meditation & Mindfulness</p>
        <p class="m2">Your Path To Inner Calm Starts Here</p>
        <p class="m3">
          Begin your meditation journey and discover moments of tranquility and
          self-discovery. Dive into our Meditation Section with a range of
          meditation themes to choose from.
        </p>
        <img src={med} alt="meditation image" />
        <button type="button">Let's Explore</button>
      </div>

      <div class="quotes2">
        <img src={green1} alt="green quote" />
        <p>
          Healing may not be easy, but it's possible. Every small step forward
          is a victory.
        </p>
      </div>

      <div class="team">
        <div>
          <img class="team-img1" src={team1} alt="green" />
          <p class="team-text">About Team</p>
          <img class="team-img2" src={team2} alt=" team" />
        </div>

        <div>
          <img class="team-img team-img3" src={team3} alt="member-1" />
          <img class="team-img team-img4" src={team3} alt="member-2" />
          <img class="team-img team-img5" src={team3} alt="member-3" />
        </div>

       

        <p class="team-text team-text3">Name</p>
        <p class="team-text team-text4">designation</p>
        <p class="team-text team-text5">Name</p>
        <p class="team-text team-text6">designation</p>
        <p class="team-text team-text7">Name</p>
        <p class="team-text team-text8">designation</p>
      </div>
    </>
  );
};