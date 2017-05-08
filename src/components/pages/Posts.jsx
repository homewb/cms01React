import React from 'react';
import PropTypes from 'prop-types';
import {
	Navbar, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button
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
                    <NavCenter sliding>Framework7</NavCenter>
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


            <ContentBlockTitle>Welcome to my App</ContentBlockTitle>
            <ContentBlock inner>
                <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </ContentBlock>
            <ContentBlockTitle>Navigation</ContentBlockTitle>
            <List>
                <ListItem link="/about/" title="About"></ListItem>
                <ListItem link="/form/" title="Form"></ListItem>							
            </List>
            <ContentBlockTitle>Side Panels</ContentBlockTitle>
            <ContentBlock>
                <GridRow>
                    <GridCol width={50}>
                        <Button openPanel="left">Left Panel</Button>
                    </GridCol>
                    <GridCol width={50}>
                        <Button openPanel="right">Right Panel</Button>
                    </GridCol>
                </GridRow>
            </ContentBlock>
            <ContentBlockTitle>Modals</ContentBlockTitle>
            <ContentBlock>
                <GridRow>
                    <GridCol width={50}>
                        <Button openPopup="#popup">Popup</Button>
                    </GridCol>
                    <GridCol width={50}>
                        <Button openLoginScreen="#login-screen">Login Screen</Button>
                    </GridCol>
                </GridRow>
            </ContentBlock>
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