import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((item, index) => (
    <div key={index}>
      <Comment data={item} />
      {item.replies && (
        <div className="border-l-2 pl-4">
          <CommentsList comments={item.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
