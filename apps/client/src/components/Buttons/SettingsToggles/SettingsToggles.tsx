"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

type Props = {
    label: string;
    checked: boolean;
    onChange: () => void;
};

export const SettingsToggle = ({ label, checked, onChange }: Props) => {
    const [enabled, setEnabled] = useState(checked);

    function change() {
        setEnabled(!enabled);
        onChange();
    }

    return (
        <div className="flex flex-col justify-end pb-4">
            <Switch.Group>
                <div className="flex">
                    {enabled ? (
                        <>
                            <IoSunnySharp
                                size={20}
                                className="mr-2 self-center text-yellow-500 transition"
                            />
                            <Switch.Label className="font-bold text-primary pr-4 inline">
                                Dark Mode :
                            </Switch.Label>
                        </>
                    ) : (
                        <>
                            <IoMoon
                                size={20}
                                className="mr-2 self-center text-blue-100 transition"
                            />
                            <Switch.Label className="font-bold text-primary pr-4 inline">
                                Dark Mode :
                            </Switch.Label>
                        </>
                    )}
                    <Switch
                        id="color-toggle-button"
                        checked={enabled}
                        onChange={change}
                        className={`${
                            enabled ? "bg-accent" : "bg-gray-400"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">{label}</span>
                        <span
                            className={`${
                                enabled ? "translate-x-6" : "translate-x-1"
                            } 
                                inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    );
};
