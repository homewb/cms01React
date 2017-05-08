import React from 'react';
import PropTypes from 'prop-types';

import {
	Card, CardContent, Link
} from 'framework7-react';

const CardImageHeader = (props, context) => {
	return (
		<div 
			style={{backgroundImage: props.backgroundStyle}} 
			className="card-header image-inner-title-bottom color-white no-border">
			<p>{props.title}</p>
		</div>
	)
}

export const CardImage = (props, context) => {
	const id = props.id;
	const bStyle = 'url(http://www.aocai.com.au/' + props.image + ')';
	const title = props.title;
	const description = props.description;

	return (
		<Link href="/postPage/" onClick={() => props.onClick(id)}>
			<Card className="demo-card-header-pic">
				<CardImageHeader backgroundStyle={bStyle} title={title}></CardImageHeader>
				<CardContent className="card-description">{description}</CardContent>
			</Card>
		</Link>
	);
};

CardImage.contextTypes = {
	framework7AppContext: PropTypes.object
};