import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPost, updatePost } from '../api/blog';
import { PlateEditor } from './PlateEditor';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import '../styles/globals.css';
import styled from 'styled-components';
import loadingSpinner from '../assets/loading.gif';

const Wrapper = styled.div`
  margin: 3rem 3.5rem;

  input {
    background-color: #f8f9fa;
    border: none;
    width: 100%;
    padding: 1rem;
    font-size: 4rem;
    
  }

  input::placeholder {
    font-size: 4rem;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    margin: 1rem 1.5rem;

    input {
      font-size: 2rem;
    }

    input::placeholder {
      font-size: 2rem;
    }
  }
`;

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
    if (title === '') {
      setTitle('Untitled');
    }

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
    if (title === '') {
      setTitle('Untitled');
    }

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
      <div>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Enter title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
          <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}
          >
            <PlateEditor value={content} setValue={setContent} />
          </TooltipProvider>
      </div>
      <button onClick={handlePublish}>Publish</button>
      <button onClick={handleSave}>Save</button>
    </Wrapper>
  );
};

export default PostEditor;