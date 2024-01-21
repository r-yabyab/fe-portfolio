import React from "react";
// import vtcLogoFull from "../../photos/vertcoin-vtc-logo-full-vertical.svg"
import vtcLogo from "../../photos/vertcoin-vtc-logo.svg"
import rvnLogo from "../../photos/ravencoin-rvn-logo.svg"


function OpenSource () {

    return(
        <>
        <div>opensource</div>

        <div className="md:pt-20 max-md:mt-20 pb-48">
                    <div className="text-3xl text-center font-bold">Open Source Contributions</div>

                    <div className="text-center pb-12 mt-8 max-w-[1000px] m-auto px-20">Throughout my years as an active cryptocurrency user, I was blessed to be apart of many different communities that aimed to push the boundaries of finance. 
                    While most projects have solid teams updating their blockchains,
                    I found that some of these projects' websites haven't kept up with newer projects. By fixing up their websites, whether it be adding new buttons or tweaking navigation bars, the project can reflect their efforts to newcomers landing on these websites.</div>

                    <div className="
                    max-md:flex  max-md:flex-col max-md:text-center max-md:gap-y-8 max-md:justify-center pt-8
                    md:
                    ">

                    <div>
                        <div className="w-full md:ml-8 text-lg p-2 rounded-md m-auto align-middle items-center font-bold">
                            Merged PRs
                            </div>

                        <div className="md:flex-row max-md:flex-col max-md:text-center max-md:gap-y-8 max-md:justify-center  pt-8">
                            <div className="flex flex-row flex-wrap justify-center gap-10
                                lg:[&>div]:w-[600px] max-lg:[&>div]:w-[700px] [&>div]:bg-zinc-200 [&>div]:p-6 [&>div]:rounded-md basis-1/4
                                ">
                                <div>
                                    <div className="flex  gap-2 items-center mb-4 mt-2 pb-4 border-b-2 border-zinc-400">
                                        <img src={vtcLogo} className="w-[30px]" />
                                        <a
                                            className="hover:cursor-pointer hover:text-blue-600 text-blue-400 "
                                            href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/8" target="__blank">
                                            Top navbar breakpoint issue @ 767px <span className="text-zinc-400">#8</span>
                                        </a>
                                    </div>
                                    <div>
                                        <li>Breakpoints for hideMobile and hideDesktop didn't account for 767px.</li>
                                        <li>Set h3 media query from 768px to 767px to match other breakpoints.</li>
                                    </div>
                                </div>
                                <div>
                                        <div className="flex  gap-2 items-center mb-4 mt-2 pb-4 border-b-2 border-zinc-400">
                                        <img src={vtcLogo} className="w-[30px]" />
                                    <a
                                        className="hover:cursor-pointer hover:text-blue-600 text-blue-400"
                                        href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/9" target="__blank"
                                    >
                                        
                                        Added menu button for mobile view <span className="text-zinc-400">#9</span>
                                    </a>
                                    </div>
                                    <div>
                                        <li>Replaced mobile top-navbar page list with menu button. For desktop, menu button shows when Download Wallet button is about to clip over the page list.</li>
                                        <li>Added some padding to desktop top-navbar.</li>
                                        <li>Moved mobile top-navbar vtc logo up a bit to align with button.</li>
                                    </div>
                                </div>
                                <div>
                                <div className="flex  gap-2 items-center mb-4 mt-2 pb-4 border-b-2 border-zinc-400">
                                        <img src={vtcLogo} className="w-[30px]" />
                                    <a
                                        className="hover:cursor-pointer hover:text-blue-600 text-blue-400 "
                                        href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/11" target="__blank"
                                    >
                                        Fixed vtc logo sizing for mobile navbar <span className="text-zinc-400">#11</span>
                                    </a>
                                    </div>
                                    <div>
                                        <li>Fixed bug where VTC logo on header was squished for mobile users</li>
                                    </div>
                                </div>
                                <div>
                                <div className="flex  gap-2 items-center mb-4 mt-2 pb-4 border-b-2 border-zinc-400">
                                        <img src={vtcLogo} className="w-[30px]" />
                                    <a
                                        className="hover:cursor-pointer hover:text-blue-600 text-blue-400"
                                        href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/12" target="__blank"
                                    >
                                        Cleaned up topnav for mobile <span className="text-zinc-400">#12</span>
                                    </a>
                                    </div>
                                    <div>
                                        <li>Changed menu dropdown bg-color to footer color</li>
                                        <li>Desktop and mobile view both show VTC logo with "Vertcoin" text</li>
                                        <li>Removed "Menu" text from menu button for smallest mobile view</li>
                                        <li>Navbar updates applied to every page</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div className="w-full md:ml-8 mt-16 text-lg p-2 rounded-md m-auto align-middle items-center font-bold">
                            PRs Under Review
                            </div>
                        <div className="flex flex-row-reverse flex-wrap justify-center gap-10
                                md:[&>div]:w-[600px] [&>div]:bg-zinc-200 [&>div]:p-6 [&>div]:rounded-md basis-1/4
                                ">
                            <div>
                                <div className="flex  gap-2 items-center mb-4 mt-2">
                                    <img src={rvnLogo} className="w-[30px]" />
                                    <a
                                        className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                        href="https://github.com/RavenProject/ravenproject.github.io/pull/265" target="__blank">
                                        Fixed twitter iframe centering using tailwind (ravencoin.org) #265
                                    </a>
                                </div>

                                <div>
                                    <li>Centered twitter widget on homepage</li>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        

                </div>

        </>
    )
}

export default OpenSource;