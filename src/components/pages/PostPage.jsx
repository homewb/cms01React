import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Page, ContentBlock, Navbar
} from 'framework7-react';

import { connect } from 'react-redux';

const PostPage = (props, context) => {
    const title = (typeof props.post.title !== 'undefined') ? props.post.title.rendered : '';
    const content = (typeof props.post.content !== 'undefined') ? props.post.content.rendered : '';
    const date = (typeof props.post.date !== 'undefined') ? props.post.date : '';
    const image = 'http://www.aocai.com.au' + ((typeof props.post.type_img !== 'undefined') ? props.post.type_img : '/cms01/images/AocaiLogo.png');
    
    // let contentArray = content.match(/<p.*?<\/p>/g);
    // console.log('contentArray ---> ', contentArray);

    function createMarkup() {
        return {__html: content};
    }

    const convertDateFormat = (date) => {
        var thisDate = new Date(date);
        var fullYear = thisDate.getUTCFullYear();
        var month = thisDate.getUTCMonth() + 1;
        var day = thisDate.getUTCDate();
        var hour = thisDate.getUTCHours();
        var minutes = thisDate.getUTCMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return fullYear + '年' + month + '月' + day + '日 ' + hour + '点' + minutes + '分';
    };

    return (
        <Page>
            <Navbar title="文章" backLink="要闻" sliding />
            <ContentBlock inner>
                <div className="post-title">{title}</div>
                <div className="post-date">{convertDateFormat(date)}</div>
                <img className="post-main-image" src={image} />
                <div className="post-content" dangerouslySetInnerHTML={createMarkup()}></div>
            </ContentBlock>
        </Page>
    );
};

/*class PostPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: (typeof props.post.id !== 'undefined') ? props.post.id : '',
            title: (typeof props.post.title !== 'undefined') ? props.post.title.rendered : '',
            content: (typeof props.post.content !== 'undefined') ? props.post.content.rendered : '',
            date: (typeof props.post.date !== 'undefined') ? props.post.date : '',
            image: 'http://www.aocai.com.au' + ((typeof props.post.type_img !== 'undefined') ? props.post.type_img : '/cms01/images/AocaiLogo.png')
        }
    }

    createMarkup() {
        return {__html: this.state.content};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post.id !== this.props.post.id) {
            this.setState({
                ...this.state,
                id: (typeof this.props.post.id !== 'undefined') ? this.props.post.id : '',
                title: (typeof this.props.post.title !== 'undefined') ? this.props.post.title.rendered : '',
                content: (typeof this.props.post.content !== 'undefined') ? this.props.post.content.rendered : '',
                date: (typeof this.props.post.date !== 'undefined') ? this.props.post.date : '',
                image: 'http://www.aocai.com.au' + ((typeof this.props.post.type_img !== 'undefined') ? this.props.post.type_img : '/cms01/images/AocaiLogo.png')
            });
        }
    }


    convertDateFormat(date) {
        var thisDate = new Date(date);
        var fullYear = thisDate.getUTCFullYear();
        var month = thisDate.getUTCMonth() + 1;
        var day = thisDate.getUTCDate();
        var hour = thisDate.getUTCHours();
        var minutes = thisDate.getUTCMinutes();

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return fullYear + '年' + month + '月' + day + '日 ' + hour + '点' + minutes + '分';
    };

    render() {
        return (
            <Page>
                <Navbar title="文章" backLink="要闻" sliding />
                <ContentBlock inner>
                    <div className="post-title">{this.state.title}</div>
                    <div className="post-date">{this.convertDateFormat(this.state.date)}</div>
                    <img className="post-main-image" src={this.state.image} role="presentation" />
                    <div className="post-content" dangerouslySetInnerHTML={this.createMarkup()}></div>
                </ContentBlock>
            </Page>
        );
    };
};*/

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