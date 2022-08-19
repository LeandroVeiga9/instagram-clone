import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert
} from "react-native";


export default ({ comments }) => {

  const renderComments = () => {
    if (comments) {
      return comments.map((comment, index) => {
        return (
          <View style={styles.commentContainer} key={index}>
            <Text style={styles.nickname}>
              {comment.nickname}:
            </Text>
            <Text style={styles.comment}>
              {comment.comment}
            </Text>
          </View>
        )
      })
    }
  }
  return (
    <View style={styles.container}>
      {renderComments()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  comment: {
    color: '#555'
  }
})