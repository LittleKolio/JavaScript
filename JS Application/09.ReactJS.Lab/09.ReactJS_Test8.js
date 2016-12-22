class Header extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <h1>It's {this.props.name2}!</h1>
        )
    }
}

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name1: 'Kele6'}
    }
    render() {
        setTimeout(() => {
            this.setState({name1: 'Carvul'})
        },2000);
        return (
            <div>
                <Header name2={this.state.name1}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Layout/>,
    document.getElementById('app')
);