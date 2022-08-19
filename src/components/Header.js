import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import icon from "../../assets/imgs/icon.png";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Instagram</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb'
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
    fontSize: 25
  }
})