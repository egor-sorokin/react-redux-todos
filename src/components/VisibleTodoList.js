import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';


const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all'),
});

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
