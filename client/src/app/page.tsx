//Importing Font
import { Inter } from "next/font/google";

// Components Import
import { CategoryBadge } from "@/components/server-components/Buttons/CategoryBadge";
import { ContentWrapper } from "@/components/server-components/ContentWrapper/ContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
    return (
        <ContentWrapper>
            <div
                id="contentContainer"
                className="grid grid-cols-3 grid-rows-3 place-items-center gap-0"
            >
                <div className="col-span-3">
                    <h1 className="text-4xl font-bold">Welcome</h1>
                </div>
                <div className="col-span-3">
                    <h2 className="text-lg font-bold">
                        To the Scottish Parliament
                    </h2>
                </div>
                <div className="col-span-3">
                    <h3 className="text-2xl font-bold">Visitor App</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 place-items-center"></div>
        </ContentWrapper>
    );
}
