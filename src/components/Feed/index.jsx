import React, { useEffect, useState } from "react";
import postlist from "../../../public/postlist.json";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { BiArrowBack } from "react-icons/bi";
import { MdOutlineCoffeeMaker } from "react-icons/md";

import api from "../../api/api";

async function getPost(postName) {
  const res = await api.get(`${postName}`);
  if (res) {
    return res.data;
  } else {
    return null;
  }
}

export default () => {
  const [isShowingContent, setIsShowingContent] = useState(false);
  const [thisPost, setThisPost] = useState(``);

  const renderList = () => {
    const newList = postlist.posts.map((element, index) => {
      const i = index.toString();

      return (
        <div key={index} className="mb-4">
          <span className="text-2xl font-medium text-sky-700 mr-1">
            {i.padStart(3, " ")}.{" "}
          </span>
          <button
            className="text-2xl hover:text-sky-500 transition font-medium text-sky-700 underline"
            onClick={() => {
              setIsShowingContent(true);
              getPost(`/_posts/${element.fileName}`).then(setThisPost);
            }}
          >
            {element.name}
          </button>
        </div>
      );
    });

    return newList;
  };

  const renderBackButton = () => {
    return (
      <button
        className="ml-auto bg-zinc-700 hover:bg-zinc-600 h-10 w-24 items-center justify-center flex rounded-md"
        onClick={() => {
          setIsShowingContent(false);
        }}
      >
        <BiArrowBack size={30} color="white" />
      </button>
    );
  };

  const renderPost = (post) => {
    return (
      <div className="max-w-screen-md">
        <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>
      </div>
    );
  };

  return (
    <div
      className="flex-grow flex flex-row bg-zinc-400 max-h-[82svh] mx-28 my-12 rounded-xl 
      overflow-hidden shadow-md max-w-screen-lg"
    >
      <div className="w-24 bg-zinc-900 pt-5 flex justify-center">
        <div className="w-6 h-6 bg-zinc-300 absolute rounded-xl ml-[-42px]" />
        <div className="w-6 h-6 bg-zinc-300 absolute rounded-xl ml-[-42px] mt-10" />
        <div className="w-6 h-6 bg-zinc-300 absolute rounded-xl ml-[-42px] mt-20" />
        <button
          className="h-12 w-12 hover:bg-zinc-600 bg-zinc-700 rounded-lg items-center justify-center flex mt-auto mb-6"
          onClick={() => {
            setIsShowingContent(true);
            getPost("/aboult.md").then(setThisPost);
          }}
        >
          <MdOutlineCoffeeMaker size={32} className="text-zinc-50" />
        </button>
      </div>

      <div className="flex-grow flex-col bg-zinc-50 shadow-inner px-6 py-7">
        <div className="flex flex-row items-center">
          <span className="font-nsmono text-4xl font-semibold">Posts</span>
          {isShowingContent ? renderBackButton() : <></>}
        </div>
        <div className="h-1 w-full bg-zinc-700 my-3 rounded-full" />

        <div className="px-3 py-6 h-[90%] overflow-y-auto">
          {isShowingContent ? renderPost(thisPost) : renderList()}

          <style jsx="true">
            {`
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>
        </div>

        <div className="h-1 w-full bg-zinc-700 mt-3 rounded-full" />
      </div>
    </div>
  );
};
