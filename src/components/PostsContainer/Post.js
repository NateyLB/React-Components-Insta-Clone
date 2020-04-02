// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const {post} = props
  // set up state for the likes
  const [likes, setLikes] = useState(post.likes)
  //a copy of likes to keep track of incrementing so we can go back to original state 
  const newLikes = Object.assign({}, post)
  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} setLikes={setLikes} newLikes={newLikes.likes} />
      <CommentSection comments={post.comments}/> 
    </div>
  );
};

export default Post;


