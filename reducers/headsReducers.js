
function headsReducers (state = [], action) {
  switch (action.type) {
    case "RECEIVE_POSTS":
      return action.posts
      

    default:
      return state
  }
}

export default headsReducers
