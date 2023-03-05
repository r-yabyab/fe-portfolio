import React, { useState } from "react";

function TopNav () {

    const [menu, setMenu] = useState(false)

    const clickHandler = (e) => {
        setMenu(!menu)
        console.log(menu)
    }

    return (
        <>

            {/* <div className="max-lg:hidden relative pl-20 mt-32 -mb-40  text-center">
                <div className="mt-20 space-y-6 -ml-[800px] flex-col text-black font-bold text-2xl">
                    <div className="">Roderick Cayabyab</div>
                    <div className="">Web Developer</div>
                </div>
            </div> */}

            <div className="relative bg-neutral-200 text-black pt-3 pb-12 text-2xl">
                <div className="ml-8 absolute"><span className="font-bold">Roderick Cayabyab</span> <span className="max-lg:hidden">| Web Developer</span></div>
                {/* <div className="absolute font-bold left-[50%] -translate-x-1/2">Web Developer</div> */}
                <div className="absolute mr-8 right-0 ">
                    <div className="max-lg:hidden flex gap-8 text-md ">
                        <p className="hover:text-blue-400 hover:cursor-pointer">Projects</p>
                        <p className="hover:text-blue-400 hover:cursor-pointer">About</p>
                        <p className="hover:text-blue-400 hover:cursor-pointer">Home</p>
                    </div>
                    <div
                        className="lg:hidden hover:cursor-pointer"
                        onClick={clickHandler}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor"
                            className={`${menu ? 'text-gray-400' : 'text-black'} hover:text-gray-200`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <div className={`${menu ? '' : 'hidden'} absolute right-0 top-14 bg-green-200 flex flex-col gap-4 [&>*]:hover:bg-blue-300`}>
                            <p className=" hover:cursor-pointer">Home</p>
                            <p className="">Projects</p>
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav;