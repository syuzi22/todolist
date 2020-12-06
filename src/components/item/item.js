import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../../redux/actions.js';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Item = ({item, id, removeTodo, editTodo}) => {
    const [editable, makeEditable] = useState(false);
    const [itemText, setItemText] = useState(item);
    const applyClickHandler = () => {
        makeEditable(false);
        editTodo(id, itemText);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                {
                editable ?
                <>
                    <FormControl
                        placeholder="Edit task"
                        aria-label="Edit task"
                        aria-describedby="Edit task"
                        type="text"
                        defaultValue={item}
                        onChange={(event) => setItemText(event.target.value)} autoFocus
                    >
                    </FormControl>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={applyClickHandler}>apply</Button>
                    </InputGroup.Append>
                </> :
                <>
                <InputGroup.Text style={{userSelect: 'none', width: '86%' }}>{item}</InputGroup.Text>
                <InputGroup.Append>
                        <Button variant="outline-primary" onClick={() => makeEditable(true)}>edit</Button>
                </InputGroup.Append>
                </>
                }
                <InputGroup.Append>
                    <Button variant="danger" onClick={() => removeTodo(id)}>X</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: id => dispatch(removeTodo(id)),
        editTodo: (id, text) => dispatch(editTodo(id, text)),
    };
};

export default connect(null, mapDispatchToProps)(Item);