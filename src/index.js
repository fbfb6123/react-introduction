import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    //コンストラクタを追加してstateを初期化
    constructor(props) {
        //JavaScript のクラスでは、サブクラスのコンストラクタを定義する際は常に super を呼ぶ必要がある
        super(props);
            this.state = {
                value:null,
            };
        }
    render() {
        return (
            //クリックされた時に state の現在値を表示する
            <button className="square" onClick={() =>this.setState({value:'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    //Board にコンストラクタを追加し、初期 state に 9 個の null が 9 個のマス目に対応する 9 個の null 値をセット
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i) {
        //squares という配列は Board のコンストラクタで定義しているから、Board の renderSquare がそこから値を読み込む
        return <Square  value={this.state.squares[i]}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);