import React from 'react';
import './Match.css'

const Match = (props) =>{
    return (
        <div className = "Contact">
            <img src={props.avatar} className = "avatar"></img>
            <div>
                <p className = "name">{props.name}</p>
            <div className = "status">
                {props.online}
            </div>
            </div>
        </div>

    )
}





export default Match;