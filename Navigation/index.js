import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icon, Thumbnail } from "native-base";

// Components
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Login">
      <Screen
        name="Login"
        component={Login}
        options={{
          title: "Welcome",
          headerStyle: {
            backgroundColor: "rgb(20,90,100)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
        }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "rgb(20,90,100)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
        }}
      />
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        options={({ navigation }) => ({
          title: "Coffee List",
          headerStyle: {
            backgroundColor: "rgb(20,90,100)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
          headerTintColor: "white",
        })}
      />
      <Screen
        name="CoffeeDetail"
        component={CoffeeDetail}
        options={({ route, navigation }) => {
          const { coffeeshop } = route.params;
          return {
            title: coffeeshop.name,
            headerStyle: {
              backgroundColor: "rgb(20,90,100)",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Icon
                name="md-cart"
                onPress={() => navigation.navigate("CoffeeCart")}
              />
            ),
            headerTintColor: "white",
          };
        }}
      />
      <Screen name="CoffeeCart" component={CoffeeCart} />
    </Navigator>
  );
}
