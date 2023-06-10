import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-mysecondary-200 drop-shadow"; 
    
    return (
        <nav>
            {/* MAIN NAV*/}
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-5`}>
                {/* INNER NAV BAR*/}
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE logo PART*/}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT SIDE pages and contact*/}
                        {isAboveMediumScreens ? (
                            <div className={`flex items-center w-full justify-end gap-10`}>
                                {/* pages LEFT RIGHT*/}
                                <div className={`${flexBetween} gap-8 text-lg`}>
                                    <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                    page="About Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                    page="Courses"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                    page="Register"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                </div>
                                <div>
                                    {/* contact RIGHT RIGHT*/}
                                    <ActionButton setSelectedPage={setSelectedPage}>sign up!</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                            className="rounded-full bg-myprimary-200 text-white p-3 hover:bg-myprimary-100 hover:text-black"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-7 w-7"/>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom z-40 h-full w-[250px] bg-mysecondary-200 drop-shadow-xl">
                    {/* close ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-7 w-7 text-mysecondary-100 hover:text-myprimary-200"/>
                        </button>
                    </div>
                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-xl">
                        <Link 
                            page="home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="about us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="courses"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="register"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar