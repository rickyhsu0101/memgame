import React from "react";
import './Card.css'
class Card extends React.Component{
  render() {
    return (
      <div className="card text-center">
        <div className="card-body bg-primary text-white">
          <img src = {this.props.url} onClick = {this.props.clickCard} alt="card"/>
        </div>
      </div>
    );
  }
}
export default Card;