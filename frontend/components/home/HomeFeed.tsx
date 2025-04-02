"use client";
import React from "react";
import PostCard from "../others/PostCard";

const posts = [
  {
    id: "1",
    user: {
      imageUrl:
        "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
      name: "Bluetooxth",
      username: "@Bluetooxth",
    },
    content: "This is a post",
    createdAt: "2h ago",
    upvotes: 10,
    downvotes: 2,
    comments: 5,
    views: 100,
  },
  {
    id: "2",
    user: {
      imageUrl:
        "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
      name: "Bluetooxth",
      username: "@Bluetooxth",
    },
    content: "This is another post",
    createdAt: "3h ago",
    upvotes: 20,
    downvotes: 5,
    comments: 10,
    views: 200,
  },
];

const HomeFeed = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-4 p-4">
      <h1 className="text-3xl font-bold text-zinc-100">Home Feed</h1>
      <div className="flex flex-col justify-start items-start w-full gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} postDetails={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
