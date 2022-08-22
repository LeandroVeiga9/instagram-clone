import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const login = () => {
    props.navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="email" 
        autoFocus={true} 
        keyboardType='email-address'
        value={user.email}
        onChangeText={email => setUser({...user, email})}
      />
      <TextInput 
        style={styles.input} 
        placeholder="senha" 
        secureTextEntry={true}
        value={user.password}
        onChangeText={password => setUser({...user, password})}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={styles.button}>
      <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  }
})