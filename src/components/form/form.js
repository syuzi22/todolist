import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions.js'

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add task"
                            aria-label="Add task"
                            aria-describedby="Add task"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            required
                        />
                        <InputGroup.Append>
                            <Button variant="primary" type="submit">Add</Button>
                        </InputGroup.Append>
                </InputGroup>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addTodo(value))
    }
}

export default connect(null, mapDispatchToProps)(Form);