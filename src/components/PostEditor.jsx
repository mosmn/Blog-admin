import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/blog';

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await createPost({ title, content });

    if (data) {
      navigate('/dashboard');
    } else {
      alert('An error occurred while creating the post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default PostEditor;