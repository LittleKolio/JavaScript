let PersonForm = React.createClass({
    getInitialState: function() {
        let name = this.props.name;
        if (name == undefined) name = "";
        let age = Number(this.props.age);
        if (Number.isNaN(age)) age = 0;
        return { name, age };
    },
    handleNameChange(event) {
        this.setState({name: event.target.value});
    },
    handleAgeChange(event) {
        let age = Number(event.target.value);
        if (Number.isNaN(age))
            age = 0;
        this.setState({ age });
    },
    handleFormSubmit(event) {
        if (this.props.onsubmit)
            this.props.onsubmit(this.state);
        event.preventDefault();
    },
    render: function() {
        return <form onSubmit={this.handleFormSubmit}>
            <label>Name:
                <input type="text" value={this.state.name}
                       onChange={this.handleNameChange} />
            </label>
            <label>Age:
                <input type="text" value={this.state.age}
                       onChange={this.handleAgeChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    }
});
ReactDOM.render(
    <div>
        <PersonForm />
        <PersonForm onsubmit={editPerson} />
        <PersonForm name="Nakov" age="20"
                    onsubmit={editPerson} />
    </div>,
    document.getElementById('app'));

function editPerson(personFormData) {
    alert(JSON.stringify(personFormData));
}
