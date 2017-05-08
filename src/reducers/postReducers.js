import * as actionTypes from '../constants/actionTypes';

export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}

export const postReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POST_SUCCESS:
            return action.post;
        default:
            return state;
    }
}