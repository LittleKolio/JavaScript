
let Ul = React.createClass({
    render: function() {
        console.log(this.props.data);
        return (
            <ul>{
                this.props.data
                    .map((e, i) => <li key={i}>{e}</li>)
            }</ul>
        )
    }
});

let Comp = React.createClass({
    save: function () {
        return {arr: this.towns.value.split(', ')}
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.save}>
                    <label>Towns: <input type="text"
                                         ref={e => this.towns = e}/>
                    </label>
                    <input type="submit" value="rrr"/>
                </form>
                <Ul data={this.save.arr}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Comp/>,
    document.getElementById('root')
);
