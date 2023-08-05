"use client";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { Logo } from "@/components/Logo/Logo";
import { MdOutlineSearch } from "react-icons/md";
import useThemeToggle from "@/utils/hooks/useThemeToggle";

export const Navbar = () => {
    const global = useContext(GlobalStateContext);
    const { theme } = useThemeToggle();

    return (
        <>
            <nav className="navbar fixed top-0 z-40 mb-0 border-b-2 border-primary bg-base-100 pb-0 text-primary">
                <div className="navbar-start">
                    <Link href="/" className="mx-2 text-xl font-bold">
                        {theme === "parliamentStylesLight" ||
                        theme === "null" ? (
                            <Logo darkMode={false} />
                        ) : (
                            <Logo darkMode={true} />
                        )}
                        <span className="sr-only">Discover Holyrood Logo</span>
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
