import React, { useState } from 'react';
import video from "../data/video.js";

function App() {
  const { comments, createdAt, downvotes, upvotes, embedUrl, title, views } = video;

  const [isApeared, setIsApeared] = useState(true);
  const [upvoteNum, setUpvoteNum] = useState(upvotes);
  const [downvoteNum, setDownvoteNum] = useState(downvotes);

  function handleCommentAppearance(){
    setIsApeared(prev => !prev)
  }

  function handleUpvotes(){
    setUpvoteNum(prev => prev + 1);
  }

  function handleDownvotes(){
    setDownvoteNum(prev => prev - 1);
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button onClick={handleUpvotes}>{upvoteNum}👍</button>
      <button onClick={handleDownvotes}>{downvoteNum}👎</button>
      <br />
      <button onClick={handleCommentAppearance}>{isApeared ? "Hide Comments" : "ShowComments"}</button>
      <hr />
      <h4>{comments.length} Comments</h4>
      {
        isApeared && comments.map(({comment, user, id}) => (
          <li key={id} style={{listStyle: 'none'}}>
            <h5>{user}</h5>
            <p>{comment}</p>
          </li>
        ))
      }
    </div>
  );
}

export default App;
