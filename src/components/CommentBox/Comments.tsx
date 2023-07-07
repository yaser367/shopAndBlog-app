import { BsReply } from "react-icons/bs";
import { commentType } from "../../types/comment.type";
import profileIcon from "../../assets/Images/pro icon.png";

import "./CommentBox.scss";

const Comments = ({ comment }: commentType) => {
  return (
    <>
      <div className="commentItemContainer">
        <div className="app__comment-profile">
          <img
            style={{ width: "30px", height: "30px" }}
            src={profileIcon}
            alt="profile icon"
            className="profilePic"
          />
          <span className="accountname">Candice Mu.</span>
          <span className="timeStatus">1 hour ago</span>
        </div>
        <div className="comment">
          <span className="commentText">{comment}</span>
        </div>
        <div className="app__comment_replay">
          <span className="app__comment_replay-icon">
            <BsReply />
            Reply
          </span>
        </div>
      </div>
    </>
  );
};

export default Comments;
