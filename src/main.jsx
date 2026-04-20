import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home.jsx';
import RootLayout from './layout/RootLayout.jsx';
import Timeline from './pages/timeline/Timeline.jsx';
import Stat from './pages/stats/Stat.jsx';
import FriendDeatils from './componenets/FriendDeatils.jsx';
import TimelineContext from './context/TimelineContext.jsx';
import ErrorPage from './componenets/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,        // ✅ renders at "/"
        element: <Home />,
      },

      {
        path: "timeline",   // ✅ no leading slash
        element: <Timeline />
      },
      {
        path: "stats",      // ✅ no leading slash
        element: <Stat />
      },
      {
        path: "friend/:id",
        element: <FriendDeatils />,


      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
      <RouterProvider router={router} />
    </TimelineContext>
  </StrictMode>,
)