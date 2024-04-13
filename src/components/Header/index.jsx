import React from "react";
import logo from '../../../favicon.ico';

import { MdOutlineCoffeeMaker } from "react-icons/md";

export default () => {
  return (
    <div className="h-20 bg-zinc-900 flex items-center px-14 flex-row shadow-2xl">
      <div className="w-14 h-14 rounded-full bg-orange-50 items-center justify-center flex">
        <img className="w-10 h-10" src={logo} alt="logo-img" /> 
      </div>
      <span className="text-3xl font-nsmono font-semibold ml-10 text-zinc-50">Café Aleatôrio</span>
      <button 
        className="ml-auto w-52 py-1 px-5 items-center justify-center flex bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors"
        onClick={() => {alert("alou")}}>  
        <MdOutlineCoffeeMaker size={40} className="text-zinc-50"/>
        <span className="text-sm font-nsmono text-left ml-6 text-zinc-50">Aceita uma xícara?</span>
      </button>
    </div>
  )
}
