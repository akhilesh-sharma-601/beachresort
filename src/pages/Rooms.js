import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      
    </>
  );
};

export default Rooms;
