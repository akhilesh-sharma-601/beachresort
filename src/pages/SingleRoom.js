import React, { Component } from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  //componentDidMount(){}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> No such room found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {name,description,capacity,size,price,pets,extras,breakfast,images}=room
    //console.log(room)
    return (
      <div>
       <Hero hero="roomsHero"/>
       <Banner title={`${name} room`} />
       <link to ="/rooms" className="btn-primary">back
       </link>
      </div>
    );
  }
}
