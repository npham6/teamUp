import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Artboard from "./src/screens/Artboard";
import Home from "./src/screens/Home";
import Untitled from "./src/screens/Untitled";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Artboard: {
    screen: Artboard
  },
  Home: {
    screen: Home
  },
  Untitled: {
    screen: Untitled
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Artboard: {
      screen: Artboard
    },
    Home: {
      screen: Home
    },
    Untitled: {
      screen: Untitled
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Roboto-Medium": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Phosphate-Inline": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Phosphate-Solid": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
