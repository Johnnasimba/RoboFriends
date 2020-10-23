import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots, setSearchField } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: ()=> dispatch(requestRobots())
    }
}

function App (props) {
    const { searchField, handleChange, robots, isPending, onRequestRobots } = props;

    useEffect(() => {
        onRequestRobots()      
    }, [])
    
    const filteredRobots =  robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase()); 
    })
   
        return (
        isPending ?<div>Loading</div>:
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