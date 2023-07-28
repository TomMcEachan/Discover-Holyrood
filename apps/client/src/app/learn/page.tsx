// Components Import
import { ContentSearchComponent } from "@/components/Search/Content/ContentSearchComponent";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";

export default function Learn(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="Learn"
                subtitle="Find out about the Scottish Parliament"
            />
            <div className="divider" />
            <div>
                <ContentSearchComponent indexName="articles" />
            </div>
        </ContentWrapper>
    );
}
