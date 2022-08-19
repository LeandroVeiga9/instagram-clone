import React from 'react';
import Header from './src/components/Header';
import { View } from "react-native"
import Post from './src/components/Post';

export default function App() {
  const comments = [
    {
      nickname: "Joana",
      comment: "pika"
    }, {
      nickname: "João",
      comment: "voa mlk"
    }, {
      nickname: "Roberto",
      comment: "q isso hein (emoji de fogo)"
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
    </View>
  );
}
