import React from "react";

export default function Work() {
  const github = require("../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-page">
      <section className="work-grid">
        <article className="work1">
          <div className="label">
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
              alt="Progress Edit"
            >
              <h3>FLY APP</h3>
            </a>
          </div>
        </article>

        <article className="work2">
          <div className="label">
            <a
              href="https://github.com/brittney092289/miller-dyer-rm"
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
              href="https:/responsemedia.com"
              target="_blank"
              rel="noreferrer"
              alt="Materials Trader"
            >
              <h3>RESPONSE MEDIA</h3>
            </a>
          </div>
        </article>

        <article className="work3">
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

        <article className="work4">
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
