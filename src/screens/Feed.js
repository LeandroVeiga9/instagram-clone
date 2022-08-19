import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

export default () => {

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      nickname: 'rafael',
      email: 'rafael@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'john',
          comment: 'brabo'
        },
        {
          nickname: 'róger',
          comment: 'limdo'
        },
      ]
    },
    {
      id: Math.random(),
      nickname: 'francisco',
      email: 'francisco@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: []
    },
  ])

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
