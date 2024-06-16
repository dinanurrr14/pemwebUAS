// NewsItem.jsx

import React from 'react';

const NewsItem = ({ title, category, description, keywords }) => {
  return (
    <div className="news-item">
      <h2 className="news-title">{title}</h2>
      <p><strong>Jenis Berita:</strong> {category}</p>
      <p><strong>Ringkasan:</strong> {description}</p>
      {keywords.length > 0 && (
        <p><strong>Keywords:</strong> {keywords.join(', ')}</p>
      )}
    </div>
  );
};

export default NewsItem;
