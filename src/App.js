import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            robots:[],
            searchField: ''
         }
    }
    handleChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => {
                this.setState({
                    robots : users
                })
        })
        
    }
    
    render() { 
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
        })
        if (this.state.robots === 0) {
            return <div>Loading</div>
        } else {
            return ( 
                <div className="tc">
                    <h1 >RoboFriends </h1>
                    <SearchBox handleChange={this.handleChange} />
                    <Scroll>
                      <CardList robots={filteredRobots}  />
                    </Scroll>                    
                </div>
             );
        }
        
    }
}
 
export default App;