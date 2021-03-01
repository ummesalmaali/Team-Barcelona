import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faPlus,
  faUserPlus,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    const totalSalary = cart.reduce((total,player) => total +player.salary,0)
    const addedPlayer = cart.reduce((name,player)=>name+player.name,[])
    const individualSalary = cart.reduce((name,player) =>name+ player.salary,[])
    const playerImage = cart.reduce((name,player)=>name+ player.image,[])
    return (
        <div className="summary-container">
            <h3 style={{color:'violet'}}>The Final Squad</h3>
            <h4><FontAwesomeIcon style={{ color: "green" }} icon={faUserCheck} />Player Added:{cart.length}</h4>
            <h3>Selected Players:{addedPlayer}</h3>
           <h4>Salary of Selected Players: {individualSalary}</h4>
            <h3><FontAwesomeIcon style={{ color: "grey" }} icon={faDollarSign} />Total Budget: ${totalSalary}</h3>
            <img src={playerImage} alt=""/>
            
        </div>
    );
};

export default Cart;