import './app.css';
import Item from '../item';
import Form from '../form';
import { connect } from 'react-redux';

function App({todos}) {
  return (
    <>
    <h1>TODO List</h1>
    <Form />
    <div>
      {todos.map(todo => <Item key={todo[0]} id={todo[0]} item={todo[1]} />)}
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return ({
    todos: Object.entries(state)
  });
}

// const mapDispatchToProps =

export default connect(mapStateToProps)(App);
