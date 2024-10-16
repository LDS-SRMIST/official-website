import React from "react";

interface MissionCardProps {
  title: string;
  text: string;
  className?: string; // Add className prop here
}

const MissionCard = ({ title, text, className }: MissionCardProps) => {
  return (
    <div className={`flex flex-col place-content-center place-items-center rounded-2xl gap-5 bg-black shadow-[#0077B5_6px_5px_1px_0px] hover:shadow-none transition-shadow duration-200 border border-white p-0 h-auto min-h-[25rem] max-w-full ${className}`}>
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-center text-lg font-medium text-white">{text}</p>
    </div>
  );
};

export default MissionCard;

