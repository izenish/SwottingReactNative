import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Assignment1 from "./src/screens/Assignment1";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Components: ComponentsScreen,
  AssignmentTest:Assignment1
}, {
  initialRouteName: "AssignmentTest",
  defaultNavigationOptions: {
    title: "App"
  }
});

export default createAppContainer(navigator);