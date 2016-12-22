let List = React.createClass ({
    render: function() {
        // let items = [];
        // //Each child in an array or iterator should have a unique "key" prop.
        // let count = 0;
        // for (let i of this.props.emi) {
        //     items.push(<li key={++count}>{i}</li>)
        // }
        return (<ul>{
                this.props.emi
                .map(function(e, i) {return <li key={i}>{e}</li>})
        }</ul>);
    }
});

let towns = ['sofia', 'plovdiv', 'varna'];

ReactDOM.render(
    <List emi={towns}/>,
    document.getElementById('app')
);