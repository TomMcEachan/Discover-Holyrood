type Props = {
    title: string;
    subtitle: string;
};

export const PageTitle = ({ title, subtitle }: Props) => {
    return (
        <div id="page-title-content" className="pt-2">
            <h1
                className="text-4xl md:text-6xl font-bold text-base-content"
                id="page-title"
            >
                {title}
            </h1>
            <h2
                className="mt-2 text-lg md:text-xl text-base-content"
                id="page-subtitle"
            >
                {subtitle}
            </h2>
        </div>
    );
};
