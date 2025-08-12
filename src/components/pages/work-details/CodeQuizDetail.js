import React from "react";

export default function Work() {
  const github = require("../../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-entry-page">
      <section className="work-grid">
        <article className="work7">
          <div className="label">
            <a
              href="https://github.com/djdyer/code-quiz"
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
              href="https://djdyer.github.io/code-quiz/"
              target="_blank"
              rel="noreferrer"
              alt="Code Quiz"
            >
              <h3>CODE QUIZ</h3>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
