import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../theme/ApplicationStyles';
import LaunchScreen from '../modules/LaunchScreen';
import TodoScreen from '../modules/todos/TodoScreen';

const AppNavigator = createStackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen,
      navigationOptions: {
        title: 'Redux',
        headerStyle: styles.headerStyles,
        headerTitleStyle: styles.label,
      },
    },
    TodoScreen: {
      screen: TodoScreen,
      navigationOptions: {
        headerStyle: styles.headerStyles,
        headerTintColor: '#ffffff',
      },
    },
  },
  {
    initialRouteName: 'LaunchScreen',
  },
);

export default createAppContainer(AppNavigator);
