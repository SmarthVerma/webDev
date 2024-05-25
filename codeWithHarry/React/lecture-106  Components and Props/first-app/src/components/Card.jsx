import React from "react";

const Card = (color) => {
  return (
    <div className="">
      <div className="card border border-black bg-slate-300 inline-block p-2 w-40 h-60 text-clip overflow-clip rounded-md cursor-pointer hover:scale-105">
        <img
          className="text-center w-full rounded-md"
          src={color.url}
          alt=""
          width={90}
        />
        <div className="title text-center font-medium">{color.title}</div>
        <p className="disc text-center text-xs overflow-hidden text-clip  ">
          {color.disc}
        </p>
      </div>
    </div>
  );
};

export default Card;
