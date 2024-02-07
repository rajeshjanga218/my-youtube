import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";
import SearchResults from "./components/SearchResults";
import Error from "./components/Error";
import useOnline from "./hooks/useOnline";
import Offline from "./components/Offline";

function App() {
  const isOnline = useOnline();
  console.log(isOnline);
  if (!isOnline) return <Offline />;
  return (
    <div className="h-full w-full">
      <Header />
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchContainer /> },
      { path: "results", element: <SearchResults /> },
    ],
    errorElement: <Error />,
  },
]);

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
