import React from 'react';
import Card from './Card';

const CardList = ({ robots, handleChange}) => {
    return (
       <div>
          {
            robots.map(user => { 
                return(
                    <Card key = { user.id } id = { user.id } name = { user.name } email = { user.email } handleChange />
                );
            })
           }
        </div>
      );
}
export default CardList;