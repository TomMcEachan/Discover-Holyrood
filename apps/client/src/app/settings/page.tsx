"use client";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { SettingsToggle } from "@/components/ClientComponents/Settings/SettingsToggles/SettingsToggles";
import { GlobalStateContext, changeTheme } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

export default function Settings(): JSX.Element {
    const global = useContext(GlobalStateContext);

    return (
        <ContentWrapper>
            <PageTitle
                title="Settings"
                subtitle="Change your application settings here"
            />
            <div className="divider" />
            <h3 className="text-2xl font-bold pb-1">Theme</h3>
            <SettingsToggle
                label="Dark Mode"
                checked={false}
                onChange={() => {
                    global.colourModeMachine.send("TOGGLE");
                }}
            />
            <h3 className="text-2xl font-bold pb-1">Cookies</h3>
        </ContentWrapper>
    );
}
