import * as actionTypes from '../constants/actionTypes';

const baseUrl = '';
const url = baseUrl + '';

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts
    }
};

export const fetchPostByIdSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        post
    }
};

export const fetchPosts = () => {
    return (dispatch) => {
        fetch(url).then(
            (response) => {
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  
                    response.status);  
                    return;  
                }

                response.json().then(
                    (data) => {
                        dispatch(fetchPostsSuccess(data));
                    }
                );
            }
        );
    };
};

export const fetchPostById = (id) => {
    return (dispatch) => {
        fetch(baseUrl + '/' + id).then(
            (response) => {
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  
                    response.status);  
                    return;  
                }

                response.json().then(
                    (data) => {
                        dispatch(fetchPostByIdSuccess(data));
                    }
                );
            }
        );
    };
}