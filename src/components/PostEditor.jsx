//import { useEditorState } from '@udecode/plate-common';
//import { serialize } from '@udecode/plate-common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/blog';
import { PlateEditor } from './PlateEditor';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import '../styles/globals.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(content);
    //strigify the content
    const data = await createPost({ title, content });

    if (data) {
      navigate('/dashboard');
    } else {
      alert('An error occurred while creating the post');
    }
  };

  return (
    <Wrapper>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
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
          <Wrapper>
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <PlateEditor value={content} setValue={setContent} />
    </TooltipProvider>
    </Wrapper>
        </div>
        <button type="submit">Create post</button>
      </form>
    </Wrapper>
  );
};

export default PostEditor;