import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

function App () {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => { setRobots(users) }); 
    }, [])
    
    function handleChange (e) {
        setSearchField(e.target.value );
    }
    const filteredRobots =  robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase()); 
        })
        return (
        !robots.length ?<div>Loading</div>:
            (
                <div className="tc">
                <h1 >RoboFriends </h1>
                <SearchBox handleChange={handleChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
            )
        )
}
 
export default App;