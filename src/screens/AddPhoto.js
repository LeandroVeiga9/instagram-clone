import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  ScrollView,
  Alert,
  Dimensions
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { addPost } from '../store/actions/posts'
import { useDispatch, useSelector } from "react-redux";

export default (props) => {
  const [image, setImage] = useState(null)
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const noUser = 'voce precisa estar logado para adicionar imagens'

  const pickImage = async () => {
    if (!user.name) {
      Alert.alert('falha', noUser)
      return
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      setImage(result);
    }

  }

  const save = async () => {
    dispatch(addPost({
      id: Math.random(),
      nickname: user.name,
      email: user.email,
      image: image,
      comments: [{
        nickname: user.name,
        comment
      }]
    }))

    setImage(null)
    setComment('')
    props.navigation.navigate('Feed')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentario para a foto?"
          style={styles.input}
          value={comment}
          onChangeText={comment => setComment(comment)}
          editable={!!user.name}
        />
        {!!image && <TouchableOpacity onPress={save} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    // resizeMode: 'center'
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20,
    width: '90%'
  }
})