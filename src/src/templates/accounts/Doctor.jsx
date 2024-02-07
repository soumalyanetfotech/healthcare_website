import { useEffect, useState } from "react";
import pic from "../accounts/assets1/dummy logo.png";
// import pinksquare from "../assets/pinksquare.png"
import doc from "../accounts/assets1/doc1.png";
import specialization from "../accounts/assets1/Groupspecialization-logo.png";
// import about from "../assets/GroupAbout-logo.png";
import time from "../accounts/assets1/IoTime.png";
// import expertise from "../assets/Groupexpertise-logo.png";
// import language from "../assets/Grouplanguage-logo.png";
import consultant from "../accounts/assets1/manimage.png";
import greenwave from "../accounts/assets1/greenwave.png";
import Select from "react-dropdown-select";

import fb from "../accounts/assets1/Group 11fb.png";
import insta from "../accounts/assets1/Group 12insta.png";
import mail from "../accounts/assets1/Group 14msg.png";
import Twitter from "../accounts/assets1/Group 13twitter.png";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import "../accounts/Doctor.css";

import { Link } from "react-router-dom";

export const Doctor = () => {
  const [filter, setFilter] = useState("");

  const options = [
    { value: 1, label: "all" },
    {
      value: 2,
      label: "Cardiologist",
    },
    {
      value: 3,
      label: "Pediatrician",
    },
    {
      value: 4,
      label: "Orthopedic Surgeon",
    },
    {
      value: 5,
      label: "Dermatologist",
    },
    {
      value: 6,
      label: "Neurologist",
    },
    {
      value: 7,
      label: "Psychiatrist",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleFilterInput = (event) => {
    console.log(event);
    setSelectedValue(event?.[0]);
  };

  const filterBySpecialization = (e) => {
    console.log(e);
  };
  // const filterByAvailability = (e) => {
  //   console.log(e);
  // };
  // const filterByLanguage = (e) => {
  //   console.log(e);
  // };
  // const filterByExpertise = (e) => {
  //   console.log(e);
  // };
  return (
    <>
      <div class="heroo">
        <table>
          <tr>
            <td>
              <div class="hero-text">
                <p class="hero-text1">Meet Our Counselors</p>
                <p class="hero-text2">
                  Our dedicated team of mental health professionals is here to{" "}
                  <br />
                  provide support, guidance, and a listening ear. Whether you're
                  <br />
                  dealing with anxiety, depression, or any other mental health{" "}
                  <br />
                  concern, our counselors are ready to help you on your journey
                  to well-being.
                </p>

                {/* <button type="button">Let's Start</button> */}
              </div>
            </td>
            <td>
              <img src={consultant} alt="" className="herooimage"/>
            </td>
          </tr>
        </table>
      </div>

      <img class="green" src={greenwave} alt="" />
      <p class="con-text1">Filter</p>
      {/* <div className="dropdown-container">
        <Select
          options={options}
          onChange={handleFilterInput}
          value={selectedValue}
          placeholder="All Specializations"
        />
      </div> */}
      <div class="consultant-body" id="consultant">
        {/* <div class="search-bar-container">
          <input
            type="text"
            class="search-bar"
            id="searchInput"
            oninput="filterCards()"
            placeholder="Search..."
          />
        </div> */}

        {/* 
                <div className="dropdown-container">
                    <label for="specializationDropdown">Specialization:</label>
                    <select id="specializationDropdown" className="filter-dropdown" onChange={filterBySpecialization()}>
                        <option value="all">All Specializations</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                    </select>
                </div> */}

        {/* <div class="dropdown-container">
          <label for="availabilityDropdown">Availability:</label>
          <select
            id="availabilityDropdown"
            class="filter-dropdown"
            onChange={filterByAvailability()}
          >
            <option value="all">All Availability</option>
            <option value="Mon">Mon</option>
            <option value="Tue">Tue</option>
            <option value="Wed">Wed</option>
            <option value=" Thu">Thu</option>
            <option value="Fri">Fri</option>
            <option value="Sat">Sat</option>
          </select>
        </div> */}

        {/* <div class="dropdown-container">
          <label for="languageDropdown">Language:</label>
          <select
            id="languageDropdown"
            class="filter-dropdown"
            onClick={filterByLanguage()}
          >
            <option value="all">All Languages</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div> */}

        {/* <div class="dropdown-container">
          <label for="expertiseDropdown">Expertise:</label>
          <select
            id="expertiseDropdown"
            class="filter-dropdown"
            onchange={filterByExpertise()}
          >
            <option value="all">All Expertise</option>
            <option value="Heart Health">Heart Health</option>
            <option value="Child Healthcare">Child Healthcare</option>
            <option value="Orthopedic Surgery">Orthopedic Surgery</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Psychiatry">Psychiatry</option>
          </select>
        </div> */}

        {selectedValue?.label === "Cardiologist" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor1">
            <div class="profile-header" onclick="toggleCard('doctor1')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. John Doe</h3>
              <div>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Cardiologist</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" /> Availability
              </p>
              <p class="con-text3 availability">Available on Mon, Wed, Fri</p>
            </div>
            {/* <div class="hidden-content" id="hiddenContent1">
              <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">English</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise"> Heart Health</p>
              <p class="con-text2">
                <img src={about} alt="About logo" /> About
              </p>
              <p class="con-text3 about">
                Dr. John Doe is a dedicated cardiologist with years of
                experience...
              </p>
            </div> */}
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent1')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment" style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : null}

        {selectedValue?.label === "Pediatrician" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor2">
            <div class="profile-header" onclick="toggleCard('doctor2')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. Jane Smith</h3>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Pediatrician</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" />
                Availability
              </p>
              <p class="con-text3 availability">Available on Tue, Thu, Sat</p>
            </div>
            <div class="hidden-content" id="hiddenContent2">
              {/* <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">Spanish</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise">Child Healthcare</p>
              <p class="con-text2">
                <img src={about} alt="About logo" /> About
              </p> */}
              {/* <p class="con-text3 about">
                Dr. Jane Smith specializes in providing comprehensive healthcare
                for children...
              </p> */}
            </div>
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent2')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment"style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {selectedValue?.label === "Orthopedic Surgeon" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor3">
            <div class="profile-header" onclick="toggleCard('doctor3')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. Michael Johnson</h3>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Orthopedic Surgeon</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" />
                Availability
              </p>
              <p class="con-text3 availability">Available on Tue, Thu, Fri</p>
            </div>
            {/* <div class="hidden-content" id="hiddenContent3">
              <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">English</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise">Orthopedic Surgery</p>
              <p class="con-text2">
                <img src={about} alt="About logo" /> About
              </p>
              <p class="con-text3 about">
                Dr. Michael Johnson is a skilled orthopedic surgeon specializing
                in...
              </p>
            </div> */}
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent3')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment" style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : null}
        {selectedValue?.label === "Dermatologist" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor4">
            <div class="profile-header" onclick="toggleCard('doctor4')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. Emily Davis</h3>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Dermatologist</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" />
                Availability
              </p>
              <p class="con-text3 availability">Available on Mon, Wed, Sat</p>
            </div>
            {/* <div class="hidden-content" id="hiddenContent4">
              <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">French</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise">Dermatology</p>
              <p class="con-text2">
                <img src={about} alt="About logo" /> About
              </p>
              <p class="con-text3 about">
                Dr. Emily Davis is a compassionate dermatologist with expertise
                in...
              </p>
            </div> */}
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent4')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment" style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : null}

        {selectedValue?.label === "Neurologist" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor5">
            <div class="profile-header" onclick="toggleCard('doctor5')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. Samuel Brown</h3>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Neurologist</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" />
                Availability
              </p>
              <p class="con-text3 availability">Available on Mon, Thu, Sat</p>
            </div>
            {/* <div class="hidden-content" id="hiddenContent5">
              <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">English</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise">Neurology</p>
              <p class="con-text2">
                <img src={about} alt="About logo" /> About
              </p>
              <p class="con-text3 about">
                Dr. Samuel Brown is a dedicated neurologist specializing in...
              </p>
            </div> */}
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent5')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment" style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : null}
        {selectedValue?.label === "Psychiatrist" ||
        selectedValue?.label === "all" ? (
          <div class="profile-card" id="doctor6">
            <div class="profile-header" onclick="toggleCard('doctor6')">
              <img src={doc} alt="Doctor Avatar" class="avatar" />
              <h3 class="profile-title">Dr. Sophia White</h3>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
            </div>
            <div class="profile-content">
              <p class="con-text2">
                <img src={specialization} alt="specialization logo" />{" "}
                Specialization
              </p>
              <p class="con-text3 specialization">Psychiatrist</p>
              <p class="con-text2">
                <img src={time} alt="Availability logo" />
                Availability
              </p>
              <p class="con-text3 availability">Available on Tue, Fri, Sat</p>
            </div>
            {/* <div class="hidden-content" id="hiddenContent6">
              <p class="con-text2">
                <img src={language} alt="language logo" /> Language
              </p>
              <p class="con-text3 language">Langish</p>
              <p class="con-text2">
                <img src={expertise} alt="experience logo" /> Expertise
              </p>
              <p class="con-text3 expertise">Expehiatry</p>
              <p class="con-text2">
                <img src={about} alt="About logo" />
                About
              </p>
              <p class="con-text3 about">
                AbouSophia White is a compassionate psychiatrist with expertise
                in...
              </p>
            </div> */}
            <div class="button-container">
              {/* <div
                class="show-hide-btn"
                onclick="toggleHiddenContent('hiddenContent6')"
              >
                Show More
              </div> */}
              <div class="action-btn">
                <Link to="/payment" style={{textDecoration:'none',color:'#FFFFFF'}}>Book</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <br/>
      <br/>
    </>
  );
};
