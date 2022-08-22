import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/actions/posts";

export default ({ postId }) => {

  const [comment, setComment] = useState('')
  const [editMode, setEditMode] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleAddComment = () => {
    dispatch(addComment({
      postId,
      comment: {
        nickname: user.name,
        comment
      }
    }))

    setComment('')
    setEditMode(false)
  }

  const renderComponent = () => {
    if (editMode) {
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={comment}
            onChangeText={(commentVar) => setComment(commentVar)}
            onSubmitEditing={handleAddComment}
          />
          <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
            <Icon name="times" size={15} color='#555' />
          </TouchableWithoutFeedback>
        </View>
      )
    } else {
      return (
        <TouchableWithoutFeedback onPress={() => setEditMode(true)}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color='#555' />
            <Text style={styles.caption}>
              Adicione um comentario...
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {renderComponent()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc'
  },
  input: {
    width: '90%',
  }
})