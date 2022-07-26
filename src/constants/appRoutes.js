import Redirect from "../pages/Redirect";
import SingleUser from "../pages/SingleUser";
import Users from "../pages/Users";

export const appRoutes = [
    {
        id: 1,
        index: true,
        element: <Users/>,
        path: '/'
    },
    {
        id: 2,
        element: <SingleUser/>,
        path: '/:userId'
    },
    {
        id: 3,
        element: <Redirect/>,
        path: '*'
    }
]