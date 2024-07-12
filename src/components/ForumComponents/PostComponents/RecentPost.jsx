import React from 'react';

const RecentPost = ({ post, onClick }) => (
  <div className="d-flex mb-3 recent-post" onClick={() => onClick(post)}>
    <img className="img-fluid" src={post.imageUrl} style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={post.title} />
    <a href="#" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
      {post.title}
    </a>
  </div>
);

export default RecentPost;
