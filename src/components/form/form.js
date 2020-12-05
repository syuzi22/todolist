import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions.js'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.addTodo(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

// const mapStateToProps =

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addTodo(value))
    }
}

export default connect(null, mapDispatchToProps)(Form);