"use client";
import React from "react";
import {
    TbPlus,
    TbAugmentedReality,
    TbSchool,
    TbBadgeVr,
    TbMinus,
} from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

type Props = {};

export const FloatingButtons = (props: Props) => {
    const [showFAB, setShowFab] = useState(false);

    const handleFabClick = () => {
        if (!showFAB) {
            setShowFab(true);
        } else {
            setShowFab(false);
        }
    };

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="relative">
                {/* Small Fab Buttons */}
                {showFAB ? (
                    <div>
                        <Link
                            href="/ar"
                            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 pb-0.5"
                        >
                            <button
                                className="rounded-full bg-accent shadow-lg animate-jump-in animate-once animate-ease-in-out animate-normal animate-fill-both"
                                onClick={handleFabClick}
                            >
                                <TbAugmentedReality
                                    className="text-2xl text-white m-1.5 animate-spin animate-once animate-ease-in-out animate-normal animate-fill-both"
                                    size={40}
                                />
                                <span className="sr-only">
                                    Go to Augmented Reality Page
                                </span>
                            </button>
                        </Link>
                        <Link
                            href="/learn"
                            className="fixed bottom-10 right-14 pb-0.5 animate-jump-in animate-once animate-ease-in-out animate-normal animate-fill-"
                        >
                            <button
                                className="rounded-full bg-accent shadow-lg"
                                onClick={handleFabClick}
                            >
                                <TbSchool
                                    className="text-2xl text-white m-1.5 animate-spin animate-once animate-ease-in-out animate-normal animate-fill-"
                                    size={40}
                                />
                                <span className="sr-only">
                                    Go to Learning Page
                                </span>
                            </button>
                        </Link>
                        <Link
                            href="/vr"
                            className="fixed bottom-10 left-14 pb-0.5 animate-jump-in animate-once animate-ease-in-out animate-normal animate-fill-"
                        >
                            <button
                                className="rounded-full bg-accent shadow-lg animate-spin animate-once animate-ease-in-out animate-normal animate-fill-"
                                onClick={handleFabClick}
                            >
                                <TbBadgeVr
                                    className="text-2xl text-white m-1.5"
                                    size={40}
                                />
                                <span className="sr-only">
                                    Go to VR Tour Page
                                </span>
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="animate-jump-out animate-once animate-ease-in-out animate-normal animate-fill-both"></div>
                )}
                {/* Main Fab Button */}
                <div>
                    <div
                        className="rounded-full bg-accent shadow-xl"
                        onClick={handleFabClick}
                    >
                        <span className="sr-only">Open up navigation menu</span>
                        <div
                            className={`${
                                showFAB
                                    ? "swap swap-rotate swap-active"
                                    : "swap swap-rotate "
                            }`}
                        >
                            <TbPlus
                                className="text-2xl text-white m-1.5 swap-off"
                                size={50}
                            />
                            <TbMinus
                                className="text-2xl text-white m-1.5 swap-on"
                                size={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
