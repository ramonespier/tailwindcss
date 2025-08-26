import { RiArrowDropDownLine } from "react-icons/ri";
import { SiGrammarly } from 'react-icons/si';

export default function Header() {
    return (
        <header className="mx-auto flex flex-col">
            <nav className="h-16 bg-white flex px-15 gap-10 items-center border-b border-b-neutral-300/90">
                <div className=" container mx-auto flex items-center gap-15">

                    <div className="flex gap-2 items-center">
                        <SiGrammarly size={40} color="#15C39A" />
                        <h1 className="text-black font-extrabold text-xl">grammarly</h1>
                    </div>

                    <ul className="flex gap-14 text-black">
                        <li className="flex items-center">Why Grammarly<RiArrowDropDownLine size={30} /></li>
                        <li className="flex items-center">For Work<RiArrowDropDownLine size={30} /></li>
                        <li className="flex items-center">For Education<RiArrowDropDownLine size={30} /></li>
                        <li className="flex items-center">Compare Plans</li>
                        <li className="flex items-center">Tools & Guides<RiArrowDropDownLine size={30} /></li>
                    </ul>
                </div>

                <div className="flex justify-between gap-10 text-black mx-auto font-bold">
                    <button className="">
                        <a className="w-full" href="#">My Grammarly</a>
                    </button>
                    <button className="">
                        <a className="w-full" href="#">Start a Free Trial</a>
                    </button>
                </div>

            </nav>
            <section>
                <div className="h-14 bg-neutral-100">


                </div>
            </section>
        </header>
    )
}