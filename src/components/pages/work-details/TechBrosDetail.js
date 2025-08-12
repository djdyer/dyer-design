import React from "react";

export default function Work() {
  const github = require("../../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-entry-page">
      <section className="work-grid">
        <article className="work5">
          <div className="label">
            <a
              href="https://www.github.com/djdyer/the-tech-bros-blog"
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
              href="https://the-tech-bros-blog.herokuapp.com"
              target="_blank"
              rel="noreferrer"
              alt="The Tech Bros Blog"
            >
              <h3>TECH BROS BLOG</h3>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
