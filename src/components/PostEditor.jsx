import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPost, updatePost } from '../api/blog';
import { PlateEditor } from './PlateEditor';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import '../styles/globals.css';
import styled from 'styled-components';
import loadingSpinner from '../assets/loading.gif';

const PlateEditorStyled = styled.div`
  margin: 2rem;
`;

const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const Loading = styled.div`
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

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const post = await getPost(id);
        setTitle(post.title);
        setContent(JSON.parse(post.content));
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handlePublish = async () => {
    let data;
    if (id) {
      data = await updatePost(id, { title, content, published: true });
    } else {
      data = await createPost({ title, content, published: true });
    }

    if (data) {
      navigate('/dashboard/published');
    } else {
      alert('An error occurred while creating the post');
    }
  };

  const handleSave = async () => {
    let data;
    if (id) {
      data = await updatePost(id, { title, content, published: false });
    } else {
      data = await createPost({ title, content, published: false });
    }

    if (data) {
      navigate('/dashboard/drafts');
    } else {
      alert('An error occurred while saving the post');
    }
  };

  if (id && loading) {
    return <Loading><img src={loadingSpinner} alt="loading" /></Loading>;
  }

  return (
    <Wrapper>
      <h1>Create a new post</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <PlateEditorStyled>
          <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}
          >
            <PlateEditor value={content} setValue={setContent} />
          </TooltipProvider>
        </PlateEditorStyled>
      </div>
      <button onClick={handlePublish}>Publish</button>
      <button onClick={handleSave}>Save</button>
    </Wrapper>
  );
};

export default PostEditor;