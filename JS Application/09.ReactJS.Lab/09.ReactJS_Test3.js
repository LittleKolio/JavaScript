let Counter = React.createClass({
    getInitialState: function() {
        return {
            count: Number(this.props.num),
            style: {color: 'red'},
            styleDiv: {
                background: '#ccc',
                padding: '10px',
                margin: '5px'
            }
        }
    },
    render: function() {
        return <div style={this.state.styleDiv}>
            Count: <b style={this.state.style}>
            {this.state.count}
        </b>
            <button onClick={this.increase}>[+]</button>
            <button onClick={this.decrease}>[-]</button>
            <button>[color]</button>
        </div>
    },
    increase: function() {
        this.setState({
            count: this.state.count + 1
        })
    },
    decrease: function() {
        this.setState({
            count: this.state.count - 1
        })
    }
});
ReactDOM.render(
    <div>
        <Counter num="5" />
        <Counter num="9" />
        <Counter num="3456" />
    </div>,
    document.getElementById('app')
);