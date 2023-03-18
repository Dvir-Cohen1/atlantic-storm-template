import React from "react";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentCounter = ({ comments }) => {
  return (
    <span title={`comments: ${comments}`} className="text-white">
      {comments}
      <FontAwesomeIcon className="mx-2 text-primary" icon={faCommentAlt} />
    </span>
  );
};

export default CommentCounter;
