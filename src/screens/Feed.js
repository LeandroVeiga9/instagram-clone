import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import { useSelector } from "react-redux";

export default () => {
  const posts = useSelector(state => state.posts.posts)

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
})
