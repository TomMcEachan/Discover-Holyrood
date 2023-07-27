"use client";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

type Props = {
    backLocation: string;
};

const backToPreviousPage = () => {
    window.history.back();
};

export const BackButton = ({ backLocation }: Props) => {
    return (
        <div className="pt-2 text-primary flex">
            <button className="font-bold flex" onClick={backToPreviousPage}>
                <BsFillArrowLeftCircleFill
                    className="inline-block mr-2"
                    size={25}
                />
                <span className="">Back</span>
            </button>
        </div>
    );
};
