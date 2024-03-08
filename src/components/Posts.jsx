import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, deletePost } from "../api/blog";
import {
  PostContainer,
  Post,
  DeleteButton,
  ErrorPreventionCard,
  Backdrop,
} from "./Dashboard";
import { Plate } from "@udecode/plate-core";
import { Displayer } from "@/components/plate-ui/displayer";
import loadingSpinner from "../assets/loading.gif";
import styled from "styled-components";
import plugins from "./plugins";

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

const Posts = ({ filterCondition }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getPosts();
        const filteredPosts = allPosts.filter(filterCondition);
        setPosts(filteredPosts);
        setExpandedPosts(new Array(filteredPosts.length).fill(false));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, [filterCondition]);

  useEffect(() => {
    if (postToDelete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [postToDelete]);

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
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postToDelete),
        );
        setPostToDelete(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleExpansion = (index) => {
    setExpandedPosts((prevState) =>
      prevState.map((expanded, i) => (i === index ? !expanded : expanded)),
    );
  };

  const displayErrorPreventionCard = (id) => {
    setPostToDelete(id);
  };

  const renderContent = (content, index) => {
    const parsedContent = JSON.parse(content);
    return (
      <Plate plugins={plugins} initialValue={parsedContent} editable={false}>
        <Displayer isExpanded={expandedPosts[index]} />
      </Plate>
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <PostContainer>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post key={post._id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>{post.title}</h1>
              <p>{new Date(post.createdAt).toLocaleString()}</p>
              <div>{renderContent(post.content, index)}</div>
              <div onClick={() => toggleExpansion(index)}>
                {expandedPosts[index] ? "...read less" : "...read more"}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={() => handleEdit(post._id)}> Edit</button>
              <DeleteButton
                onClick={() => displayErrorPreventionCard(post._id)}
              >
                Delete
              </DeleteButton>
            </div>
            {postToDelete === post._id && (
              <Backdrop onClick={() => setPostToDelete(null)}>
                <ErrorPreventionCard>
                  <h2>Are you sure you want to delete this post?</h2>
                  <div className="actions">
                    <button onClick={() => setPostToDelete(null)}>
                      Cancel
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                  </div>
                </ErrorPreventionCard>
              </Backdrop>
            )}
          </Post>
        ))
      ) : (
        <Loading>
          <img src={loadingSpinner} alt="loading" />
        </Loading>
      )}
    </PostContainer>
  );
};

export default Posts;
