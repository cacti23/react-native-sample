import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, value: state.value + action.payload };
    case 'decrease':
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);

  // generally it is advised to use objects with useReducer because
  // we will be trying to keep track of more that one state
  const [counter, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({ type: 'decrease', payload: 1 })}
      />

      <Text>CounterScreen : {counter.value}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
