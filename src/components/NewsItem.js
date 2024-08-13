import React from 'react';
import './NewsItem.css'

const NewsItem = (props) => {
  return (
    <div className="News-item">
      <h2>{props.heading}</h2>
      <img src={props.image} alt='source RSS' />
      <p><strong>Date:</strong> {props.date}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default NewsItem;
