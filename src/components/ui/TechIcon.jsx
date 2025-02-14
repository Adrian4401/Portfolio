import React from "react";

export default function TechIcon({ icon: Icon, name }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Icon className="w-12 h-12 icons-gradient" />
            <p className="bg-gradient bg-clip-text text-transparent text-base font-medium">{name}</p>
        </div>
    );
};