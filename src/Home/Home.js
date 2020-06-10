import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {number:0};
        this.increaseNumber = this.increaseNumber.bind(this);
    }
    increaseNumber() {
        this.setState({number:this.state.number+1});
    }
    render() {
        return (
            <div className='home'>
                <h1>{this.props.appname}</h1>
                <p>{this.state.number}</p>
                <button onClick={this.increaseNumber}>Klikk her for å øke nummer</button>
                <button onClick={()=>this.props.setAppname('New league')}>Change app name</button>
            </div>
        );
    }
}

export default Home;