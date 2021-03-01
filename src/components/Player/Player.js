import React, { useEffect, useState } from 'react';
import fakeData from '../../data/data.json'
import Athlete from '../Athlete/Athlete';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Player.css'



const Player = () => {
    const [players,setPlayers]=useState(fakeData);
    console.log(players);
    const [cart,setCart] = useState([]);
     useEffect(()=>{
       setPlayers(fakeData);
     },[])
    const handleAddPlayer = (player) =>{
        const newCart = [...cart,player]
        setCart(newCart);
    }
    return (
        <div className="team-container">
            <div className="player-container">
        
            {
                players.map(player => <Athlete player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Athlete>)
            }
        
            </div>
            <div className="details-container">
               <Cart cart={cart}></Cart>
            </div>
            {/* <div>
            {
                cart.map(cart => <Card cart={cart} handleAddPlayer={handleAddPlayer}></Card>)
            }
            </div> */}
            
        </div>
    );
};

export default Player;