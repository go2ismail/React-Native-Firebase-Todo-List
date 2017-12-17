import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.todoCreate()}
          rightTitle="Add"
          key="todoList"
          component={TodoList}
          title="Todos"
          initial
        />
        <Scene key="todoCreate" component={TodoCreate} title="Create Todo" />
        <Scene key="todoEdit" component={TodoEdit} title="Edit Todo" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
