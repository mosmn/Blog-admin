import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/post-editor');
  };

  return (
    <div>
      <h1>Blog Dashboard</h1>
      <button onClick={handleNewPost}>Write a new post</button>
      <div>
        <button>Drafts</button>
        <button>Published</button>
        <button>Responses</button>
      </div>
    </div>
  );
};

export default Dashboard;