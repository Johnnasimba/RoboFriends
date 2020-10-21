import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

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
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase()); 
        })
        return (
                robots ?
                    <div className="tc">
                        <h1 >RoboFriends </h1>
                        <SearchBox handleChange={this.handleChange} />
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>
                    </div>: (
                   <div>Loading</div>
                )
        )}
    
}
 
export default App;