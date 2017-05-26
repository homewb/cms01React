import { combineReducers } from 'redux';
import { postsReducer, postReducer } from './postReducers';

export default combineReducers({
    posts: postsReducer,
    post: postReducer
});