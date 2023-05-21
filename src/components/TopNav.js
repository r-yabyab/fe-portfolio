import React, { useState, useEffect } from "react";

function TopNav ({ 
    detectScrollPosition, 
    scrollToProjects, 
    scrollToTop, 
    scrollToBottom,
    contactClick,
}) {

    const [menu, setMenu] = useState(false)
    const [scrollShow, setScrollShow] = useState(false)

    const clickHandler = (e) => {
        setMenu(!menu)
        console.log(menu)
    }

    useEffect(() => {
        if (detectScrollPosition > 350) {
          setScrollShow(true);
        } else {
          setScrollShow(false);
        }
      }, [detectScrollPosition]);

    return (
        <>

            {/* <div className="max-lg:hidden relative pl-20 mt-32 -mb-40  text-center">
                <div className="mt-20 space-y-6 -ml-[800px] flex-col text-black font-bold text-2xl">
                    <div className="">Roderick Cayabyab</div>
                    <div className="">Web Developer</div>
                </div>
            </div> */}
            {/* <div className="fixed z-50"> */}
            <div className="fixed top-0 left-0 w-full z-50  bg-black text-white pt-3 pb-12 text-2xl">
                {/* <div className="ml-8 absolute"><span className="font-bold">Roderick Cayabyab</span> <span className="max-md:hidden">| Web Developer</span></div> */}
                <div className="ml-8 select-none absolute">
                    <span onClick={scrollToTop} className="hover:text-yellow-300 hover:cursor-pointer">Roderick Cayabyab </span>
                    {/* <span className={scrollShow ?  "fadein max-md:hidden" : " hover:pointer-events-none fadeout"}>| Web Developer</span> */}
                </div>
                {/* <div className="absolute font-bold left-[50%] -translate-x-1/2">Web Developer</div> */}
                <div className="absolute mr-8 right-0 ">
                    <div className="max-lg:hidden flex gap- [&>*]:pb-4 [&>*]:pt-3 [&>*]:-mt-3 [&>*]:pr-4 [&>*]:pl-4 text-md ">
                        <p onClick={scrollToProjects} className=" hover:bg-green-400 hover:cursor-pointer">Projects</p>
                        <button
                            disabled={contactClick ? true : false}
                            onClick={scrollToBottom}
                            className=" hover:bg-green-400 hover:cursor-pointer">
                            Contact
                        </button>
                        <p onClick={scrollToTop} className=" hover:bg-green-400 hover:cursor-pointer">Home</p>
                    </div>
                        <div
                        className="lg:hidden hover:cursor-pointer"
                        onClick={clickHandler}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor"
                            className={`${menu ? 'text-gray-400' : 'text-white'}  hover:text-gray-200`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <div className={`${menu ? '' : 'hidden'} absolute right-0 -mr-4 [&>*]:pr-8 [&>*]:pl-8 border-t-4 border-green-400 text-left top-12 bg-black flex  [&>*]:pt-2 [&>*]:pb-2 flex-col gap-0 `}>
                            <p onClick={scrollToTop} className=" hover:cursor-pointer hover:text-white hover:bg-green-400">Home</p>
                            <button
                                onClick={scrollToProjects}
                                className="hover:cursor-pointer hover:text-black hover:bg-green-400">
                                Projects
                            </button>
                            <button
                                disabled={contactClick ? true : false}
                                onClick={scrollToBottom}
                                className="hover:cursor-pointer hover:text-black hover:bg-green-400">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default TopNav;