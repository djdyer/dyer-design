import React from "react";
import { Link } from "react-router-dom";

export default function Work() {
  const github = require("../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../assets/images/social-icons/github_hover.png");

  return (
    <div id="work-page">
      <section className="work-grid">
        <Link to="/work/fly-app" className="cursor-pointer">
          <div className="work1 work-entry">
            <div className="label">
              <a
                href="https://github.com/djdyer/fly-app-3.0"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                href="https://flyapp.dev"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>FLY APP</h3>
              </a>
            </div>
          </div>
        </Link>

        <Link to="/work/response-media" className="cursor-pointer">
          <div className="work2 work-entry">
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
          </div>
        </Link>

        <Link to="/work/my-school" className="cursor-pointer">
          <div className="work3 work-entry">
            <div className="label">
              <a
                href="https://github.com/djdyer/My-School"
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
                href="https://myschool-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                alt="My School"
              >
                <h3>MY SCHOOL</h3>
              </a>
            </div>
          </div>
        </Link>

        <Link to="/work/materials-trader" className="cursor-pointer">
          <div className="work4 work-entry">
            <div className="label">
              <a
                href="https://github.com/djdyer/materials-trader"
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
                href="http://materials-trader.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                alt="Materials Trader"
              >
                <h3>MATERIALS TRADER</h3>
              </a>
            </div>
          </div>
        </Link>

        <Link to="/work/tech-bros-blog" className="cursor-pointer">
          <div className="work5 work-entry">
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
          </div>
        </Link>

        <Link to="/work/poke-go" className="cursor-pointer">
          <div className="work6 work-entry">
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
          </div>
        </Link>

        <Link to="/work/code-quiz" className="cursor-pointer">
          <div className="work7 work-entry">
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
          </div>
        </Link>

        <Link to="/work/rain-or-shine" className="cursor-pointer">
          <div className="work8 work-entry">
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
          </div>
        </Link>
      </section>
    </div>
  );
}
