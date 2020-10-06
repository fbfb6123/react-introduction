import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'James'
        }
    }
    render() {
        const name = this.state.name;
        
        return (
            <h1>Hello, {name}.</h1>
        );
    }
}