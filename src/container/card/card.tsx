import React from "react";
import "./cardStyle.scss";

const Card = (props: any) => {
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
              {props.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="card__go">
            <button>Go to component and code</button>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <p className="card__subject">Youssef Pasha</p>
              <p className="card__title">{props.cmpName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
