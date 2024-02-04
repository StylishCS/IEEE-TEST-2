import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound/NotFound";
import { Admin } from "./Pages/Admin/Admin";
import { Dashboard } from "./Pages/Admin/components/Dashboard/Dashboard";
import { Home } from "./Pages/Admin/components/Dashboard/components/Home/Home";
import { Slogan } from "./Pages/Admin/components/Dashboard/components/Home/components/Slogan/Slogan";
import Video from "./Pages/Admin/components/Dashboard/components/Home/components/Video/Video";
import Family from "./Pages/Admin/components/Dashboard/components/Home/components/Family/Family";
import Achieveiments from "./Pages/Admin/components/Dashboard/components/Home/components/Achievements/Achieveiments";
import { Partners } from "./Pages/Admin/components/Dashboard/components/Home/components/Partners/Partners";
import { Testimonials } from "./Pages/Admin/components/Dashboard/components/Home/components/Testimonials/Testimonials";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "/admin/dashboard/home",
                element: <Home />,
                children: [
                  {
                    path: "/admin/dashboard/home/slogan",
                    element: <Slogan />,
                  },
                  {
                    path: "/admin/dashboard/home/video",
                    element: <Video />,
                  },
                  {
                    path: "/admin/dashboard/home/family",
                    element: <Family />,
                  },
                  {
                    path: "/admin/dashboard/home/achievements",
                    element: <Achieveiments />,
                  },
                  {
                    path: "/admin/dashboard/home/partners",
                    element: <Partners />,
                  },
                  {
                    path: "/admin/dashboard/home/testimonials",
                    element: <Testimonials />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
