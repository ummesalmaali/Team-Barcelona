import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faPlus,
  faUserPlus,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  const totalSalary = cart.reduce((total, player) => total + player.salary, 0);

  return (
    <div className="summary-container">
      <h3 style={{ color: "violet" }}>The Final Squad</h3>
      <h4>
        <FontAwesomeIcon style={{ color: "green" }} icon={faUserCheck} />
        Player Selected:{cart.length}
      </h4>
      {cart.map((player) => (
        <h3>Selected Player: {player.name}</h3>
      ))}
      {cart.map((player) => (
        <h3 style={{color:'violet'}}>Individual Salary:{player.salary}</h3>
      ))}
      <h3 style={{color:'green'}}>
        <FontAwesomeIcon style={{ color: "grey" }} icon={faDollarSign} />
        Total Budget: ${totalSalary}
      </h3>
      {cart.map((player) => (
        <img style={{width:'250px',height:'150px'}} src={player.image}></img>
      ))}
    </div>
  );
};

export default Cart;
