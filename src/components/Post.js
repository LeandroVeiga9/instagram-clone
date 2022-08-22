import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from "react-native";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";

import Author from "./Author";
import Comments from "./Comments";

export default ({ image, comments, email, nickname, id }) => {

  const user = useSelector(state => state.user)

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      {user.name && <AddComment postId={id} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    // resizeMode: 'contain',
  }
})