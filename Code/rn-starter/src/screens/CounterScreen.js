import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return { ...state, currentCount: state.currentCount + action.payload };
        case 'decrease':
            return { ...state, currentCount: state.currentCount - action.payload };
        default: 
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { currentCount: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increase', payload: 1 });
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrease', payload: 1 });
            }}/>
            <Text>Current Count: {state.currentCount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
  
export default CounterScreen;