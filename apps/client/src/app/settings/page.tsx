"use client";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components//PageTitle/PageTitle";
import { SettingsToggle } from "@/components/Buttons/SettingsToggles/SettingsToggles";
import useThemeToggle from "@/utils/hooks/useThemeToggle";
import { toggleTheme, Theme } from "@/utils/providers/Theme";

export default function Settings(): JSX.Element {
    const { setTheme } = useThemeToggle();

    const setNewTheme = () => {
        const newTheme: Theme = toggleTheme()?.toString() as Theme;

        setTheme(newTheme);
    };

    return (
        <ContentWrapper>
            <PageTitle
                title="Settings"
                subtitle="Change the application settings"
            />
            <div className="divider" />
            <h3 className="text-2xl font-bold pb-1">Theme</h3>
            <SettingsToggle
                label="Dark Mode"
                onChange={setNewTheme}
                checked={true}
            />
        </ContentWrapper>
    );
}
