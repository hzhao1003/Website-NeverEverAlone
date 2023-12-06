import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import WhatWeServe from "./components/Whatweserve";
import HowWeDo from "./components/Howwedo";
import HowWeHelp from "./components/Howwehelp";
import Team from "./components/Team";
const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/what-we-serve",
                element: <WhatWeServe />
            },
            {
                path: "/how-we-do",
                element: <HowWeDo />
            },
            {
                path: "/how-we-help",
                element: <HowWeHelp />
            },
            {
                path: "/team",
                element: <Team />
            },

        ]
    }
]);
export default router;