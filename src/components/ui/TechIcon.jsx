import React from "react";

export default function TechIcon({ icon: Icon, name }) {
    return (
        <div className="flex flex-col gap-2 items-center smooth-hover custom-scale hover:cursor-pointer">
            <Icon className="w-8 h-8 md:w-12 md:h-12 icons-gradient" />
            <p className="bg-gradient bg-clip-text text-transparent text-sm md:text-base font-medium">{name}</p>
        </div>
    );
};