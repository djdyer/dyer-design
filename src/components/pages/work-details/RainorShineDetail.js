import React from "react";

export default function Work() {
  const github = require("../../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-entry-page">
      <section className="work-grid">
        <article className="work8">
          <div className="label">
            <a
              href="https://github.com/djdyer/rain-or-shine"
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
              href="https://djdyer.github.io/rain-or-shine/"
              target="_blank"
              rel="noreferrer"
              alt="Rain or Shine"
            >
              <h3>RAIN OR SHINE</h3>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
