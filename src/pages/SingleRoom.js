import React, { Component } from 'react' 
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import defaultBcg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'


export default class SingleRoom extends Component {
constructor (props){
    super(props);
    //console.log(this.props);
    this.state={
        slug:this.props.match.params.slug,
        defaultBcg
    }
}
static contextType= RoomContext
//componentDidMount(){}

    render() {
        const {getRoom}= this.context
        const room= getRoom(this.state.slug)
        return (
            <div>
            <h1>single room page</h1>
            </div>
        )
    }
}
