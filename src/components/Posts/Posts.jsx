import React from "react";
import './Posts.css'

const Posts = ({ imgUrl, title, description, user, date, cta }) => {
  return (
    <div className="app__post">
      <div className="app__post-image">
      <img  src={imgUrl} alt="food_photo" />
      </div>
        <div className="app__post-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{user}</p>
        <p>{date}</p>
        <button>{cta}</button>
        </div>
      </div>
  )
}

export default Posts;