import * as actionTypes from '../constants/actionTypes';

const baseUrl = 'http://www.aocai.com.au/wordpress/wp-json/wp/v2/posts';
const url = baseUrl + '?filter%5Bcat%5D=384&filter%5Bposts_per_page%5D=10&filter%5Bpaged%5D=1';

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