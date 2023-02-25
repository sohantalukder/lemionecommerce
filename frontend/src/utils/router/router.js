import { createBrowserRouter } from "react-router-dom";
import Header from "../../screens/components/Header/Header";
import Home from "../../screens/Home/Home";
import ViewProduct from "../../screens/ViewProduct/ViewProduct";
import { HOME, PRODUCT } from "../routeName/routeName";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: HOME,
                element: <Home />,
            },
            {
                path: PRODUCT,
                element: <ViewProduct />,
            },
        ],
        path: "/",
        element: <Header />,
    },
]);
