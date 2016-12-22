let PersonForm = React.createClass({
    render: function() {
        return <form onSubmit={this.handleFormSubmit}>
            <label>Name:
                <input type="text" defaultValue={this.props.name}
                       ref={e => this.nameField = e} />
            </label>
            <label>Age:
                <input type="text" defaultValue={this.props.age}
                       ref={e => this.ageField = e} />
            </label>
            <input type="submit" />
        </form>
    },
    handleFormSubmit: function(event) {
        event.preventDefault();
        let formData = {
            name: this.nameField.value,
            age: this.ageField.value
        };
        if (this.props.onsubmit)
            this.props.onsubmit(formData);
    }
});
ReactDOM.render(
    <div>
        <PersonForm name="Dev" onsubmit={editPerson} />
        <PersonForm age="18" onsubmit={editPerson} />
        <PersonForm name="Nakov" age="20"
                    onsubmit={editPerson} />
    </div>,
    document.getElementById('app'));

function editPerson(personFormData) {
    alert(JSON.stringify(personFormData));
}
