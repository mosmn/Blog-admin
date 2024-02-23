import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PostEditor from "../components/PostEditor";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToDrafts() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/blog/admin/dashboard/drafts');
  }, [navigate]);

  return null;
}


const AppRoutes = () => (
  <Router basename="/blog/admin">
    <Routes>
    <Route path="/" element={<RedirectToDrafts />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/post-editor" element={<PostEditor />}>
        <Route path=":id" element={<PostEditor />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
