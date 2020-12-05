import './app.css';
import Item from '../item';
import Form from '../form';
import { connect } from 'react-redux';


function App() {
  return (
    <>
    <h1>TODO List</h1>
    <Form />
    <div>
      {/* <Item item="Buy food" />
      <Item item="Finish project" />
      <Item item="Be happy" /> */}
    </div>
    </>
  )
}

// const mapStateToProps =

// const mapDispatchToProps =

export default connect()(App);
