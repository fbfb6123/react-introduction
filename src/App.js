import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
/*import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';*/


//Appのコンポーネント
class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Memo</h1>
                <AddForm />
                <hr />
                <table><tbody><tr>
                    {/*<td style={this.td}><FindForm /></td>
                    <td style={this.td}><DelForm /></td>*/}
                </tr></tbody></table>
                <Memo />
            </div>
        );
    }
}

export default connect() (App);

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
