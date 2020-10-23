import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(setSearchField(e.target.value))
    }
}


function App (props) {
    const [robots, setRobots] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => { setRobots(users) }); 
        
    }, [])
    
    const { searchField, handleChange } = props;
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
 
export default connect(mapStateToProps, mapDispatchToProps)(App);