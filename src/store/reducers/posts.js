import { ADD_POST } from "../actions/actionTypes";

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'rafael',
      email: 'rafael@gmail.com',
      image: require('../../../assets/imgs/fence.jpg'),
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
      image: require('../../../assets/imgs/bw.jpg'),
      comments: []
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        }),
      }
    default:
      return state
  }
}

export default reducer