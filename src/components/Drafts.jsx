import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../api/blog";
import { PostContainer, Post, DeleteButton } from "./Dashboard";

const Drafts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getPosts();
        const drafts = allPosts.filter((post) => !post.published);
        setPosts(drafts);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PostContainer>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={() => handleEdit(post.id)}> Edit</button>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Post>
        ))
      ) : (
        <p>No draft posts</p>
      )}
    </PostContainer>
  );
};

export default Drafts;
