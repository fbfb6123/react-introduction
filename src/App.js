import React, { Component } from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';

let data = {title:'Title',
         message:'this is sample message.'};

//コンテキスストの追加
const SampleContext = React.createContext(data);

class App extends Component {
    newdata = {title:'新しいタイトル',
        message:'これはプロバイダーで用意した新しいメッセージ'};

    render() {
        return (
            <div>
                <h1>Context</h1>
                <Title />
                <Message />
                <SampleContext.Provider value={this.newdata}>
                    <Title />
                    <Message />
                </SampleContext.Provider>
                <Title />
                <Message />
            </div>
        );
    }
}


class Title extends Component {
    static contextType = SampleContext;

    render() {
        return (
            <div>
                <h2>{this.context.title}</h2>
            </div>
        );
    }
}

class Message extends Component {
    static contextType = SampleContext;

    render(){
        return (
            <div>
                <p>{this.context.message}</p>
            </div>
        );
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
