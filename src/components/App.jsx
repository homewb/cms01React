import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import {routes} from '../routes';
import PostsPageView from './pages/Posts';

const LeftPanel = (props, context) => (
	<Panel left reveal layout="dark">
		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
			{context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
					<ContentBlock inner>
						<p>Left panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

LeftPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
						<NavCenter sliding>要闻</NavCenter>
						<NavRight>
							
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<PostsPageView />
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

const AppPopup = () => (
	<Popup id="popup">
		<View navbarFixed>
			<Pages>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link closePopup>Close</Link>
						</NavRight>
					</Navbar>
					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
				</Page>
			</Pages>
		</View>
	</Popup> 
);

const AppLoginScreen = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>		
		<Statusbar />		
		<LeftPanel />
		<MainViews />
		<AppPopup />
		<AppLoginScreen />
	</Framework7App>  
);
