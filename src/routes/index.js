import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following/Following';
import Login from '~/pages/Login';
import Upload from '~/pages/Upload';
import Profile from '~/pages/profile';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import Messages from '~/pages/Messages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.messages, component: Messages, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
