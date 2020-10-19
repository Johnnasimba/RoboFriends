import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            robots,
            searchField: ''
         }
    }
    handleChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }
    render() { 
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
        })
        return ( 
            <div className="tc">
                <h1 >RoboFriends </h1>
                <SearchBox handleChange={this.handleChange} />
                <CardList robots={filteredRobots}  />
            </div>
         );
    }
}
 
export default App;