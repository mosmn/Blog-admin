import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, deletePost } from "../api/blog";
import { PostContainer, Post, DeleteButton, ErrorPreventionCard } from "./Dashboard";
import { Plate } from '@udecode/plate-core';
import { Editor } from "@/components/plate-ui/editor";
import loadingSpinner from '../assets/loading.gif';
import styled from 'styled-components';

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  img {
    width: 140px;
    height: auto;
  }
`;

const Drafts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
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
    try {
      navigate(`/post-editor/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      if (postToDelete) {
        await deletePost(postToDelete);
        setPosts(prevPosts => prevPosts.filter(post => post._id !== postToDelete));
        setPostToDelete(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const displayErrorPreventionCard = (id) => {
    setPostToDelete(id);
  };

  const renderContent = (content) => {
    const parsedContent = JSON.parse(content);
    return (
      <Plate initialValue={parsedContent} editable={false}>
        <Editor readOnly={true} />
      </Plate>
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PostContainer>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post._id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{post.title}</h2>
              <div>{renderContent(post.content)}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={() => handleEdit(post._id)}>Edit</button>
              <DeleteButton onClick={() => displayErrorPreventionCard(post._id)}>Delete</DeleteButton>
            </div>
            {postToDelete === post._id && (
              <ErrorPreventionCard>
                <h2>Are you sure you want to delete this post?</h2>
                <div>
                  <button onClick={() => setPostToDelete(null)}>Cancel</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </ErrorPreventionCard>
            )}
          </Post>
        ))
      ) : (
        <Loading><img src={loadingSpinner} alt="loading" /></Loading>
      )}
    </PostContainer>
  );
};

export default Drafts;
