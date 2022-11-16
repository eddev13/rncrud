import React, { useContext } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import UsersContext from "../context/UsersContext";
// import users from "../data/users";

const UserList = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  const confirmUserDeletion = (user) => {
    // console.warn(Object.keys(user));
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário", [
      {
        text: "Sim",
        onPress() {
          alert(Object.keys(user));
          dispatch({
            type: "deleteUser",
            payload: user,
          });
        },
      },
      { text: "Não" },
    ]);
  };

  const getActions = (user) => (
    <>
      <Icon
        name="edit"
        color="#2d2d2d"
        onPress={() => props.navigation.navigate("UserForm", user)}
        style={{ marginRight: 20 }}
      />

      <Icon
        name="delete"
        color="#f2521b"
        onPress={(user) => {
          confirmUserDeletion(user);
        }}
      />
    </>
  );

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem onPress={() => props.navigation.navigate("UserForm", user)}>
        <Avatar source={{ uri: user.avatar }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(users) => users.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  user: {
    marginTop: 200,
  },
});
