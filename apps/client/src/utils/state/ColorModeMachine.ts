import { createMachine } from "xstate";

export const ColorModeMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QGEAWBDAdjAKqsAtmAHQAyAllKgC4DEOA8gOJOkCiA2gAwC6ioABwD2sctXJDM-EAA9EAZgBsATmIBWABzz5mgOyKALIY0GDAGhABPRAFoATAY3EuStXYCMy9+8Uf3AX38LNCxcfCJiABF0ACcAa3pmVk5eaWFRcUlpOQQDdzV1DU1lNTV5LXkudwtrBHddAvl3OzV8lo1dDWUuRUCgkEwhCDhpEOwwPEIwNJExCSkkWUR3eVVTXWV5XSr69w61GtttAta1RQ1FF1PfNUDgjHHJiIoqahmM+ezENWVVRR0mgZlHkDD07IcEDZQep3Fw8htynZ5A47HcQGMwlMorE4u85llFjk9rpiOtNttvLpiQcrLZoa04fVNhokSi+v4gA */
    createMachine(
        {
            predictableActionArguments: true,
            id: "ChangeTheme",
            initial: "setLight",
            schema: {
                events: {} as { type: "TOGGLE" },
            },
            states: {
                setLight: {
                    on: {
                        TOGGLE: {
                            target: "Light",
                            actions: ["setInitial"],
                        },
                    },
                },
                Light: {
                    on: {
                        TOGGLE: {
                            target: "Dark",
                            actions: ["setDark"],
                            cond: () =>
                                localStorage.getItem("theme") === "Light",
                        },
                    },
                },
                Dark: {
                    on: {
                        TOGGLE: {
                            target: "Light",
                            actions: ["setLight"],
                            cond: () =>
                                localStorage.getItem("theme") === "Dark",
                        },
                    },
                },
            },
        },
        {
            actions: {
                setDark: () => {
                    localStorage.setItem("theme", "Dark");
                },
                setLight: () => {
                    localStorage.setItem("theme", "Light");
                },
                setInitial: () => {
                    if (!localStorage.getItem("theme")) {
                        localStorage.setItem("theme", "Light");
                    }
                },
            },
        },
    );
