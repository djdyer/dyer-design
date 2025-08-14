import React from "react";

export default function Resume() {
  const resumeBtn = require("../../assets/resume/resume_button3.png");
  const pepperSquare = require("../../assets/images/logos/pepper_square.png");
  const fiveThirty = require("../../assets/images/logos/530.png");
  const oaklandish = require("../../assets/images/logos/oaklandish.png");
  const theHundreds = require("../../assets/images/logos/thehundreds.png");
  const prestige = require("../../assets/images/logos/prestige_logo.png");
  const responseMedia = require("../../assets/images/logos/response_media.jpg");

  const flyApp = require("../../assets/images/logos/fly_icons_logo.png");

  return (
    <div id="resume-page">
      <section id="resume-experience">
        <div className="centerTitle">
          <h1>EXPERIENCE</h1>
          <a
            href="https://drive.google.com/file/d/1lZaU6OwGeTKj1H3leVrHYWPGkaZi0L6O/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img className="resumeBtn" src={resumeBtn} alt="Download Resume" />
          </a>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={flyApp} alt="Response Media Logo" />
            <div className="title-year">
              <h2>CO-FOUNDER / DESIGNER / DEVELOPER // FLY APP</h2>
              <h4>2020-PRESENT</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Startup co-founder of patent-pending web and mobile
                    application to innovate the private charter air
                    travel&nbsp;industry.
                  </li>
                  <li>
                    Acting user experience and interface designer, serving as
                    development team lead and project manager.
                  </li>
                  <li>Projected deployment in Fall 2025.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img
              className="logos"
              src={responseMedia}
              alt="Response Media Logo"
            />
            <div className="title-year">
              <h2>UX DESIGNER / FRONTEND DEVELOPER // RESPONSE MEDIA</h2>
              <h4>2022-PRESENT</h4>
              <div className="bullets">
                <ul>
                  <li>
                    Designed and developed new company website and brand
                    identity, including content inventory&nbsp;overhaul.
                  </li>
                  <li>
                    Representing Fortune 500 clientele to develop and deploy
                    landing pages, microsites, and form funnels for
                    lead&nbsp;collection.
                  </li>
                  <li>
                    Working in tandem with design and development teams to
                    produce and QA dynamic and interactive email
                    marketing&nbsp;campaigns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img
              className="logos"
              src={pepperSquare}
              alt="Pepper Square Logo"
            />
            <div className="title-year">
              <h2>UX/UI DESIGN INTERN // PEPPER SQUARE</h2>
              <h4>2021</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Developed proposals for both web and mobile applications to
                    a range of in-house and client-side&nbsp;projects.
                  </li>
                  <li>
                    Crafted prototype demos presenting user flow and micro
                    interactions, provided illustrations to support blog
                    articles and case study&nbsp;content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={fiveThirty} alt="530 Media Lab Logo" />
            <div className="title-year">
              <h2>FREELANCE UX DESIGNER // 530&nbsp;MEDIA&nbsp;LAB</h2>
              <h4>2020-2021</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Designed the Color Selector & Profile Selector mobile
                    applications for Vinyl Visions; a leading supplier of vinyl
                    door and window&nbsp;trim.
                  </li>
                  <li>
                    Eliminated need to manufacture and distribute annual swatch
                    booklets and product&nbsp;catalogs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={oaklandish} alt="Oaklandish Logo" />
            <div className="title-year">
              <h2>ECOMMERCE OPERATIONS MANAGER // OAKLANDISH</h2>
              <h4>2018-2020</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Directed enhanced eCommerce operations for leading Bay-Area
                    apparel brand, housing up to seven sub-label or third-party
                    product&nbsp;lines.
                  </li>
                  <li>
                    Published and merchandised all product, handling
                    fulfillment, logistics, and CRM through a streamlined,
                    omni-channel&nbsp;approach.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img className="logos" src={theHundreds} alt="The Hundreds Logo" />
            <div className="title-year">
              <h2>E-COMMERCE SALES MANAGER // THE&nbsp;HUNDREDS</h2>
              <h4>2009-2017</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Spearheaded online sales activity, publishing all
                    collections in tandem with launch and analysis of digital
                    marketing&nbsp;campaigns.
                  </li>
                  <li>
                    Hired, trained, and managed team of up to a dozen team
                    members, while scaling processing yield nearly&nbsp;400%.
                  </li>
                  <li>
                    Executed dashboard migrations, platform integrations, and
                    site redesigns, serving as executive liaison to
                    third-party&nbsp;developers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="flexwork">
            <img
              className="logos"
              src={prestige}
              alt="Prestige Music Group Logo"
            />
            <div className="title-year">
              <h2>
                CO-FOUNDER / CREATIVE DIRECTOR // PRESTIGE&nbsp;MUSIC&nbsp;GROUP
              </h2>
              <h4>2007-Present</h4>

              <div className="bullets">
                <ul>
                  <li>
                    Impassioned director of established record label featuring
                    music catalogs available in both digital and
                    physical&nbsp;formats.
                  </li>
                  <li>
                    Established web presence across key platforms, coupled with
                    a comprehensive rebranding&nbsp;initiative.
                  </li>
                  <li>
                    Launched partnership with Triple Vision Record
                    Distribution--Rotterdam, to break into European&nbsp;market.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- All Tools Table --> */}
      <section id="resume-tools">
        <div className="centerTitle">
          <h1>TOOLS</h1>
        </div>
        <table>
          <thead>
            <tr id="tableheader">
              <th>WEB DEV</th>
              <th>DESIGN</th>
              <th>ECOMM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML5 / CSS3</td>
              <td>Figma</td>
              <td>Magento 2.0</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>XD</td>
              <td>Shopify Plus</td>
            </tr>
            <tr>
              <td>Node</td>
              <td>Illustrator</td>
              <td>Wix</td>
            </tr>
            <tr>
              <td>Express</td>
              <td>Photoshop</td>
              <td>Squarespace</td>
            </tr>
            <tr>
              <td>MongoDB</td>
              <td>Procreate</td>
              <td>Wordpress</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Premier Pro</td>
              <td>Full Circle</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>After Effects</td>
              <td>HubSpot</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
