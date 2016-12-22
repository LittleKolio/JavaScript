let Table = React.createClass ({
    delete: function() {
        return this.props.del();
    },
    render: function() {
        let comp = this;
        let head = this.props.col.map(function(e, i) {
                return <th key={i}>[{e}]</th>
            });
        let r = this.props.row.map(function(e, i) {
            return <tr key={i}>{e.map(function(x, y) {
                return <td key={y}>{x}</td>
            })}
            <td><button onClick={comp.delete}>[Del]</button></td>
            </tr>
        });
        return (
            <table>
                <thead><tr>{head}<th>Action</th></tr></thead>
                <tbody>{r}</tbody>
            </table>
        )
    }
});

let columns = ['name', 'age'];
let rows = [['maleee', 13], ['asfasdf', 67], ['rrttr', -3425]];

ReactDOM.render(
    <Table col={columns} row={rows} del={delFunc}/>,
    document.getElementById('app')
);

function delFunc() {
    alert('delete click');
}