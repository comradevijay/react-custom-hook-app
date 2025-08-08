import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  const colorList = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
    '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b',
    '#ffb6c1', '#7fffd4', '#ffa07a', '#20b2aa', '#87cefa', '#dda0dd',
    '#98fb98', '#ff1493', '#b0e0e6', '#ba55d3', '#00ffff', '#ff6347',
    '#adff2f', '#dc143c', '#8a2be2', '#1e90ff', '#f5deb3', '#a0522d',
    '#deb887', '#daa520', '#00ced1', '#5f9ea0', '#7b68ee', '#6a5acd',
    '#ee82ee', '#40e0d0', '#00fa9a', '#8b0000', '#ff4500', '#ff69b4',
    '#cd5c5c', '#bc8f8f', '#f0e68c', '#00ff7f', '#b8860b', '#e9967a',
    '#f08080', '#4682b4', '#2e8b57', '#9acd32', '#008080', '#ffdead'
  ];

  if (loading) return <div className="center-message">Loading...</div>;
  if (error) return <div className="center-message">Error: {error}</div>;

  return (
    <div>
      <h1 className="heading">Photos</h1>
      <div className="product-grid">
        {data.slice(0, 60).map((item, index) => (
          <div key={item.id} className="product-card">
            <div
              className="dummy-image"
              style={{ backgroundColor: colorList[index % colorList.length] }}
            >
              600 x 600
            </div>
            <p className="desc">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

