import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { todosApi } from "./features/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import ContextProvider from "./components/ContextProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApiProvider api={todosApi}>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </ApiProvider>
  );
};

export default App;
