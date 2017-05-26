import { About } from './components/pages/About';
import { Form } from './components/pages/Form';
import { PostsPageView } from './components/pages/Posts';

import * as PageIndex from './components/pages/PageIndex';

export const routes = [{
    path: '/',
    component: PostsPageView
}, {
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/postPage/',
    component: PageIndex.PostPageView
}];