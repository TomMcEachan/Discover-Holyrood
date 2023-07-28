import Link from "next/link";
import {
    TbAugmentedReality,
    TbHome2,
    TbSchool,
    TbBadgeVr,
} from "react-icons/tb";

export const AppBar = () => {
    return (
        <nav className="btm-nav btm-nav-sm md:btm-nav-md  bottom-0 z-40 border-t-2 border-primary bg-base-100 shadow-md text-md font-bold sticky">
            <div className="flex flex-row justify-around">
                <Link href="/">
                    <button className="flex flex-col font-bold text-primary">
                        <TbHome2 size={35} className="self-center" />
                        <span className="sr-only">Home</span>
                    </button>
                </Link>
                <Link href="/ar">
                    <button className="flex flex-col font-bold text-primary">
                        <TbAugmentedReality size={35} className="self-center" />
                        <span className="sr-only">AR</span>
                    </button>
                </Link>
                <Link href="/vr">
                    <button className="flex flex-col font-bold text-primary">
                        <TbBadgeVr size={35} className="self-center" />
                        <span className="sr-only">VR Tour</span>
                    </button>
                </Link>
                <Link href="/learn">
                    <button className="flex flex-col font-bold text-primary">
                        <TbSchool size={35} className="self-center" />
                        <span className="sr-only">Learn</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};
