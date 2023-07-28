import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const ContentWrapper: React.FC<Props> = ({ children }) => {
    return (
        <main id="page-content" className="min-h-screen pb-40 md:mx-5 mx-0">
            {children}
        </main>
    );
};
