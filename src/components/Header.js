import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import icon from "../../assets/imgs/icon.png";
import { Gravatar } from "react-native-gravatar";
import { useSelector } from "react-redux";

export default () => {
  const user = useSelector(state => state.user)

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Instagram</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.usert}>{user.name}</Text>
        {user.email && <Gravatar options={{ email: user.email, secure: true }} style={styles.avatar} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    height: 30,
    fontSize: 21
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    fontSize: 10,
    color: '#888'
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  }
})