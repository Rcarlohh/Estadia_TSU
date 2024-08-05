import React from 'react';
import './PostCss/SearchComponent.css'

const RecentPost = ({ post, onClick }) => {
  return (
    <div className="recent-post" onClick={() => onClick(post)}>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="recent-post-image" />}
      <h6 className="recent-post-title">{post.title}</h6>
    </div>
  );
};

export default RecentPost;
