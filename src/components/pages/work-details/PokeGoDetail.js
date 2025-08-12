import React from "react";

export default function Work() {
  const github = require("../../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-entry-page">
      <section className="work-grid">
        <article className="work6">
          <div className="label">
            <a
              href="https://www.github.com/djdyer/pokego-weather-companion"
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
              href="http://djdyer.github.io/pokego-weather-companion"
              target="_blank"
              rel="noreferrer"
              alt="PokeGo Weather Companion"
            >
              <h3>POKEGO</h3>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
