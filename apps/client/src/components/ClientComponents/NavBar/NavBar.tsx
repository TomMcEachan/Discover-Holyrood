"use client";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { GlobalStateContext, changeTheme } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { Logo } from "@/components/ServerComponents/Logo/Logo";
import { MdOutlineSearch } from "react-icons/md";
import { useSelector } from "@xstate/react";

export const Navbar = () => {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    return (
        <>
            <nav className="navbar fixed top-0 z-40 mb-0 border-b-2 border-primary bg-base-100 pb-0 text-primary">
                <div className="navbar-start">
                    <Link href="/" className="mx-2 text-xl font-bold">
                        {isThemeChange ? <Logo /> : <Logo darkMode={true} />}
                        <span className="text-primary sr-only">
                            Discover Holyrood Logo
                        </span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link href="/search">
                        <button className="mr-5 flex" id="search-bar-button">
                            <MdOutlineSearch size={40} />
                        </button>
                    </Link>

                    <button
                        id="hamburger-button"
                        className="mx-2 flex flex-col font-bold text-primary"
                        aria-label="Open Sidebar"
                        onClick={() => global.hamburgerMachine.send("SWITCH")}
                    >
                        <TbMenu2 size={40} className="self-center font-bold" />
                    </button>
                </div>
            </nav>
        </>
    );
};
