import React, { Component } from 'react';
import Rect from './Rect';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

//ステートのマッピング
function mappingState(state) {
    return state;
}

//Appのコンポーネント
class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Redux</h1>
                <Message />
                <Button />
            </div>
        );
    }
}

//ストアのコネクト
App = connect() (App);

//メッセージの表示コンポーネント
class Message extends Component {
    style = {
        fontSize:"20pt",
        padding:"20px 5px"
    }

    render(){
        return (
            <p style={this.style}>
                {this.props.message}:{this.props.counter}
            </p>
        );
    }
}

//ストアのコネクト
//mappingStateでMessegeのコンポーネントで利用するステート(これで上のpropsの中に値が組み込まれている)
Message = connect(mappingState) (Message);

//ボタン表示のコンポーネント
class Button extends Component {
    style = {
        fontSize:"16pt",
        padding:"5px 10px"
    }

    constructor(props){
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    //ボタンクリックでディスパッチを実行
    doAction(e) {
        if (e.shiftKey) {
            this.props.dispatch({ type:'DECREMENT' });
        } else {
            this.props.dispatch ({ type:'INCREMENT' });
        }
    }

    render() {
        return (
            <button style={this.style}
                    onClick={this.doAction}>Click</button>
        );
    }
}

//ストアのコネクト
Button = connect()(Button);

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
