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

    // const individualSalary = cart.reduce((name,player) =>name+ player.salary,[])
    // const playerImage = cart.reduce((name,player)=>name+ player.image,[])
    
    return (
        <div className="summary-container">
            <h3 style={{color:'blue'}}>The Final Squad</h3>
            <h4><FontAwesomeIcon style={{ color: "green" }} icon={faUserCheck} />Player Selected:{cart.length}</h4>
            {
                cart.map(player => <h3>Selected Players: {player.name}</h3>)
            }
            {
                cart.map(player => <h3>Individual Salary:{player.salary}</h3>)
            }
                        <h3><FontAwesomeIcon style={{ color: "grey" }} icon={faDollarSign} />Total Budget: ${totalSalary}</h3>
            {
                cart.map(player => <img src={player.image}></img> )
            }
            
            
        </div>
    );
};

export default Cart;