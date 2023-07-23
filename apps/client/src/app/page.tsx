// Components Import
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";

export default function Home(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="Home"
                subtitle="Discover your Scottish Parliament"
            />
            <div className="divider" />
        </ContentWrapper>
    );
}
