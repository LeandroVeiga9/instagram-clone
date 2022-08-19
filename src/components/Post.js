import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from "react-native";
import AddComment from "./AddComment";

import Author from "./Author";
import Comments from "./comments";

export default ({ image, comments, email, nickname }) => {

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      <AddComment />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 2 / 5,
    // resizeMode: 'contain',
  }
})