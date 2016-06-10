import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

//have to use the key of form for the formReducer. 
export default rootReducer;
