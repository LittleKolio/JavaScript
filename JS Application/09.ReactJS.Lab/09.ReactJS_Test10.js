class Header extends React.Component {
    changeHeader(ev) {
        let meee = ev.target.value;
        this.props.chTit(meee);
    }

    render() {
        // console.log(this.props); // Object { title2: "Kele6", chTit: bound changeTitle() }
        // this.props.chTit('Buuuuuuu');
        return (
            <div>
                <h1 className="title">It's {this.props.title2}!</h1>
                <input type="text" onChange={this.changeHeader.bind(this)}/>
            </div>
        )
    }
}

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title1: 'Kele6'}
    }

    changeTitle(ti) {
        this.setState({title1: ti})
    }
    render() {
        return (
            <div>
                <Header title2={this.state.title1}
                        chTit={this.changeTitle.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Layout/>,
    document.getElementById('app')
);