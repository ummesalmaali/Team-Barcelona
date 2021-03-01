import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck ,faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import './Athlete.css'

const Athlete = (props) => {
    console.log(props);
    const {name,image,status,salary} = props.player
    return (
        <div className="player">
            <div>
            <img src={image} alt=""/>
            </div>
            <div>
            <h3 className="player-name"> <FontAwesomeIcon style={{color:"grey"}} icon={faUserPlus} /> Player Name:{name}</h3>
            <h4>Position: {status}</h4>
            <h3>Salary: $ {salary}</h3>
            
            <button className="player-button"
              onClick={() =>props.handleAddPlayer(props.player)}
             >
                <FontAwesomeIcon style={{color:"white"}} icon={faPlus} /> Select Player</button>

            </div>
        </div>
    );
};

export default Athlete;