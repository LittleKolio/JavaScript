
let Ul = React.createClass({
    render: function() {
        return (
            <ul>{
                this.props.data
                    .map((e, i) => <li key={i}>{e}</li>)
            }</ul>
        )
    }
});

let Comp = React.createClass({
    getInitialState: function() {
        return {
            townsArr: []
        }
    },
    display: function (ev) {
        ev.preventDefault();
        this.setState({townsArr: this.towns.value.split(', ')})
    },
    render: function() {
        return (
            <div>
            <form onSubmit={this.display}>
                <label>Towns: <input type="text"
                                     ref={e => this.towns = e}/>
                </label>
                <input type="submit" value="rrr"/>
            </form>
            <Ul data={this.state.townsArr}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Comp/>,
    document.getElementById('root')
);
