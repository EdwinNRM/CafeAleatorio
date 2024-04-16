import React from "react";
import postlist from '../../../public/postlist.json';

export default () => {
  const renderList = () => {
    const newList = postlist.names.map((element, index) => {
      const i = index.toString();
      console.log(`ola: [${i.padStart(3, '&nbsp')}]`)

      return (
        <div className="mb-4">
          <span className="text-2xl font-medium text-sky-700 mr-1">{i.padStart(3, ' ')}. </span>
          <button className="text-2xl font-medium text-sky-700 underline">{element}</button>
        </div>
      )
    })

    return newList
  }

  return (
    <div className="flex-grow flex flex-row bg-zinc-400 max-h-[82svh] mx-28 my-12 rounded-xl 
      overflow-hidden shadow-md max-w-screen-lg">
      <div className="w-24 bg-zinc-900 pt-16">
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl ml-[-22px]"/>    
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl mt-[40px] ml-[-22px]"/> 
        <div className="w-14 h-5 bg-zinc-400 z-10 absolute rounded-xl mt-[80px] ml-[-22px]"/> 
      </div>
      
      <div className="flex-grow flex-col bg-zinc-50 shadow-inner px-6 py-7">
        <span className="font-nsmono text-4xl font-semibold">Posts</span>
        <div className="h-1 w-full bg-zinc-700 my-3 rounded-full"/>        
        
        <div className="px-3 py-6 h-[90%] overflow-y-auto">
          {renderList()}

          <style jsx="true">
            {`
            ::-webkit-scrollbar-thumb {
              background: transparent;
            }
            `}
          </style>
        </div>
        
        <div className="h-1 w-full bg-zinc-700 mt-3 rounded-full"/>
      </div>
    </div>
  )
}
