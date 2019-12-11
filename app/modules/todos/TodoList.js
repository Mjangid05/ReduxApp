import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../../theme/ApplicationStyles';
import {addItem, deleteItem, updateItem} from '../../redux/actions';
import TodoActions from '../../reduxSauce';

const todoItems = (item, dispatch, type) => {
  const deleteTodoItem = () => {
    dispatch(
      type === 'Redux' ? deleteItem(item) : TodoActions.deleteItem(item),
    );
  };
  const updateTodoItem = () => {
    dispatch(
      type === 'Redux' ? updateItem(item) : TodoActions.updateItem(item),
    );
  };
  return (
    <View style={styles.itemStyle}>
      <Text style={[styles.label, item.status && styles.linethrough]}>
        {item.value}
      </Text>
      <View style={styles.row}>
        <Text style={styles.remove} onPress={updateTodoItem}>
          {'Update'}
        </Text>
        <Text style={styles.remove} onPress={deleteTodoItem}>
          {'Remove'}
        </Text>
      </View>
    </View>
  );
};

const emptyItems = () => (
  <View style={styles.message}>
    <Text>{'Nothing to show!'}</Text>
  </View>
);

const TodoList = type => {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const addTodoItem = () => {
    const id = todo.length > 0 ? todo[todo.length - 1].id + 1 : 0;
    const item = {
      id: id,
      value: `Item${id}`,
      state: false,
    };
    dispatch(type === 'Redux' ? addItem(item) : TodoActions.addItem(item));
  };

  return (
    <View style={styles.centerContainer}>
      <FlatList
        style={styles.flatList}
        data={todo}
        renderItem={({item}) => todoItems(item, dispatch, type)}
        ListEmptyComponent={emptyItems}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addTodoItem}>
          <Text style={styles.label}>{'Add a item'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;
