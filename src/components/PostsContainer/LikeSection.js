// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";

const LikeSection = props => {
  var likes = props.likes; 
  const setLikes = props.setLikes;
  const newLikes = props.newLikes;

  function controlLikes(){
    if(newLikes < likes){
      console.log(newLikes, "newLikes in if")
      setLikes(likes-1)
    }
    else{
      console.log(newLikes, "newLikes in else")
      setLikes(likes+1)
    }
  }
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={() => controlLikes()} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
     {likes} likes</p>
</div>
  )
};

export default LikeSection;
