import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { CoinLayout } from "./components/CoinLayout";
import RootLayout from "./components/RootLayout";
import CoinPage from "./pages/CoinPage";
import Coins from "./pages/Coins";
import ComparePage from "./pages/ComparePage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Landing-page/HomePage";
import WatchList from "./pages/WatchList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "compare", element: <ComparePage /> },
        { path: "watchlist", element: <WatchList /> },
        {
          path: "coin",
          element: <CoinLayout />,
          children: [
            { index: true, element: <Coins /> },
            { path: ":id", element: <CoinPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
