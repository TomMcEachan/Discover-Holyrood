"use client";
import React from "react";
import {
    TbPlus,
    TbAugmentedReality,
    TbHome2,
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
        <div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
            tabIndex={0}
        >
            <div className="relative">
                {/* Small Fab Buttons */}
                {showFAB ? (
                    <div>
                        <Link
                            href="/ar"
                            className="fixed bottom-16 left-2 pb-0.5"
                        >
                            <button
                                className="rounded-full bg-accent shadow-lg animate-jump-in animate-once animate-ease-in-out animate-normal animate-fill-both"
                                onClick={handleFabClick}
                            >
                                <TbAugmentedReality
                                    className="text-2xl text-white m-1.5 animate-spin animate-once animate-ease-in-out animate-normal animate-fill-both"
                                    size={30}
                                />
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
                                    size={30}
                                />
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
                                    size={30}
                                />
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="animate-jump-out animate-once animate-ease-in-out animate-normal animate-fill-both"></div>
                )}
                {/* Main Fab Button */}
                <div>
                    <button
                        className="rounded-full bg-accent shadow-xl"
                        onClick={handleFabClick}
                    >
                        <label
                            className={`${
                                showFAB
                                    ? "swap swap-rotate swap-active"
                                    : "swap swap-rotate "
                            }`}
                        >
                            <TbPlus
                                className="text-2xl text-white m-1.5 swap-off"
                                size={45}
                            />
                            <TbMinus
                                className="text-2xl text-white m-1.5 swap-on"
                                size={45}
                            />
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
};
