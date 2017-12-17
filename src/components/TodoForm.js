import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { todoUpdate } from '../actions';
import { CardSection, Input } from './common';

class TodoForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Todo"
            placeholder="Todo Item"
            value={this.props.todoitem}
            onChangeText={value => this.props.todoUpdate({ prop: 'todoitem', value })}
          />
        </CardSection>

        
      </View>
    );
  }
}



const mapStateToProps = (state) => {
  const { todoitem, isdone } = state.todoForm;

  return { todoitem, isdone };
};

export default connect(mapStateToProps, { todoUpdate })(TodoForm);
