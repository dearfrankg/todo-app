import React from 'react';
import { PropTypes } from 'prop-types';
import * as actions from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EntryForm extends React.Component {
  state = {
    entry: '',
  };

  onChange = evt => {
    this.setState({ entry: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    if (!this.state.entry) return;
    this.props.actions.addTodo({ title: this.state.entry });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.entry}
          placeholder="add a todo"
        />
      </form>
    );
  }
}

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo.title}
      </li>
    ))}
  </ul>
);

const App = ({ todos, actions }) => {
  console.log('todos, actions: ', todos, actions);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <EntryForm actions={actions} />
      <TodoList todos={todos} />
    </div>
  );
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
