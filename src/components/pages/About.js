import React from "react";

export default function About() {
  const headshot = require("../../assets/resume/casual_headshot.jpg");

  const gaTech = require("../../assets/images/logos/ga_tech.png");
  const ucb = require("../../assets/images/logos/berkeley.png");
  const ucf = require("../../assets/images/logos/ucf.png");
  const valencia = require("../../assets/images/logos/valencia.png");

  return (
    <div id="about-page">
      <section className="flexprofile">
        <img id="headshot" src={headshot} alt="Headshot" />
        <div id="profile-content">
          <p className="bio">
            Hello! My name is David Dyer. I am an artist, web developer, UX
            Designer, and eCommerce professional. Not only that, a skateboarding
            coach and DJ! After growing up in Baton Rouge, I graduated from the
            UCF College of Business Administration, and eventually moved out
            west to earn my stripes. I've worked hard managing eComm Ops teams
            for The Hundreds in LA, and Oaklandish in The Bay Area. Now residing
            in ATL, I have up-skilled my way to certification in User Experience
            Design via UCB, and Full Stack Web Development bootcamp with GATech.
            Now I'm working with Response Media, a full-service marketing
            agency, and fill my spare time with Fly App (travel start up) and
            Prestige Music (record label). Coming to you now with a passion,
            lots of experience under my belt, ready to build something cool.
          </p>

          {/* <!-- All Education --> */}
          <div className="education-header">
            <h1>EDUCATION</h1>
          </div>
          <div id="resume-education">
            <div className="flexgrid">
              <div className="flexschool">
                <img className="logos" src={gaTech} alt="GA Tech Logo" />
                <div className="school-degree">
                  <h2>GA INSTITUTE OF TECHNOLOGY</h2>
                  <h4>2022</h4>
                  <h5>Full Stack Web Dev The Bootcamp Spot</h5>
                </div>
              </div>

              <div className="flexschool">
                <img className="logos" src={ucb} alt="UCBerkeley Logo" />
                <div className="school-degree">
                  <h2>UC BERKELEY EXT.</h2>
                  <h4>2020</h4>
                  <h5>Professional Certification in UX&nbsp;Design</h5>
                </div>
              </div>

              <div className="flexschool">
                <img className="logos" src={ucf} alt="UCF Logo" />
                <div className="school-degree">
                  <h2>UNIVERSITY OF CENTRAL FLORIDA</h2>
                  <h4>2007</h4>
                  <h5>BA Entrepreneurial Management</h5>
                </div>
              </div>

              <div className="flexschool">
                <img
                  className="logos"
                  src={valencia}
                  alt="Valencia College Logo"
                />
                <div className="school-degree">
                  <h2>VALENCIA COLLEGE</h2>
                  <h4>2004</h4>
                  <h5>AA / Digital Video Production</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
