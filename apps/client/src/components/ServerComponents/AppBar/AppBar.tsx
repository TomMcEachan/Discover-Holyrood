import Link from "next/link";
import {
    TbAugmentedReality,
    TbHome2,
    TbSchool,
    TbBadgeVr,
} from "react-icons/tb";

export const AppBar = () => {
    return (
        <nav className="btm-nav btm-nav-md fixed bottom-0 z-40 border-t-2 border-primary bg-base-100 shadow-md text-md font-bold">
            <div className="flex flex-row justify-around">
                <Link href="/">
                    <button className="flex flex-col font-bold text-primary">
                        <TbHome2 size={25} className="self-center" />
                        <span>Home</span>
                    </button>
                </Link>
                <Link href="/ar">
                    <button className="flex flex-col font-bold text-primary">
                        <TbAugmentedReality size={25} className="self-center" />
                        <span>AR</span>
                    </button>
                </Link>
                <Link href="/vr">
                    <button className="flex flex-col font-bold text-primary">
                        <TbBadgeVr size={25} className="self-center" />
                        <span>VR Tour</span>
                    </button>
                </Link>
                <Link href="/learn">
                    <button className="flex flex-col font-bold text-primary">
                        <TbSchool size={25} className="self-center" />
                        <span>Learn</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};
