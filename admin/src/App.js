import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import { useContext } from "react";
import NewList from "./pages/newList/newList";
import List from "./pages/list/List";
import ListList from "./pages/listList/listList";
import NewMovie from "./pages/newMovie/NewMovie";
import Movie from "./pages/movie/Movie";
import MovieList from "./pages/movieList/MovieList";
import { AuthContext } from "./context/authContext/AuthContext";
import Login from "./pages/login/Login";
import NotFound from "./pages/404/NotFound";
import SubscriberList from "./pages/subscriberList/SubscriberList";
import Subscriber from "./pages/subscriber/Subscriber";

// function App() {
//   const { user } = useContext(AuthContext);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {user ? (
//           <>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route path="/" element={<Home />} />
//               <Route path="/users" element={<UserList />} />
//               <Route path="/user/:userId" element={<User />} />
//               <Route path="/newUser" element={<NewUser />} />
//               <Route path="/movies" element={<MovieList />} />
//               <Route path="/movie/:movieId" element={<Movie />} />
//               <Route path="/newMovie" element={<NewMovie />} />
//               <Route path="/lists" element={<ListList />} />
//               <Route path="/list/:listId" element={<List />} />
//               <Route path="/newlist" element={<NewList />} />
//             </div>
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

function AuthenticatedRoutes() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <AuthenticatedRoutes /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/newMovie" element={<NewMovie />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/newlist" element={<NewList />} />
          <Route path="/Subscribers" element={<SubscriberList />} />
          <Route path="/Subscriber/subscriberId" element={<Subscriber />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
