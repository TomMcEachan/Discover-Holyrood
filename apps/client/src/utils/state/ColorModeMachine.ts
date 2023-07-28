import { createMachine } from "xstate";

const isClientSide = typeof window !== "undefined";

export const ColorModeMachine = createMachine(
    {
        id: "ChangeTheme",
        initial: "checkTheme",
        states: {
            checkTheme: {
                always: [
                    {
                        target: "Dark",
                        cond: () =>
                            isClientSide &&
                            localStorage.getItem("theme") === "Dark",
                    },
                    {
                        target: "Light",
                        cond: () =>
                            isClientSide &&
                            (localStorage.getItem("theme") === "Light" ||
                                localStorage.getItem("theme") === null), // If no theme found in local storage, default to "Light"
                    },
                ],
            },
            Light: {
                on: {
                    TOGGLE: {
                        target: "Dark",
                        actions: ["setDark"],
                    },
                },
            },
            Dark: {
                on: {
                    TOGGLE: {
                        target: "Light",
                        actions: ["setLight"],
                    },
                },
            },
        },
    },
    {
        actions: {
            setDark: () => {
                if (isClientSide && localStorage.getItem("theme") === "Dark") {
                    return;
                }
                if (isClientSide) {
                    localStorage.setItem("theme", "Dark");
                }
            },
            setLight: () => {
                if (isClientSide && localStorage.getItem("theme") === "Light") {
                    return;
                }
                if (isClientSide) {
                    localStorage.setItem("theme", "Light");
                }
            },
        },
    },
);
