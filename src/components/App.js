import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';


const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};


export default App;
