import React, { useState } from "react";
import BottomHeader from "./BottomHeader";

// import RainbowDarkness from '../photos/3bf40ef49cba4e57b04b9319472d3d32.png'
import Linkedin from '../photos/linked.jpg'
// import CloudStock from '../photos/0adfa6c3203466b17c21befa04d7a3ee.png'
import Clay from '../photos/IMG_7622.jpg'

// hobbies
import claygif from '../photos/claycat.gif'
import TestPFP from '../photos/aboutmecropped111.png'
import gallery1 from '../photos/gallery1.jpg'
import gallery2 from '../photos/gallery2.jpg'


import vercel from '../photos/vercel-logo.png'
import ec2 from '../photos/ec2-logo.png'
import nodejs from '../photos/nodejs.png'
import html5 from '../photos/html-logo.png'
import css3 from '../photos/css-logo.png'

// website pictures
import stockshapes from '../photos/stockshapes.png'
import ssFast from '../photos/ss-fast-gif.gif'
import ssSlow from '../photos/ss-slow-gif.gif'
// import rainbowFront from '../photos/rainbow-darkness-front.png'
// import rainbowBack from '../photos/rainbow-darkness-back.png'
import rCover from '../photos/r-cover.png'
// import rGif from '../photos/r-gif.gif'
import rGif1 from '../photos/r-gif1.gif'

// logos
import rainbowLogo from '../photos/logo-r.ico'
// import rainbowEye from '../photos/logo512.png'
import stockshapesLogo from '../photos/ss-logo512.png'
import eblogo from '../photos/eb-logo.png'

function HomePage () {

    const [boolState, setBoolState] = useState(false)
            // For hovering over to display extra info
    // const [mouseClass, setMouseClass] = useState(false)
    const [gifToggle, setGifToggle] = useState(true)

    const [imgHover, setImgHover] = useState(false)

    const boolHandler = () => {
        setBoolState(!boolState)
        console.log(boolState)
    }

    const imgMouseOver = (e) => {
        setImgHover(true)
        console.log(imgHover)
    }

    const imgMouseLeave = (e) => {
        setImgHover(false)
        console.log(imgHover)
    }

    return (
        <>
            {/* mainContainer */}
            {/* <div className="relative pl-10 pr-10 m-auto max-w-[1400px] "> */}
            <div className="relative  ">
                {/* <div className="relative m-auto max-w-[1400px]  "> */}

                <div className="
                text-center pt-16 ml-10 mr-10
                lg:fle
                ">
                    <img draggable="false" className=" mb-10 select-none w-[200px] h-[200px] object-cover rounded-full m-auto " src={Linkedin} alt="me" />
                    {/* <div className="text-xl font-bold">About Me</div> */}
                    <div className="">
                        <div className="text-xl font-bold">Hello! I'm Roderick Cayabyab,</div>
                        <div className=" max-w-[600px] text-center m-auto pt-8">I'm an independent web developer from Hayward, California
                            who's fascinated in creating practical webapps for everyday use. As someone who experiences
                            the pain of having to register everytime to use websites, I find enjoyment in creating simple front-end applications with minimal overhead for users.
                            <br /><br />Please see my projects!
                            {/* <br/><br/>Having a background in psychology, I was interested in ways I can incorporate
                        mental health to simple webpages that is accessible to everyone. I found it unfair that mental
                        health apps today, and tracking apps in general, requires overhead such as registering with emails
                        and answering questions before getting to the actual content. I applied this to other websites I wanted to simplify.
                        <p>My goal? Practical webapps with simple & intuitive UI :{`)`}</p> */}
                        </div>
                    </div>
                </div>

                <div className="relative bg-neutral-200 bg-contain mt-20">

                    <div className="text-center flex flex-col justify-center items-center gap-4 text-xl bg-neutral-200 pt-10 pb-8 font-bold">
                        <div>Projects</div>
                        <div
                            onClick={e => setGifToggle(!gifToggle)} 
                            className={`${gifToggle ? " text-green-400  " : "text-red-400" } hover:cursor-pointer select-none  text-sm`}>
                        [Gifs on]
                        </div>
                        </div>

                    {/* RainbowDarkness */}
                    <div className="
                        lg:flex lg:space-x-[100px] lg:justify-center max-w-[1400px] lg:gap-12 pt-8
                        max-lg:flex-col max-lg:space-y-[100px] max-lg:text-center 
                        [&>div>div]:m-auto  min-w-[100%] align-middle">
                        {/* <div className="absolute bg-neutral-200 w-screen h-full" /> */}
                        <div className="relative [&>div]:max-w-[500px] text-left ">
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
                                                <div><img className="w-[60px] bg-white " src={rainbowLogo} alt="stockshapes logo" /></div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                                <div className="absolute 
                                    opacity-0 group-hover:opacity-100
                                    group-hover:bg-slate-200 group-hover:bg-opacity-60 h-full w-[50%] right-0">
                                    <div className="absolute w-full h-[50%] hover:bg-black hover:text-white top-0">
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
                                    </div>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/rainbowdarkness-server">
                                        <div className="absolute h-[50%] w-full hover:bg-black hover:text-white bottom-0">
                                            <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                                                <div>
                                                    Server-side
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
                            <div className=" pt-8 text-xl font-bold text-center pb-4 flex gap-x-3 justify-center">
                                <img src={rainbowLogo} width="26" alt="Rainbow Darkness Logo" />
                                <div>Rainbow Darkness</div>
                            </div>
                            <div className="font-semibold">React | Express | NodeJS | MongoDB | Vercel</div>
                            <div className="">Happiness tracking application. Users can compare their scores with the entire userbase. </div>
                            <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                                "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                                onClick={boolHandler}
                            >Details</div>
                            <div onClick={boolHandler} className={boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}>
                                An anonymous way of comparing your happiness to the entire userbase
                            </div>
                        </div>

                        {/* Stock Shapes */}
                        <div className="relative text-left [&>div]:max-w-[500px]">
                            <div
                                // onMouseOver={imgMouseOver}
                                // onMouseLeave={imgMouseLeave}
                                className="relative w-[80%] max-w-[500px] text-xl font-bold
                                      hover:cursor-pointer  select-none
                                      group
                                    ">

                                <div className="absolute  
                                    opacity-0 group-hover:opacity-100
                                    group-hover:bg-slate-200 group-hover:bg-opacity-60  hover:bg-opacity-90  h-full w-[50%]  left-0">
                                    <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/">
                                    <div className="hover:bg-black hover:text-white w-full h-full  ">
                                    
                                        <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                                            <div>Live Site</div>
                                            <div><img className="w-[60px]" src={stockshapesLogo} alt="stockshapes logo" /></div>
                                        </div>
                                        
                                    </div>
                                    </a>
                                </div>
                                <div className="absolute 
                                    opacity-0 group-hover:opacity-100
                                    group-hover:bg-slate-200 group-hover:bg-opacity-60 h-full w-[50%] right-0">
                                    <div className="absolute w-full h-[50%] hover:bg-black hover:text-white top-0">
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
                                    </div>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/r-yabyab/cloudstock-server">
                                    <div className="absolute h-[50%] w-full hover:bg-black hover:text-white bottom-0">
                                        <div className="absolute  gap-2 flex flex-col items-center text-center right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2">
                                            <div>
                                                Server-side
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
                                    <img className="  object-cover" src={ssSlow} alt="stockshapes gif 1" />
                                    <img className="  object-cover" src={ssFast} alt="stockshapes gif 2" />
                                </div>
                                <img className={gifToggle ? 'hidden' : "aspect-square h-[400px] object-cover"} src={stockshapes} alt="Rainbow Darkness.png" />

                                {/* </a> */}
                                <div className="
                                        absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                                        pointer-events-none
                                        ">
                                    Go to live site!</div>
                            </div>
                            
                            
                            
                            <div className=" pt-8 text-xl text-center pb-4 font-bold flex gap-x-3 justify-center">
                                <img src={stockshapesLogo} width="26" alt="Stock Shapes Logo" />
                                <div>Stock Shapes</div>
                            </div>
                            <div className="font-semibold">React | Express | NodeJS | Vercel | EC2</div>
                            {/* <div className="">Real-time stock & future updates with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
                            <div className="">Real-time stock prices with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div>
                            <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                                "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                                onClick={boolHandler}
                            >Details</div>
                            <div onClick={boolHandler} className={boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}>
                                Pulls data from IEX Cloud API, uses server-sent-events (SSE) to feed live price updates to clients. Serverside deployed to EC2 as a way to accomodate live events that serverless computing cannot support natively. $50 a month for my API costs, one session from market open to close tends to run around $1-4 per user that displays 5 stocks. Currently working on optimizing API calls to minimize API costs.
                            </div>
                        </div>
                    </div>

                    <div 
                        className="bg-white mt-20 pt-20"
                        // onMouseOver={e => setMouseClass(true)}
                        // onMouseLeave={e => setMouseClass(false)}
                        >
                        <div className="text-center pb-8 font-bold text-xl">Tech stack</div>
                        <div className=
                        {
                            // mouseClass ? 
                        `flex justify-evenly flex-row max-lg:flex-wrap max-w-[1400px] m-auto
                        max-lg:[&>div]:basis-[20%] max-lg:gap-y-20
                            max-md:[&>div]:basis-[30%] 
                        [&>div>p]:text-center [&>div>p]:pb-4 
                        [&>div>img]:m-auto
                        `
                        // :
                        // `flex justify-evenly items-center flex-row max-lg:flex-wrap
                        // max-lg:[&>div]:basis-[20%] 
                        //     max-md:[&>div]:basis-[30%] 
                        // [&>div>p]:hidden [&>div>p]:pb-4 
                        // [&>div>img]:m-auto`
                        }
                        >
                            <div>
                                <p>React</p>
                                <img width="64" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png"></img>
                            </div>
                            <div>
                                <p>JavaScript</p>
                                <img width="64" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/64px-JavaScript-logo.png" />
                            </div>
                            <div>
                                <p>HTML</p>
                                <img width="64" src={html5} alt="HTML Logo" />
                            </div>
                            <div>
                                <p>CSS</p>
                                <img width="64" src={css3} alt="CSS Logo" />
                            </div>
                            <div>
                                <p>Express</p>
                                <img className="pt-5" width="64" alt="Expressjs" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" />
                            </div>
                            <div>
                                <p>NodeJS</p>
                                {/* <img width="64" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/64px-Node.js_logo.svg.png" /> */}
                                <img width="64" src={nodejs} alt="NodeJS Logo" />
                            </div>
                            <div>
                                <p>MongoDB</p>
                                <img className="pt-5" width="64" alt="MongoDB Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/64px-MongoDB_Logo.svg.png" />
                            </div>
                            <div>
                                <p>Vercel</p>
                                <img width="64" src={vercel} alt="Vercel Logo" />
                            </div>
                            <div>
                                <p>Amazon EC2</p>
                                <img width="64" src={ec2} alt="Amazon EC2 Logo" />
                            </div>
                        </div>
                    </div>

                </div>



                <div className="pt-20 mt-20 pb-48 flex justify-evenly bg-neutral-200">
                    <div className=" bg-neutral-200">
                        <div className="font-bold text-xl text-center pb-8">Education</div>
                        <div className="flex gap-4 items-center">
                            <img width='32' src={eblogo} alt='CSUEB logo' />
                            <div className="text-center">B.A. Psychology 2018-2021</div>
                        </div>
                    </div>

                    {/* <div className="pt-20 pb-8 text-xl font-bold text-center">Hobbies</div> */}
                    <div className="
                    flex space-x-10 justify-evenly flex-col
                    [&>div>p]:pb-8 [&>div>p]:text-center
                        [&>div>div>img]:object-cover [&>div>div>img]:select-none
                        max-lg:[&>div>div>img]:w-[200px] max-lg:[&>div>div>img]:h-[200px]
                            lg:[&>div>div>img]:w-[400px] lg:[&>div>div>img]:h-[400px]
                        ">
                    <div className="pb-8 text-xl font-bold text-center">Hobbies</div>

                        <div>
                            <p>Playing with my cat & roaming modern art galleries</p>
                            <div>
                                {/* <img draggable='false' className="" src={TestPFP} alt="cat" /> */}
                                <img draggable='false' className="" src={gallery2} alt="cat" />
                                {/* <img draggable='false' className="" src={gallery1} alt="cat" /> */}
                            </div>
                        </div>
                        <div>
                            <div>
                                <img draggable='false' className="" src={Clay} alt="cat" />
                                <img draggable='false' className="" src={claygif} alt="cat" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <BottomHeader />

        </>
    )
}

export default HomePage;