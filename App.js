import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Assignment1 from "./src/screens/Assignment1";
import ListScreen from "./src/screens/ListScreen";
import listExercise from "./src/screens/listExercise";
import imageScreen from "./src/screens/imageScreen";
import Assignment from "./src/screens/imageAssignment";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/colorScreen";
import customColor from "./src/screens/customColor";
import customColors from "./src/screens/rgbUsingReducer";
// import UseTransition from "./src/screens/UseTransition";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    AssignmentTest: Assignment1,
    Lst: ListScreen,
    ListTest: listExercise,
    imgg: imageScreen,
    imgassignment: Assignment,
    count: CounterScreen,
    addcolor: ColorScreen,
    customBtn: customColor,
    reducer:customColors,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
