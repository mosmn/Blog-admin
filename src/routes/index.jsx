import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PostEditor from "../components/PostEditor";

const isLoggedIn = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  return true;
};

const AppRoutes = () => (
  <Router basename="/blog/admin">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={isLoggedIn() ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route path="/post-editor" element={isLoggedIn() ? <PostEditor /> : <Navigate to="/" />} >
        <Route path=":id" element={<PostEditor />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </Router>
);

export default AppRoutes;
