import React from "react";

type Props = {
    children: React.ReactNode;
};

export const ClientWrapper = ({ children }: Props) => {
    return <>{children}</>;
};
