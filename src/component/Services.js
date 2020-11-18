import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "Cocktails",
        info: "Free Cocktails for each and every guest absolutely free.",
      },
      {
        icons: <FaShuttleVan />,
        title: "Shuttle Van",
        info: "Free Transportation for guest.",
      },
      {
        icons: <FaHiking />,
        title: "Hiking",
        info: "Free Hiking for guest under specialist supervision .",
      },
      {
        icons: <FaBeer />,
        title: "Premium Beer",
        info: "Free Beer for guest of any brand twice a day",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
