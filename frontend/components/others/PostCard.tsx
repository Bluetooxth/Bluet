"use client";
import React from "react";
import { FaRegBookmark, FaBookmark, FaRegEye } from "react-icons/fa";
import {
  BiUpvote,
  BiSolidUpvote,
  BiDownvote,
  BiSolidDownvote,
} from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { RxDotsHorizontal, RxDotFilled } from "react-icons/rx";
import { useState } from "react";

interface PostUser {
  imageUrl: string;
  name: string;
  username: string;
}

interface PostDetails {
  id: string;
  user: PostUser;
  content: string;
  image?: string;
  createdAt: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  views: number;
}

const PostCard = ({ postDetails }: { postDetails: PostDetails }) => {
  const [saved, setSaved] = useState(false);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  return (
    <div className="flex flex-col justify-start items-start w-full gap-4 border border-zinc-700 rounded-lg p-4 hover:border-zinc-600 transition-all">
      <div className="flex justify-between items-start w-full">
        <div className="flex gap-3">
          <img
            src={postDetails.user.imageUrl}
            alt={postDetails.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-start items-center gap-2 flex-wrap">
              <h2 className="text-lg font-semibold text-zinc-100">
                {postDetails.user.name}
              </h2>
              <span className="text-sm font-normal text-zinc-400">
                @{postDetails.user.username}
              </span>
              <RxDotFilled className="text-zinc-400 text-sm" />
              <span className="text-sm font-normal text-zinc-400">
                {postDetails.createdAt}
              </span>
            </div>
          </div>
        </div>
        <button className="text-zinc-400 hover:text-zinc-200 transition-colors">
          <RxDotsHorizontal size={20} />
        </button>
      </div>
      <div className="w-full">
        <p className="text-zinc-200 text-base mb-3">{postDetails.content}</p>
        {postDetails.image && (
          <img
            src={postDetails.image}
            alt="Post image"
            className="w-full h-auto rounded-lg object-cover max-h-96"
          />
        )}
      </div>
      <div className="flex justify-between items-center w-full mt-2 text-zinc-400">
        <div className="flex items-center gap-1">
          {voted === "up" ? (
            <button onClick={() => setVoted(null)} className="text-blue-500">
              <BiSolidUpvote size={20} />
            </button>
          ) : (
            <button
              onClick={() => setVoted("up")}
              className="hover:text-blue-500 transition-colors"
            >
              <BiUpvote size={20} />
            </button>
          )}
          <span className="text-sm">{postDetails.upvotes}</span>
        </div>

        <div className="flex items-center gap-1">
          {voted === "down" ? (
            <button onClick={() => setVoted(null)} className="text-red-500">
              <BiSolidDownvote size={20} />
            </button>
          ) : (
            <button
              onClick={() => setVoted("down")}
              className="hover:text-red-500 transition-colors"
            >
              <BiDownvote size={20} />
            </button>
          )}
          <span className="text-sm">{postDetails.downvotes}</span>
        </div>

        <button className="flex items-center gap-2 hover:text-zinc-200 transition-colors">
          <MdOutlineModeComment size={20} />
          <span className="text-sm">{postDetails.comments}</span>
        </button>

        <button className="hover:text-zinc-200 transition-colors">
          <AiOutlineRetweet size={20} />
        </button>

        <div className="flex items-center gap-1">
          <FaRegEye size={18} />
          <span className="text-sm">{postDetails.views}</span>
        </div>

        <button className="hover:text-zinc-200 transition-colors">
          <FiShare size={18} />
        </button>

        <button
          onClick={() => setSaved(!saved)}
          className="hover:text-yellow-500 transition-colors"
        >
          {saved ? (
            <FaBookmark size={18} className="text-yellow-500" />
          ) : (
            <FaRegBookmark size={18} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
