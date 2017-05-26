import React from 'react';
import PropTypes from 'prop-types';
import PostPage from './PostPage';

export const PostPageView = (props, context) => {
    return (
        <PostPage />
    );
}

PostPageView.contextTypes = {
	framework7AppContext: PropTypes.object,
};