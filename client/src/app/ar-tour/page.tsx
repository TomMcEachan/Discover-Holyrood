import React, { useRef } from "react";
import { PageTitle } from "@/components/client-components/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/server-components/ContentWrapper/ContentWrapper";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="AR Tour"
                subtitle="Take a tour of the Scottish Parliament"
            />
            <div className="divider" />
            <div></div>
        </ContentWrapper>
    );
}
