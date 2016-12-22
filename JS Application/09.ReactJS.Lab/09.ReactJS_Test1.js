let s = [1,234,654,765,8,5675,8];
let a =<div>
    <ul>{s.map(e => <li>{e}</li>)}</ul>
    <p>Ahh, {s + 1}</p>
</div>;
ReactDOM.render(
    a,
    document.getElementById('app')
);