import React, {useState} from "react";

import stockshapes from '../../photos/stockshapes.png'
import ssFast from '../../photos/ss-fast-gif.gif'
import ssSlow from '../../photos/ss-slow-gif.gif'
// import rainbowFront from '../photos/rainbow-darkness-front.png'
// import rainbowBack from '../photos/rainbow-darkness-back.png'
import rCover from '../../photos/r-cover.png'
// import rGif from '../photos/r-gif.gif'
import rGif1 from '../../photos/r-gif1.gif'
import stocksh from '../../photos/stocksh.gif'
import nt8screenshot from '../../photos/nt8-screenshot.png'

// logos
// import rainbowLogo from '../photos/logo-r.ico'
import rainbowLogo from '../../photos/r1-logo192.png'
// import rainbowEye from '../photos/logo512.png'
import stockshapesLogo from '../../photos/ss-logo512.png'
import nt8Logo from '../../photos/nt-logo.webp'
import tradingBot from '../../photos/algo-trader.png'
import colors from '../../photos/colors.png'

function Projects () {
    const [gifToggle, setGifToggle] = useState(false)
return(
    <>
    <div>Projects test</div>

    {/* <div ref={projectsRef} className="relative bg-neutral-200 bg-contain pt-10 mt-20"> */}
    <div className="relative  bg-contain pt-10 mt-20">

<div className="text-center flex flex-col justify-center items-center gap-4 pt-10 pb-8 ">
    <div className="text-2xl font-bold ">Projects

                               {/* <span
        onClick={e => setGifToggle(!gifToggle)}
        className={`${gifToggle ? " text-green-400  " : "text-red-400"} items-center justify-center mt-1 ml-2 absolute hover:cursor-pointer select-none  text-sm`}>
        {gifToggle ? '[Gifs on]' : '[Gifs off]'}
    </span> */}
    </div>
{/* <div>My websites are hosted on my k8s cluster on AWS EC2 instances. Although my hosting solution with k8s may be overkill, I find it interesting</div> */}

    {/* <div
        onClick={e => setGifToggle(!gifToggle)}
        className={`${gifToggle ? " text-green-400  " : "text-red-400"} hover:cursor-pointer select-none  text-sm`}>
        [Gifs on]
    </div> */}
</div>

{/* Projects Container */}
<div className="
    lg:flex lg:flex-col-reverse lg:space-x-[0px] lg:justify-center lg:items-center lg:[&>div]:gap-24
    max-w-[1400px] lg:gap-20 pt-8
    max-lg:[&>div]:flex-col max-lg:flex-col-reverse max-lg:flex max-lg:space-y-[100px] max-lg:text-center 
    [&>div>div]:m-auto  min-w-[100%] align-middle
    pb-10
    ">
    {/* <div className="absolute bg-neutral-200 w-screen h-full" /> */}
    

    
    {/* Stock Shapes */}
    <div className="relative text-left [&>div]:max-w-[400px] max-lg:[&>div]:w-[400px]
        flex
        ">
        <div
            // onMouseOver={imgMouseOver}
            // onMouseLeave={imgMouseLeave}
            className="relative w-[80%] max-w-[500px] text-xl font-bold
                  hover:cursor-pointer  select-none
                  group
                ">

            <div 
                             onMouseEnter={() => setGifToggle(true)}
                             onMouseLeave={() =>setGifToggle(false)} 
                className="absolute  
                opacity-0 group-hover:opacity-100
                group-hover:bg-slate-200 group-hover:bg-opacity-60  hover:bg-opacity-90  h-full w-[50%]  left-0">
                <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/">
                    <div className="hover:bg-black hover:text-white w-full h-full  ">

                        <div className="absolute  gap-2 flex flex-col items-center text-center 
                            right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                            <div>Live Site</div>
                        <div><img className="w-[40px]" src={stockshapesLogo} alt="stockshapes logo" /></div>
                    </div>
                    
                    </div>
                </a>
            </div>
            <div
                 onMouseEnter={() => setGifToggle(true)}
                 onMouseLeave={() =>setGifToggle(false)} 
                className="absolute 
                opacity-0 group-hover:opacity-100 
                group-hover:bg-slate-200 group-hover:bg-opacity-60 h-full w-[50%] right-0">
                {/* <div className="absolute w-full h-[50%] hover:bg-black hover:text-white top-0">
                    <div className="absolute gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                        <div>
                            Client-side
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div> */}
                <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/cloudstock">
                <div className="absolute h-full w-full hover:bg-black hover:text-white bottom-0">
                    <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                        <div>
                            {/* Server-side */}
                            Github (client)
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                </a>

            </div>
            {/* <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/"> */}
            {/* <img className=" aspect-square object-cover" src={CloudStock} alt="Rainbow Darkness.png" /></a> */}
            {/* <img className=" aspect-square object-cover" src={stockshapes} alt="Rainbow Darkness.png" /></a> */}
            { }
            {/* vvv This doesn't work for some reason, it turns all the elements above as opacity-20 */}
            {/* <div className={`${imgHover ? "opacity-20" :null } h-[400px] flex flex-col gap-8 items-center justify-center bg-white`}> */}
            <div className={gifToggle ? 'h-[400px] flex flex-col gap-8 items-center justify-center bg-zinc-800' : 'hidden'}>
                <img className="  object-cover" src={ssSlow} alt="stockshapes gif 1" />
                <img className="  object-cover" src={stocksh} alt="stockshapes gif 2" />
            </div>
            <img className={gifToggle ? 'hidden' : " aspect-square h-[400px] object-cover"} src={stockshapes} alt="Rainbow Darkness.png" />

            {/* </a> */}
            <div className="
                    absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                    pointer-events-none
                    ">
                Go to live site!</div>
        </div>


        <div className="">
        <div className=" max-lg:pt-8 text-xl font-bold text-center mb-4  ">
        <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/">
            <div className="flex gap-x-3 justify-center w-full bg-blue-200 p-2 rounded-md m-auto  align-middle items-center">
            <img src={stockshapesLogo} width="26" alt="Rainbow Darkness Logo" />
            <div>Stock Shapes</div>
            </div>
            </a>
        </div>
            <div className="font-semibold">React | Node.js | AWS EC2</div>
            {/* <div className="">Real-time stock & future updates with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
            {/* <div className="">Real-time stock prices with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
            <div className="">Portable & snappy stock prices. Aid your trading sessions by resizing the browser / stock quotes to your liking. Data provided by <i>finnhub.io</i> and <i>IEX cloud</i>.
            {/* <br/> <span className="text-red-600">*Live data shows on weekdays from 6:30AM - 1:30PM PST.</span></div> */}
            <br/> <span className="text-red-600">*Intraday websocket prices not available due to increases in API costs</span></div>
            {/* <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                onClick={boolHandler}
            >Details</div> */}
            <div
                // onClick={boolHandler} 
                className=
                // {boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}
                {"pt-8"}
            >
                {/*[vers3] Building Stock Shapes gave me experience on how to navigate sparsely written API documentation with broken endpoints. It also shed light on why free stock tracking apps don't provide consistently fast price updates-- It's expensive. */}
                Building Stock Shapes made me realize that fast & snappy prices are best fitted for private-use. Making the data public calls for hacky workarounds, and integrating additional data (e.g. Nasdaq & S&P500 futures) requires steep licensing fees. 
                {/* <br/>To provide 100% uptime, I had to mitigate 429 errors by writing pm2 scripts on EC2 as iexCloud's SSE connections close only when the node.js app terminates. */}
                {/*[vers1] Pulls data from IEX Cloud API, uses server-sent-events (SSE) to feed live price updates to clients. Serverside deployed to EC2 as a way to accomodate live events that serverless computing cannot support out the box. $50 a month for my API costs, one session from market open to close tends to run around $1-8 per user that displays 5 stocks. Currently working on optimizing API calls to minimize costs. */}
            </div>
        </div>
    </div>

{/* NT8 */}
<div className="relative text-left [&>div]:max-w-[400px] max-lg:[&>div]:w-[400px]
        flex
        ">
        <div
            // onMouseOver={imgMouseOver}
            // onMouseLeave={imgMouseLeave}
            className="relative w-[80%] max-w-[500px] text-xl font-bold
                  hover:cursor-pointer  select-none
                  group
                ">

            {/* <div className="absolute  
                opacity-0 group-hover:opacity-100
                group-hover:bg-slate-200 group-hover:bg-opacity-60  hover:bg-opacity-90  h-full w-full  left-0">
                <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/">
                    <div className="hover:bg-black hover:text-white w-full h-full  ">
                        <div className="absolute  gap-2 flex flex-col items-center text-center 
                            right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                            <div>Live Site</div>
                        <div><img className="w-[40px]" src={stockshapesLogo} alt="stockshapes logo" />
                        </div>
                    </div>
                    </div>
                </a>
            </div> */}
            <div className="absolute 
                opacity-0 group-hover:opacity-100
                group-hover:bg-slate-200 group-hover:bg-opacity-60 h-full w-full right-0">
                {/* <div className="absolute w-full h-[50%] hover:bg-black hover:text-white top-0">
                    <div className="absolute gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                        <div>
                            Client-side
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div> */}
                <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/Custom-NinjaScript-Files">
                <div className="absolute h-full w-full hover:bg-zinc-800 hover:bg-opacity-10 hover:text-white bottom-0">
                    <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                        <div>
                            {/* Server-side */}
                            Github
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                </a>

            </div>
            {/* <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/"> */}
            {/* <img className=" aspect-square object-cover" src={CloudStock} alt="Rainbow Darkness.png" /></a> */}
            {/* <img className=" aspect-square object-cover" src={stockshapes} alt="Rainbow Darkness.png" /></a> */}
            { }
            {/* vvv This doesn't work for some reason, it turns all the elements above as opacity-20 */}
            {/* <div className={`${imgHover ? "opacity-20" :null } h-[400px] flex flex-col gap-8 items-center justify-center bg-white`}> */}
            <div className={gifToggle ? 'h-[400px] flex flex-col gap-8 items-center justify-center bg-white' : 'hidden'}>
                <img className="  object-cover aspect-square" src={tradingBot} alt="stockshapes gif 1" />
            </div>
            <img className={gifToggle ? 'hidden' : "aspect-square h-[400px] object-cover"} src={tradingBot} alt="Rainbow Darkness.png" />

            {/* </a> */}
            <div className="
                    absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                    pointer-events-none
                    ">
                Go to live site!</div>
        </div>


        <div className="">
        <div className=" max-lg:pt-8 text-xl font-bold text-center mb-4  ">
        <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/Custom-NinjaScript-Files">
            <div className="flex gap-x-3 justify-center w-full bg-blue-200 p-2 rounded-md m-auto  align-middle items-center">
            <img src={nt8Logo} width="40" alt="Rainbow Darkness Logo" />
            <div>Futures Trading Bot</div>
            </div>
            </a>
        </div>
            <div className="font-semibold">C#</div>
            {/* <div className="">Real-time stock & future updates with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
            {/* <div className="">Real-time stock prices with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
            <div className="">
            Trading strategies for the futures market on NinjaTrader8. Strategies will trade sudden spikes of selling volume on uptrends.
            </div>
            {/* <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                onClick={boolHandler}
            >Details</div> */}
            <div
                // onClick={boolHandler} 
                className=
                // {boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}
                {"pt-8"}
            >
                {/*[vers3] Building Stock Shapes gave me experience on how to navigate sparsely written API documentation with broken endpoints. It also shed light on why free stock tracking apps don't provide consistently fast price updates-- It's expensive. */}
                Made specifically for prop firm evaluations where you need to navigate through tight risks. Profitable on ES and CL futs. So far it has passed 2 25k evaluation accounts from Apex Trader Funding.
                {/* <br/>To provide 100% uptime, I had to mitigate 429 errors by writing pm2 scripts on EC2 as iexCloud's SSE connections close only when the node.js app terminates. */}
                {/*[vers1] Pulls data from IEX Cloud API, uses server-sent-events (SSE) to feed live price updates to clients. Serverside deployed to EC2 as a way to accomodate live events that serverless computing cannot support out the box. $50 a month for my API costs, one session from market open to close tends to run around $1-8 per user that displays 5 stocks. Currently working on optimizing API calls to minimize costs. */}
            </div>
        </div>
    </div>

    {/* RainbowDarkness */}
    <div className="relative flex flex-row [&>div]:max-w-[400px] max-lg:[&>div]:w-[400px] text-left ">
        <div
            // onMouseOver={imgMouseOver}
            // onMouseLeave={imgMouseLeave} 
            className="relative w-[80%] max-w-[500px] text-xl font-bold
             hover:cursor-pointer [&>div]:hover:opacity-100 select-none
            group 
            ">

            <div className="absolute  
                opacity-0 group-hover:opacity-100
                group-hover:bg-slate-200 group-hover:bg-opacity-60  hover:bg-opacity-90  h-full w-[50%]  left-0">
                <a target="_blank" rel="noreferrer" href="https://rainbowdarkness.com/">
                    <div className="hover:bg-black  hover:text-white w-full h-full  ">

                        <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                            <div>Live Site</div>
                            <div><img className="w-[40px]  " src={rainbowLogo} alt="stockshapes logo" /></div>
                        </div>

                    </div>
                </a>
            </div>
            <div className="absolute 
                opacity-0 group-hover:opacity-100
                group-hover:bg-slate-200 group-hover:bg-opacity-60 h-full w-[50%] right-0">
                {/* I want to keep client repos private. */}
                {/* Enable this to make the 50% w split to 2 50% heights */}
                {/* <div className="absolute w-full h-[50%] hover:bg-black hover:text-white top-0">
                    <div className="absolute gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                        <div>
                            Client-side
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div> */}
                <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/rainbowdarkness-client">
                    <div className="absolute h-full w-full hover:bg-black hover:text-white bottom-0">
                        <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                            <div>
                                {/* Server-side */}
                                Github (client)
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>

            </div>


            {/* <img className=" aspect-square object-cover" src={RainbowDarkness} alt="Rainbow Darkness.png" /></a> */}
            {/* <img className=" aspect-square object-cover" src={ imgHover ? rCover : rGif1} alt="Rainbow Darkness.png" /></a> */}
            <img className=" aspect-square h-[400px] object-cover" src={gifToggle ? rGif1 : rCover} alt="Rainbow Darkness.png" />


        </div>
        <div>
        <div className=" max-lg:pt-8 text-xl font-bold text-center mb-4  ">
        <a target="_blank" rel="noreferrer" href="https://rainbowdarkness.com/">
            <div className="flex gap-x-3 justify-center w-full bg-blue-200 p-2 rounded-md m-auto  align-middle items-center">
            <img src={rainbowLogo} width="26" alt="Rainbow Darkness Logo" />
            <div>Rainbow Darkness</div>
            </div>
        </a>
        </div>
        <div className="font-semibold">React | Node.js | Redux | D3.js | MongoDB | AWS EC2</div>
        {/* <div className="">Happiness tracking application. Users can compare their scores with the entire userbase. </div> */}
        <div className="">Mental health application that tracks your daily happiness, in addition to time slept, activities, and memos. </div>
        {/* <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
            "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
            onClick={boolHandler}
        >Details
        </div> */}
        <div 
        // onClick={boolHandler} 
        className=
        // {boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}
        {'pt-8'}
        >
            {/* Some effort has been spent towards accommodating non-registered users since local storage needs to interact with the database. Overall, a simple project with attention to providing a smooth experience, no matter when or where users decide to visit. This project has taught me how to tackle scalability when it comes to data processing and state management. */}
            A simple project with attention to providing a smooth experience, no matter when or where users decide to visit. This project has taught me how to tackle scalability when it comes to data processing and state management.

            {/* sacrificing privacy */}
            {/* it would be more sustainable to sacrifice some privacy for user logins
            & adsense as users are prompted to visit everyday. */}
        </div>
        </div>
    </div>

    






</div>
</div>
    </>
)

}

export default Projects;