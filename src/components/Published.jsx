// Published.jsx
import Posts from "./Posts";

const Published = () => {
  return <Posts filterCondition={(post) => post.published} />;
};

export default Published;
