import React from 'react';
import PropTypes from 'prop-types';
import {
	Navbar, Page, NavLeft, Link, NavCenter, NavRight
} from 'framework7-react';
import { CardImage } from '../Elements/CardImage';
import { connect } from 'react-redux';
import * as postActions from '../../actions/postActions';

const PostsPage = (props, context) => {
    const posts = (props.posts.length > 0) ? props.posts : [];

    const handleClick = (id) => {
        props.fetchPostById(id);
    };

    return (
        <Page>
            {context.framework7AppContext.theme.material ? (
                <Navbar>
                    <NavLeft>
                        <Link icon="icon-bars" openPanel="left" />
                    </NavLeft>
                    <NavCenter sliding>要闻</NavCenter>
                    <NavRight>
                        
                    </NavRight>
                </Navbar>
            ) : null}

            {posts.map(post =>
                <CardImage 
                    key={post.id} 
                    id={post.id}
                    image={post.type_img} 
                    title={post.title.rendered} 
                    description={post.description}
                    onClick={(id) => handleClick(id)}>
                </CardImage>
            )}

        </Page>
    );
};

PostsPage.contextTypes = {
	framework7AppContext: PropTypes.object,
    post: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostById: id => dispatch(postActions.fetchPostById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

export const PostsPageView = (props, context) => {
    return (
        <PostsPage />
    );
}