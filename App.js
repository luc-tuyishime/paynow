/**
 * App.js
 *
 * Root component of the app,
 * responsible for setting up routes.
 *
 */

// Libs
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Components
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
 */
const Navigator = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile }
    },
    {
        defaultNavigationOptions: {
            title: "Centered",
            headerTitleAlign: "center"
        }
    }
);

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
 */
const App = createAppContainer(Navigator);

export default App;
