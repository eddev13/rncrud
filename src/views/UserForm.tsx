import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Digite o nome"
        value={user.name}
        style={styles.input}
      />
      <Text>Email</Text>
      <TextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Digite o email"
        value={user.email}
        style={styles.input}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="informe a URL do avatar"
        value={user.avatar}
        style={styles.input}
      />
      <Button
        title="Salvar"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text>sd {user.name}</Text>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
  },
});
