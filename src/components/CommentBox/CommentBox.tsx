import { useState } from "react";
import Comments from "./Comments";
import CommentReplay from "./CommentReplay";

import "./CommentBox.scss";

const CommentBox = () => {
  const data = [
    "Hi Orlando Diggs , let's meet today. I want to tell you about my ideas. May",
    "Awesome Post",
  ];

  const [comments, setComments] = useState(data);
  const [newcomment, setNewcomment] = useState("");
  const handleComment = async () => {
    setComments([newcomment, ...comments]);
    setNewcomment("");
  };
  return (
    <>
      <div className="app__comment-container">
        <h4 className="primeFont">Comments</h4>
        <textarea
          id="commentfield"
          cols={30}
          rows={5}
          className="commentField"
          value={newcomment}
          onChange={(e) => setNewcomment(e.target.value)}
          placeholder="What are your thoughts?"
        ></textarea>
        <button className="app__comment-buttonSubmit" onClick={handleComment}>
          POST A COMMENT
        </button>
        {comments.map((item) => {
          return <Comments comment={item} />;
        })}
        <CommentReplay comment="reply this" />
        <Comments comment="Good Day!" />
      </div>
    </>
  );
};

export default CommentBox;
