import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../view/WelcomeScreen";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
import FPasswordCode from "../view/auth/ForgotPasswordCode";
import FPasswordEmail from "../view/auth/ForgotPasswordEmail";
import FPasswordNew from "../view/auth/ForgotPasswordNewPassword";
import EventDetails from "../view/event/EventDetails";
import MapSelect from "../view/maps/MapSelect";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SplashScreen" component={Splashscreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="FPasswordCode" component={FPasswordCode} />
    <Stack.Screen name="FPasswordEmail" component={FPasswordEmail} />
    <Stack.Screen name="FPasswordNew" component={FPasswordNew} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="MapSelect" component={MapSelect} />
  </Stack.Navigator>
);
