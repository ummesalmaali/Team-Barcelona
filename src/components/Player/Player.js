import React, { useState } from 'react';
import fakeData from '../../data/data.json'
import Athlete from '../Athlete/Athlete';
import './Player.css'



const Player = () => {
    
    const [players,setPlayers]=useState(fakeData);
    console.log(players);
    return (
        <div className="team-container">
            <div className="player-container">
        
            {
                players.map(player => <Athlete player={player}></Athlete>)
            }
        
            </div>
            <div className="details-container">
                <h3>This is  details</h3>
            </div>
            
        </div>
    );
};

export default Player;