// App.js
import React from "react";
import { StyleSheet } from "react-native"; // Add this import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HospitalListScreen from "./screens/HospitalListScreen";
import HospitalDetailScreen from "./screens/HospitalDetailScreen";
import AppointmentScreen from "./screens/AppointmentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  //console.log("App Executed");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Hospitals" component={HospitalListScreen} />
        <Stack.Screen name="HospitalDetail" component={HospitalDetailScreen} />
        // <Stack.Screen name="Appointment" component={AppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <div>
  //     <h1>Hello World!</h1>
  //   </div>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
