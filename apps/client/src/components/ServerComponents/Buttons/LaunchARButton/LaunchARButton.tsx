"use client";
import React from "react";
import { TbAugmentedReality } from "react-icons/tb";

export type LaunchARButtonProps = {
    sceneLocation: string;
    buttonText?: string;
};

function goToScene(location: string) {
    window.location.href = location;
}

export const LaunchARButton = ({
    sceneLocation,
    buttonText,
}: LaunchARButtonProps) => {
    if (buttonText !== undefined) {
        return (
            <div className="py-2 text-primary font-bold col-span-4 w-full">
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
                    {buttonText}
                </button>
            </div>
        );
    } else {
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
                    Launch AR Experience
                </button>
            </div>
        );
    }
};
