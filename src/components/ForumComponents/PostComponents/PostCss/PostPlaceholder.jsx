import React from 'react';
import ContentLoader from 'react-content-loader';

const PostPlaceholder = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={400}
    viewBox="0 0 800 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
    <rect x="0" y="220" rx="5" ry="5" width="70%" height="20" />
    <rect x="0" y="260" rx="5" ry="5" width="100%" height="15" />
    <rect x="0" y="280" rx="5" ry="5" width="90%" height="15" />
    <rect x="0" y="300" rx="5" ry="5" width="85%" height="15" />
    <rect x="0" y="340" rx="5" ry="5" width="30%" height="15" />
  </ContentLoader>
);

export default PostPlaceholder;
