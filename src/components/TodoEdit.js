import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { todoUpdate, todoSave, todoDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class TodoEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.todo, (value, prop) => {
      this.props.todoUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { todoitem, isdone } = this.props;

    this.props.todoSave({ todoitem, isdone, uid: this.props.todo.uid });
  }

 
  onAccept() {
    const { uid } = this.props.todo;

    this.props.todoDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <TodoForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete todo?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { todoitem, isdone } = state.todoForm;

  return { todoitem, isdone };
};

export default connect(mapStateToProps, {
  todoUpdate, todoSave, todoDelete
})(TodoEdit);
