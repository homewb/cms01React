import React from 'react';
import PropTypes from 'prop-types';
import {
    Page, ContentBlock, Navbar
} from 'framework7-react';

import { connect } from 'react-redux';

const PostPage = (props, context) => {
    return (
        <Page>
            <Navbar title={props.post.title.rendered} backLink="Back" sliding />
            <ContentBlock inner>
                {props.post.content.rendered}
            </ContentBlock>
        </Page>
    );
};

PostPage.contextTypes = {
	framework7AppContext: PropTypes.object,
    post: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
};

export default connect(mapStateToProps)(PostPage);