import React, { Component } from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';

//複数コンポーネント
class App extends Component {
    data = [
        "This is list sample.",
        "これはリストのサンプルです",
        "配列をリストに変換します"
    ];

    msgStyle = {
        fontSize:"20pt",
        color:"#900",
        margin:"20px 0px",
        padding: "5px",
    }

    constructor(props) {
        super(props);
        this.state = {
            list:this.data
        };
    }



    render() {
        return <div>
            <h1>React</h1>
            <h2 style={this.msgStyle}>show rect.</h2>
            <List title="サンプルリスト"　data={this.data} />
            </div>;
    }
}

class List extends Component {
    number = 1;

    title = {
        fontSize:"20pt",
        fontWeight:"bold",
        color:"blue",
    };

    render() {
        let data = this.props.data;
        return (
            <div>
                <p style={this.title}>{this.props.title}</p>
                  <ul>
                      {data.map((item)=>
                        <Item number={this.number++} value={item}
                          key={this.number} />
                          )}
                  </ul>
            </div>
        );
    }
}

class Item extends Component {
    li = {
        listStyleType:"square",
        fontSize:"16pt",
        color:"#06",
        margin:"0px",
        padding: "0px",
    }
    num = {
        fontWeight:"bold",
        color:"red"
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
