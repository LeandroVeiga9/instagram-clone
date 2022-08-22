import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Gravatar } from "react-native-gravatar";
import { logout } from "../store/actions/user";
import { useDispatch, useSelector } from "react-redux";

export default (props) => {
  const user = useSelector(state => state.user)
  const options = { email: user.email, secure: true }
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logout())
    props.navigation.navigate('Auth')
  }

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>Fulano de tal</Text>
      <Text style={styles.email}>fulanodetal@gmail.com</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})