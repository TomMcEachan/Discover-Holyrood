"use client";

import { Switch } from "@headlessui/react";
import { IoMoon, IoSunnySharp } from "react-icons/io5";
import { GlobalStateContext, changeTheme } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

export const ColorToggle = () => {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    return (
        <div className="flex flex-col justify-end pb-4">
            <Switch.Group>
                <div className="ml-4 flex">
                    {isThemeChange ? (
                        <>
                            <IoMoon
                                size={20}
                                className="mr-2 self-center text-blue-100 transition"
                            />
                            <Switch.Label className="pr-2 font-bold text-base-100">
                                Dark Mode{" "}
                            </Switch.Label>
                        </>
                    ) : (
                        <>
                            <IoSunnySharp
                                size={20}
                                className="mr-2 self-center text-yellow-500 transition"
                            />
                            <Switch.Label className="pr-2 font-bold text-base-100">
                                Light Mode{" "}
                            </Switch.Label>
                        </>
                    )}
                    <Switch
                        id="color-toggle-button"
                        checked={isThemeChange}
                        onChange={() => {
                            global.colourModeMachine.send("TOGGLE");
                        }}
                        className={`${
                            isThemeChange ? "bg-accent" : "bg-gray-400"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Toggle Dark Mode</span>
                        <span
                            className={`${
                                isThemeChange
                                    ? "translate-x-6"
                                    : "translate-x-1"
                            } 
                                inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    );
};
