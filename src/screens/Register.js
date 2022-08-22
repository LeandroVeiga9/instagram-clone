import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="nome"
        style={styles.input}
        autoFocus={true}
        value={user.name}
        onChangeText={name => setUser({ ...user, name })}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        keyboardType="email-address"
        value={user.email}
        onChangeText={email => setUser({ ...user, email })}
      />
      <TextInput
        placeholder="senha"
        style={styles.input}
        secureTextEntry={true}
        value={user.password}
        onChangeText={password => setUser({ ...user, password })}
      />
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15
  }
})
