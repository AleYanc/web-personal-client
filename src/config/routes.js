// Import Layout //
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Import Admin Pages //
import AdminHome from '../pages/admin/Admin';
import AdminLogin from '../pages/admin/Login';
import AdminUsers from '../pages/admin/Users';
import AdminProjects from '../pages/admin/Projects';

// Import pages //
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

// Other //
import Error404 from '../pages/Error404';

const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminLogin,
                exact: true
            },
            {
                path: '/admin/users',
                component: AdminUsers,
                exact: true
            },
            {
                path: '/admin/projects',
                component: AdminProjects,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/contact',
                component: Contact,
                exact: true
            },
            {
                path: '/portfolio',
                component: Portfolio,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;