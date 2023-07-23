"use client";
import React from "react";
import { TbAugmentedReality } from "react-icons/tb";

type Props = {
    sceneLocation: string;
};

function goToScene(location: string) {
    window.location.href = location;
}

export const LaunchARButton = ({ sceneLocation }: Props) => {
    return (
        <div className="py-2 text-primary font-bold">
            <button
                className="bg-spmagenta-dark text-white px-2 py-4 rounded-md"
                onClick={() => goToScene(sceneLocation)}
            >
                <span>
                    <TbAugmentedReality
                        className="inline-block mr-2"
                        size={40}
                    />
                </span>
                Launch the AR Experience
            </button>
        </div>
    );
};
