import { RiArrowDropDownLine, RiMenu3Line } from "react-icons/ri";
import { SiGrammarly } from "react-icons/si";

export default function Header() {
    return (
        <header className="w-full flex flex-col">
            <nav className="bg-white flex flex-col md:flex-row items-center justify-between border-b border-neutral-300/90 gap-4 md:gap-8 px-4 md:px-16 py-2 md:h-16 font-sans">

                <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 md:gap-10 flex-wrap">
                    <div className="flex gap-2 items-center">
                        <SiGrammarly className="text-[#15C39A]" size="2.5rem" />
                        <h1 className="text-black font-extrabold text-2xl">grammarly</h1>
                    </div>

                    <ul className="hidden 2xl:flex gap-8 text-black text-sm md:text-base items-center">
                        <li className="flex items-center hover:text-gray-700">
                            <a href="#" className="flex">
                                Why Grammarly
                                <RiArrowDropDownLine size="1.8rem" />
                            </a>
                        </li>
                        <li className="flex items-center hover:text-gray-700">
                            <a href="#" className="flex">
                                For Work
                                <RiArrowDropDownLine size="1.8rem" />
                            </a>
                        </li>
                        <li className="flex items-center hover:text-gray-700">
                            <a href="#" className="flex">
                                For Education
                                <RiArrowDropDownLine size="1.8rem" />
                            </a>
                        </li>
                        <li className="flex items-center hover:text-gray-700">
                            <a href="#">Compare Plans</a>
                        </li>
                        <li className="flex items-center hover:text-gray-700">
                            <a href="#" className="flex">
                                Tools & Guides
                                <RiArrowDropDownLine size="1.8rem" />
                            </a>
                        </li>
                    </ul>

                    <button className="block 2xl:hidden text-black focus:outline-none">
                        <RiMenu3Line size="1.75rem" />
                    </button>
                </div>

                <div className="w-full md:w-auto flex justify-around md:justify-end gap-4 font-bold flex-wrap mt-2 md:mt-0">
                    <button className="py-2 px-4 hover:bg-gray-100 rounded-md text-black font-bold">
                        <a href="#">My Grammarly</a>
                    </button>
                    <button className="bg-emerald-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200 shadow-md">
                        <a className="w-full" href="#">Start a Free Trial</a>
                    </button>
                </div>
            </nav>

            <section>
                <div className="h-14 px-16 bg-neutral-100 text-black font-sans hidden md:flex items-center gap-20">

                    <div>
                        <h3 className="font-bold text-2xl">Business</h3>
                    </div>

                    <div>
                        <ul className="hidden md:flex gap-8 text-black text-sm md:text-base items-center">
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#" className="flex items-center">Solutions <RiArrowDropDownLine /></a></li>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </header>
    );
}
