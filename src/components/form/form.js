import React from 'react';

const Form = () => {
    return (
        <form onSubmit={console.log('dfdsfds')}>
        <input type="text" />
        <button type="submit">Add</button>
        </form>
    );
}

export default Form;