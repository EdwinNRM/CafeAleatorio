import React from "react";

import Header from "../../components/Header";
import Feed from "../../components/Feed";

export default () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center bg-zinc-300">
        <Feed />
      </div>
    </div>
  )
}
