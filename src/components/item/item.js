import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../redux/actions.js';

const Item = ({item, id, removeTodo}) => {
    return (
        <div>
            <span>{item}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: id => dispatch(removeTodo(id))
    };
};

export default connect(null, mapDispatchToProps)(Item);