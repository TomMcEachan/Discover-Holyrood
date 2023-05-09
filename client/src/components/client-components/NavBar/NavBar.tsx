"use client";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { Logo } from "@/components/server-components/Logo";
import { MdOutlineSearch } from "react-icons/md";
import { useSelector } from "@xstate/react";
import { useRef, useEffect } from "react";

const searchOpen = (state: any) => {
    return state.matches("Closed");
};

export const Navbar = () => {
    const global = useContext(GlobalStateContext);
    const searchIsOpen = useSelector(global.globalSearchMachine, searchOpen);

    return (
        <>
            <nav className="navbar fixed top-0 z-40 mb-0 border-b-2 border-primary bg-base-100 pb-0 text-primary">
                <div className="navbar-start">
                    <Link href="/" className="mx-2 text-xl font-bold">
                        <Logo />
                    </Link>
                </div>
                <div className="navbar-end">
                    <button
                        className="mr-5"
                        onClick={() =>
                            global.globalSearchMachine.send("SWITCH")
                        }
                    >
                        <MdOutlineSearch size={35} id="search-bar-icon" />
                    </button>
                    <button
                        id="hamburger-button"
                        className="mx-2 flex flex-col font-bold text-primary"
                        aria-label="Open Sidebar"
                        onClick={() => global.hamburgerMachine.send("SWITCH")}
                    >
                        <TbMenu2 size={40} className="self-center font-bold" />
                        <span className="text-primary" />
                    </button>
                </div>
            </nav>
        </>
    );
};
