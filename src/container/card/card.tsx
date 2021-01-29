import React from "react";
import "./cardStyle.scss";

const Card = () => {
  return (
    <div className="artBoard">
      <div className="card">
        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Skill Set</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessor</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <p className="card__subject">Web Developer</p>
              <p className="card__title">Hello World!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
