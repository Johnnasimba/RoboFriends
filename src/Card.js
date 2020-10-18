import React from 'react';

const Card = () => {
    return ( 
        <div className="bg-light-green dib br3 p3 ma2 grow bw2 shadow-5">
            <div>
                <img src="https://robohash.org/test?200*200" alt="Scarest moster in the world"/>
            </div>
            <div>
                <h2>Jane Doe </h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
     );
}
 
export default Card;