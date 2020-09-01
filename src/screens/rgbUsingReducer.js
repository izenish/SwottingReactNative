import React, { useReducer } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import ColorComponent from "../components/rgb";

const reducer = (state, action) => {
  //state==={red:0,green:number,blue:number};
  //action==={colorToChange:"red"||"blue"||"green"}
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
};
const customColors = function () {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorComponent
        color="Red"
        onIncrement={() => runMyReducer({ colorToChange: "red", amount: 10 })}
        onDecrement={() => runMyReducer({ colorToChange: "red", amount: -10 })}
      />
      <ColorComponent
        color="Green"
        onIncrement={() => runMyReducer({ colorToChange: "green", amount: 10 })}
        onDecrement={() =>
          runMyReducer({ colorToChange: "green", amount: -10 })
        }
      />
      <ColorComponent
        color="Blue"
        onIncrement={() => runMyReducer({ colorToChange: "blue", amount: 10 })}
        onDecrement={() => runMyReducer({ colorToChange: "blue", amount: -10 })}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default customColors;
