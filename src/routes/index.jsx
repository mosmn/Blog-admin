import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PostEditor from "../components/PostEditor";


const AppRoutes = () => (
  <Router basename="/blog/admin">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/post-editor" element={<PostEditor />}>
        <Route path=":id" element={<PostEditor />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
