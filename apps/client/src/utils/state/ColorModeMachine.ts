import { createMachine } from "xstate";

export const ColorModeMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QGEAWBDAdjAKqsAtmAHQAyAllKgC4DEOA8gOJOkCiA2gAwC6ioABwD2sctXJDM-EAA9EAZgBsATmIBWABzz5mgOyKALIY0GDAGhABPRAFoATAY3EuStXYCMy9+8Uf3AX38LNCxcfCJiABF0ACcAa3pmVk5eaWFRcUlpOQQDdzV1DU1lNTV5LXkudwtrBHddAvl3OzV8lo1dDWUuRUCgkEwhCDhpEOwwPEIwNJExCSkkWUR3eVVTXWV5XSr69w61GtttAta1RQ1FF1PfNUDgjHHJiIoqahmM+ezENWVVRR0mgZlHkDD07IcEDZQep3Fw8htynZ5A47HcQGMwlMorE4u85llFjk9rpiOtNttvLpiQcrLZoa04fVNhokSi+v4gA */
    createMachine(
        {
            predictableActionArguments: true,
            id: "ChangeTheme",
            initial: "Light",
            schema: {
                events: {} as { type: "TOGGLE" },
            },
            states: {
                checkTheme: {
                    always: [
                        {
                            target: "Dark",
                            cond: () =>
                                localStorage.getItem("theme") === "Dark",
                        },
                        {
                            target: "Light",
                            cond: () =>
                                localStorage.getItem("theme") === "Light",
                        },
                        {
                            target: "Light",
                            cond: () => localStorage.getItem("theme") === null,
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
                    if (localStorage.getItem("theme") === "Dark") return;

                    localStorage.setItem("theme", "Dark");
                },
                setLight: () => {
                    if (localStorage.getItem("theme") === "Light") return;
                    localStorage.setItem("theme", "Light");
                },
            },
        },
    );
