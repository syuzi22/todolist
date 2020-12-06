import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../../redux/actions.js';
import { useState } from 'react';

const Item = ({item, id, removeTodo, editTodo}) => {
    const [editable, makeEditable] = useState(false);
    const [itemText, setItemText] = useState(item);
    const applyClickHandler = () => {
        makeEditable(false);
        editTodo(id, itemText);
    }

    return (
        <div>
            {
            editable ?
            <>
                <input type="text" defaultValue={item} onChange={(event) => setItemText(event.target.value)} autoFocus></input>
                <button onClick={applyClickHandler}>apply</button>
            </> :
            <>
                <span>{item}</span>
                <button onClick={() => makeEditable(true)}>edit</button>
            </>
            }
            <button onClick={() => removeTodo(id)}>X</button>
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