const postsByReddit = (state = { }, action) => {
    return {
      ...state,
      [action.reddit]: posts(state[action.reddit], action)
    }
}
const posts = (state = {isFetching: false, didInvalidate: false, items: []}, action)=>{
	console.log(state);
	console.log(action);
};

postsByReddit["react"];
postsByReddit.react
