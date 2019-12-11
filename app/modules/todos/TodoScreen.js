import React from 'react';
import {View} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import reduxStore from '../../redux/Store';
import reduxSauceStore from '../../reduxSauce/Store';
import {Provider} from 'react-redux';
import TodoList from './TodoList';
import styles from '../../theme/ApplicationStyles';

const TodoScreen = () => {
  const type = useNavigationParam('type');
  return (
    <Provider store={type === 'Redux' ? reduxStore : reduxSauceStore}>
      <View style={styles.container}>
        <TodoList type={type} />
      </View>
    </Provider>
  );
};

export default TodoScreen;
