import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import styles from '../theme/ApplicationStyles';

const LaunchScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.centerContainer}>
      <TouchableOpacity
        style={styles.circularContainer}
        onPress={() => navigate('TodoScreen', {type: 'Redux'})}>
        <Text style={styles.label}>Redux</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circularContainer}
        onPress={() => navigate('TodoScreen', {type: 'ReduxSauce'})}>
        <Text style={styles.label}>ReduxSauce</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LaunchScreen;
