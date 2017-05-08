import { About } from './components/pages/About';
import { Form } from './components/pages/Form';
import { PostPage } from './components/pages/PostPage';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/postPage/',
    component: PostPage
}];