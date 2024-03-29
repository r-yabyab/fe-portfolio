import React, { useState } from "react";

function BottomHeader1 ({ contactClick }) {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const email = 'cayabyabrr@yahoo.com'
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },3000)
    }

    return (
        <>
            {/* <div className="absolute bg-neutral-300 w-full pb-10 pt-10"> */}
            <div className={`${contactClick ? 'ratingAnimationToBlack' : ''} bg-zinc-800 relative text-white flex justify-center pb-28 pt-20`}>
                <div></div>
                <div className="flex flex-row gap-8">
                    <div className="absolute top-10 -translate-x-1/2 left-[50%]    font-semibold pb-4">Contacts</div>
                    <a
                        // title="https://www.linkedin.com/in/roderick-cayabyab-30a743158/" 
                        href='https://www.linkedin.com/in/roderick-cayabyab-30a743158/' rel="noreferrer" target='_blank'>
                        <div className="flex items-center gap-4 [&>div>svg]:hover:text-blue-300 [&>div]:hover:text-yellow-200">
                            <div><svg className="text-[#0072b1] " xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                            </div>
                            {/* <div>Roderick Cayabyab</div> */}
                        </div>
                    </a>
                    <div
                        onClick={handleCopy}
                        // className="flex select-none items-center hover:cursor-pointer gap-4 [&>div>svg]:hover:text-purple-400 [&>div]:hover:text-white">
                        className="flex select-none items-center hover:cursor-pointer gap-4 [&>div>svg]:hover:text-purple-400 [&>div]:hover:text-yellow-200">
                        <div>
                            <svg className=" text-purple-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                            {/* <div className="-mt-[26px] w-[32px] h-[20px] " /> */}
                        </div>
                        {/* <div>cayabyabrr@yahoo.com</div> */}

                    </div>
                    <div>
                        <a href='https://github.com/r-yabyab' rel="noreferrer" target='_blank'>
                            <svg className="hover:text-gray-400 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        {/* <div>
                            Github
                        </div> */}
                    </div>
                    <div className="flex gap-4 mt-12 -translate-x-1/2 left-[50%] absolute items-center ">
                        <p className="ml-8 text-green-500">{copied ? "Copied email to clipboard" : null}</p>
                        <svg className={copied ? "text-green-500 absolute" : "hidden"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                    </div>

                    <div className="absolute select-none left-2 flex flex-col bottom-2 text-zinc-500 text-sm tracking-tight">
                        <div>Powered by React and Vercel</div>
                        <div>© Roderick Cayabyab 2024</div>
                    </div>
                </div>


            </div>
            {/* </div> */}
        </>
    )
}

export default BottomHeader1;