import React from "react";

export default function Work() {
  const github = require("../../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../../assets/images/social-icons/github_hover.png");

  // const mockOne = require("blob:https://dash.cloudflare.com/6d1ee5d8-a3b8-4950-8987-d33b2d43182e");

  return (
    <div id="work-entry-page">
      <section>
        <div>
          {/* <img alt="mock up" className="" src={mockOne} /> */}

          {/* <div>
            <a
              href="https://github.com/djdyer/fly-app-3.0"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Git Hub Icon"
                className="git_link default"
                src={github}
              />
              <img
                alt="Git Hub Icon Hover"
                className="git_link hover"
                src={githubHover}
              />
            </a>
            <a
              href="https://fly-app-3-0.vercel.app/"
              target="_blank"
              rel="noreferrer"
              alt="Fly App"
            >
              <h3>FLY APP</h3>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
