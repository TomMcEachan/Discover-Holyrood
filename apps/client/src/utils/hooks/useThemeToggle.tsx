import { useContext } from "react";
import { GlobalStateContext, changeTheme } from "@/utils/providers/GlobalState";
import { useSelector } from "@xstate/react";

const useThemeToggle = () => {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    const toggleTheme = () => {
        global.colourModeMachine.send("TOGGLE");
    };

    return { isThemeChange, toggleTheme };
};

export default useThemeToggle;
