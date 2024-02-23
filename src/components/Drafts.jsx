// Drafts.jsx
import Posts from './Posts';

const Drafts = () => {
  return <Posts filterCondition={(post) => !post.published} />;
};

export default Drafts;