import React from "react";

export default () => {
  return (
    <div className="flex-grow flex flex-row bg-zinc-400 h-auto w-auto mx-36 my-12 rounded-xl overflow-hidden shadow-md">
      <div className="w-24 bg-zinc-900 pt-16">
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl ml-[-22px]"/>    
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl mt-[40px] ml-[-22px]"/> 
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl mt-[80px] ml-[-22px]"/>
      </div>
      <div className="flex-grow bg-zinc-200 shadow-inner px-6 py-7">
        <span className="font-nsmono text-3xl font-semibold">Posts</span>
        <span>     o resto vem dps....</span>
      </div>
    </div>
  )
}
