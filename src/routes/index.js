import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';
import Upload from '~/pages/Upload';
import Profile from '~/pages/profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
