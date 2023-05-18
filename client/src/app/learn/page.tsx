// Components Import
import { ArticleSearchComponent } from "@/components/Search/Articles/ArticleSearchComponent";
import { PageTitle } from "@/components/server-components/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/server-components/ContentWrapper/ContentWrapper";

export default function Learn(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="Learn"
                subtitle="Find out about the Scottish Parliament"
            />
            <div className="divider" />
            <div>
                <ArticleSearchComponent />
            </div>
        </ContentWrapper>
    );
}
