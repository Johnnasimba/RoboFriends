 import React from 'react';

const Card = ({id, name, email}) => {
    return ( 
        <div className="bg-light-green dib br3 p3 ma2 grow bw2 shadow-5">
            <div>
                <img src={`https://robohash.org/${id}`} alt="Scarest moster in the world"/>
            </div>
            <div className="tc">
                <h2 >{name} </h2>
                <p>{email}</p>
            </div>
        </div>
     );
}
 
export default Card;