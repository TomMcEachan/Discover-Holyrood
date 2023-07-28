"use client";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { ColorToggle } from "@/components/Buttons/ColorToggle/ColorToggle";
import { useContext } from "react";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useSelector } from "@xstate/react";

const menuOpen = (state: any) => {
    return state.matches("Open");
};

export const Sidebar = () => {
    const global = useContext(GlobalStateContext);
    const menuIsOpen = useSelector(global.hamburgerMachine, menuOpen);

    const menuRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !(menuRef.current?.contains(e.target as Element) ?? false) &&
                menuIsOpen
            ) {
                global.hamburgerMachine.send("SWITCH");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return menuIsOpen ? (
        <div className="absolute z-50" aria-live="polite">
            <span
                id="overlay"
                className="fixed top-0 left-0 z-50 h-full w-[30%] bg-primary opacity-30"
            />
            <nav
                role="dialog"
                className="fixed top-0 right-0 z-20 flex h-full w-[70%] flex-col justify-between bg-primary"
                ref={menuRef}
            >
                <button
                    className="absolute top-0 right-0"
                    id="hamburger-close-button"
                >
                    <IoClose
                        size={40}
                        className="mx-4 my-6 self-center text-base-100"
                        aria-label="Close Sidebar"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    />
                </button>
                <ul className="menu mt-14 font-bold text-base-100">
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link id="settings-button" href="/settings">
                            <span className="sr-only">An external link</span>
                            <FaLink size={20} className="self-center" />
                            Change App Settings
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link id="vr-tour-button" href="/vr">
                            <span className="sr-only">An external link</span>
                            <FaLink size={20} className="self-center" />
                            Watch VR Tour
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="book-tour-tickets-button"
                            href="https://www.parliament.scot/visit/tours"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">An external link</span>
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Book Tour Tickets
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="book-business-tickets-button"
                            href="https://www.parliament.scot/visit/tickets-for-debates-and-meetings"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">An external link</span>
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Book Business Tickets
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="book-business-tickets-button"
                            href="https://www.youtube.com/user/ScottishParl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">An external link</span>
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Watch Parliament on Youtube
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="book-business-tickets-button"
                            href="https://scottishparliament.podbean.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">An external link</span>
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Listen to Parliament Podcasts
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="main-website-button"
                            href="https://www.parliament.scot/visit/plan-your-visit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Check Opening Times
                        </Link>
                    </li>
                    <li
                        className="border-b-2 border-base-100 border-opacity-20 hover:bg-accent hover:bg-opacity-50"
                        onClick={() => {
                            global.hamburgerMachine.send("SWITCH");
                        }}
                    >
                        <Link
                            id="main-website-button"
                            href="https://www.parliament.scot"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">An external link</span>
                            <FaExternalLinkAlt
                                size={20}
                                className="self-center "
                            />
                            Visit Main Website
                        </Link>
                    </li>
                </ul>
                <ColorToggle />
            </nav>
        </div>
    ) : (
        <></>
    );
};
