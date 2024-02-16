import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../api/blog";
import { PostContainer, Post, DeleteButton } from "./Dashboard";

const Published = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      const publishedPosts = allPosts.filter((post) => post.published);
      setPosts(publishedPosts);
    };

    fetchPosts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

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
        <p>No published posts</p>
      )}
    </PostContainer>
  );
};

export default Published;
