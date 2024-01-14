import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchContainer /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="h-full w-full">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

{
  /*
  - Header
  - Body
    - Sidebar
      - MenuItems
    - MainContainer
      - ButtonList
      - VideoContainer
          - VideoCard
*/
}
