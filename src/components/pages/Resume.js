import React from "react";

export default function Resume() {
  const resumeBtn = require("../../assets/resume/resume_button3.png");
  const pepperSquare = require("../../assets/images/logos/pepper_square.png");
  const fiveThirty = require("../../assets/images/logos/530.png");
  const oaklandish = require("../../assets/images/logos/oaklandish.png");
  const theHundreds = require("../../assets/images/logos/thehundreds.png");
  const prestige = require("../../assets/images/logos/prestige_logo.png");

  return (
    <div id="resume-page">
      <section id="resume-experience">
        <div className="centerTitle">
          <h1>EXPERIENCE</h1>
          <a
            href="https://drive.google.com/file/d/1kmmjf-HuqfVJr5-kVEHmw1JV9mFzlbpd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img className="resumeBtn" src={resumeBtn} alt="Download Resume" />
          </a>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img
              className="logos"
              src={pepperSquare}
              alt="Pepper Square Logo"
            />
            <div>
              <h2>UX/UI DESIGN INTERN // PEPPER SQUARE</h2>
              <h4>2021</h4>
            </div>
          </div>
          <div className="bullets">
            <ul>
              <li>
                Developed web and mobile screens for a range of in-house and
                client side&nbsp;projects.
              </li>
              <li>
                Created prototype demos to present user flow, featuring device
                mocks and micro&#8209;interactions.
              </li>
              <li>
                Contributed multiple illustrations to support blog article
                content in visual&nbsp;design.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={fiveThirty} alt="530 Media Lab Logo" />
            <div>
              <h2>FREELANCE UX DESIGNER // 530&nbsp;MEDIA&nbsp;LAB</h2>
              <h4>2020-2021</h4>
            </div>
          </div>

          <div className="bullets">
            <ul>
              <li>
                Led mobile application UX Design from concept to&nbsp;prototype.
              </li>
              <li>
                Produced the Color Selector and Profile Selector mobile
                applications --c/o Vinyl Visions; a leading supplier of vinyl
                door and window&nbsp;trim.
              </li>
              <li>
                Delivered fully narrated product demos to technical, business,
                and creative stakeholders showcasing functionality
                and&nbsp;value.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={oaklandish} alt="Oaklandish Logo" />
            <div>
              <h2>ECOMMERCE OPERATIONS MANAGER // OAKLANDISH</h2>
              <h4>2018-2020</h4>
            </div>
          </div>

          <div className="bullets">
            <ul>
              <li>
                Directed enhanced end-to-end eCommerce operations for prominent,
                Bay-Area apparel brand housing up to 7 sub-label or 3PL product
                lines,&nbsp;simultaneously.
              </li>
              <li>
                Independently published/merchandised all web shops, handling
                fulfillment, logistics, and CRM for each brand through a
                streamlined, omni-channel&nbsp;approach.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={theHundreds} alt="The Hundreds Logo" />
            <div>
              <h2>E-COMMERCE SALES MANAGER // THE&nbsp;HUNDREDS</h2>
              <h4>2009-2017</h4>
            </div>
          </div>
          <div className="bullets">
            <ul>
              <li>
                Effectively spearheaded online sales activity for this
                quintessential, lifestyle-apparel brand; publishing all
                collections/collaborations, in tandem with the launch and
                analysis of digital marketing&nbsp;campaigns.
              </li>
              <li>
                Hired, trained, and managed team up to one dozen, while scaling
                processing yield nearly&nbsp;400%
              </li>
              <li>
                Successfully executed multiple dashboard migrations, platform
                integrations, and website redesigns; serving as liaison to
                third-party development&nbsp;agencies.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img
              className="logos"
              src={prestige}
              alt="Prestige Music Group Logo"
            />
            <div>
              <h2>
                CO-FOUNDER / CREATIVE DIRECTOR // PRESTIGE&nbsp;MUSIC&nbsp;GROUP
              </h2>
              <h4>2007-Present</h4>
            </div>
          </div>
          <div className="bullets">
            <ul>
              <li>
                Impassioned director of established record label featuring music
                catalogs available in both digital and physical formats.
              </li>
              <li>
                Established web presence across key platforms, coupled with a
                comprehensive rebranding initiative.
              </li>
              <li>
                Launched partnership with Triple Vision Record
                Distribution--Rotterdam, to break into European market.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- All Tools Table --> */}
      <section id="resume-tools">
        <div className="centerTitle">
          <h1>TOOLS</h1>
        </div>
        <br />
        <br />
        <table>
          <thead>
            <tr id="tableheader">
              <th>ECOMM</th>
              <th>DESIGN</th>
              <th>WEB DEV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Magento 2.0</td>
              <td>Figma</td>
              <td>HTML5/CSS3</td>
            </tr>
            <tr>
              <td>Shopify Plus</td>
              <td>XD</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>Wix</td>
              <td>Illustrator</td>
              <td>Node</td>
            </tr>
            <tr>
              <td>Squarespace</td>
              <td>Procreate</td>
              <td>Express</td>
            </tr>
            <tr>
              <td>Wordpress</td>
              <td>Premier Pro</td>
              <td>MongoDB</td>
            </tr>
            <tr>
              <td>Full Circle</td>
              <td>Sketch</td>
              <td>React</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
