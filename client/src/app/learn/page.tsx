// Components Import
import { ArticleSearchComponent } from "@/components/Search/Articles/ArticleSearchComponent";
import { PageTitle } from "@/components/client-components/PageTitle/PageTitle";

export default function Learn(): JSX.Element {
    return (
        <main id="page-content" className="min-h-screen px-4 pb-40">
            <PageTitle
                title="Learn"
                subtitle="Find out about the Scottish Parliament"
            />
            <div className="divider" />
            <div>
                <ArticleSearchComponent />
            </div>
        </main>
    );
}
