import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { Gravatar } from "react-native-gravatar";

export default ({ email, nickname }) => {
  return (
    <View style={styles.container}>
      <Gravatar style={styles.avatar} options={{ email, secure: true }} />
      <Text style={styles.nickname}>
        {nickname}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})