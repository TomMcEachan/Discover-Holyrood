"use client";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components//PageTitle/PageTitle";
import { SettingsToggle } from "@/components/Buttons/SettingsToggles/SettingsToggles";
import { GlobalStateContext, changeTheme } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

export default function Settings(): JSX.Element {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    return (
        <ContentWrapper>
            <PageTitle
                title="Settings"
                subtitle="Change the application settings"
            />
            <div className="divider" />
            <h3 className="text-2xl font-bold pb-1">Theme</h3>
            {isThemeChange ? (
                <SettingsToggle
                    label="Dark Mode"
                    checked={true}
                    onChange={() => {
                        global.colourModeMachine.send("TOGGLE");
                    }}
                />
            ) : (
                <SettingsToggle
                    label="Dark Mode"
                    checked={false}
                    onChange={() => {
                        global.colourModeMachine.send("TOGGLE");
                    }}
                />
            )}

            <h3 className="text-2xl font-bold pb-1">Cookies</h3>
        </ContentWrapper>
    );
}
