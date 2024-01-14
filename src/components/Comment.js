import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="rounded-md border flex gap-2 border-black my-2">
      <img src="/svg/profile.svg" alt="" className="w-10 h-10" />
      <div className="">
        <h1 className="font-bold">{data.name}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
