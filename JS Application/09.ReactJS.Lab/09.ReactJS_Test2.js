class Per extends React.Component {
    constructor() {
        super();
        this.nane = 'fffff';
    }
    render() {
        return (
            <div>
                <p>{this.props.name} said {this.nane}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
}

let Nav = React.createClass ({
    render: function() {
        return (
            <div>
                <a href="#">home</a>
                <a href="#">login</a>
                <a href="#">logout</a>
            </div>
        )
    }
});

class Foo extends React.Component {
    render() {
        return (
            <div id="footer">
                (c) ldifgvm j;ot jym;owtrij
            </div>
        )
    }
}

let app =
    <div>
        <Nav/>
        <Per name="Kkoko" age="-3425"/>
        <Per name="pvotrh," age="3425"/>
        <Per name="_|_"/>
        <Foo/>
    </div>;

ReactDOM.render(
    app,
    $('#app')[0]
);