import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UsersProvider } from "./context/UsersContext";

// Views
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
// import { Button, Icon } from "@rneui/base";
import { Button, Icon } from "@rneui/themed";

const Stack = createNativeStackNavigator();

const App = (props) => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Lista de Usuários",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ headerTitle: "Formulário" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
