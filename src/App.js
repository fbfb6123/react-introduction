import React, { Component } from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';

//複数コンポーネント
class App extends Component {
    input = '';

    msgStyle = {
        fontSize:"20pt",
        color:"#900",
        margin:"20px 0px",
        padding: "5px",
    }

    inputStyle = {
        fontSize:"12pt",
        padding:"5px"
    }

    constructor(props) {
        super(props);
        this.state = {
            message:'type your name:'
        };
        this.doCheck = this.doCheck.bind(this);
    }

    doCheck(event) {
        alert(event.target.value + "は長すぎます。（最大10文字以下）");
    }


    render() {
        return <div>
            <h1>React</h1>
            <h2>{this.state.message}</h2>
            <Message maxlength="10" onCheck={this.doCheck} />
        </div>;
    }
}

class Message extends Component {
    inputStyle = {
        fontSize:"12pt",
        padding:"5px"
    }

    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e) {
        if (e.target.value.length > this.props.maxlength){
            this.props.onCheck(e);
            e.target.value =
                e.target.value.substr(0,this.props.maxlength);
        }
    }

    render() {
        return <input type="text" style={this.inputStyle}
                      onChange={this.doChange} />
    }
}

export default App;




/*//メッセージ非同期表示
import React, { Component } from 'react';

class Name extends Component {
    render () {
        const name = this.props.name;

        return (
            <span style={{color: 'red'}}>{name}</span>
        );
    }
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        const name = this.state.name;

        return (
            <div>
              <h1>Hello, <Name name={name} />!</h1>
              <input
                type="text"
                value={name}
                onChange={ e => {
                    this.setState({
                        name: e.target.value
                    })
                }}
                />
        </div>
        );
    }
}*/
