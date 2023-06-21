type Props = {
    name: string;
    onClick?: () => void;
};
export const GlobalFacetBadge = ({ name, onClick }: Props) => {
    return (
        <div>
            <button className="py-1 pr-1 mx-1" onClick={onClick}>
                <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs">
                    {name}
                </div>
            </button>
        </div>
    );
};
