import React, { useState } from "react";

import RainbowDarkness from '../photos/3bf40ef49cba4e57b04b9319472d3d32.png'
import Linkedin from '../photos/linked.jpg'
import CloudStock from '../photos/0adfa6c3203466b17c21befa04d7a3ee.png'
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
import rainbowFront from '../photos/rainbow-darkness-front.png'
import rainbowBack from '../photos/rainbow-darkness-back.png'

// logos
import rainbowLogo from '../photos/logo-r.ico'
import rainbowEye from '../photos/logo512.png'
import stockshapesLogo from '../photos/ss-logo512.png'

function HomePage () {

    const [boolState, setBoolState] = useState(false)
            // For hovering over to display extra info
    // const [mouseClass, setMouseClass] = useState(false)

    const boolHandler = () => {
        setBoolState(!boolState)
        console.log(boolState)
    }

    return (
        <>
            {/* mainContainer */}
            {/* <div className="relative pl-10 pr-10 m-auto max-w-[1400px] "> */}
            <div className="relative m-auto max-w-[1400px]  ">
                {/* <div className="relative m-auto max-w-[1400px]  "> */}

                <div className="
                text-center pt-10 ml-10 mr-10
                lg:fle
                ">
                    <img draggable="false" className=" select-none w-[200px] h-[200px] object-cover rounded-full m-auto mb-10 " src={Linkedin} alt="me" />
                    {/* <div className="text-xl font-bold">About Me</div> */}
                    <div><div className="text-xl font-bold">Hello! I'm Roderick Cayabyab,</div>
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

                    <div className="text-center text-xl bg-neutral-200 pt-8 pb-8 font-bold">Projects</div>

                    {/* RainbowDarkness */}
                    <div className="
                    lg:flex lg:space-x-[100px] lg:justify-evenly 
                    max-lg:flex-col max-lg:space-y-[100px] max-lg:text-center 
                    [&>div>div]:m-auto  min-w-[100%] align-middle">
                        {/* <div className="absolute bg-neutral-200 w-screen h-full" /> */}
                        <div className="relative [&>div]:max-w-[500px] text-left ">
                            <div className="relative w-[80%] max-w-[500px] text-xl font-bold
                        hover:opacity-70 hover:cursor-pointer [&>div]:hover:opacity-100 select-none
                        ">
                                <a target="_blank" rel="noreferrer" href="https://rainbowdarkness.com/">
                                    {/* <img className=" aspect-square object-cover" src={RainbowDarkness} alt="Rainbow Darkness.png" /></a> */}
                                    <img className=" aspect-square object-cover" src={rainbowFront} alt="Rainbow Darkness.png" /></a>
                                <div className="
                            absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                             pointer-events-none
                             
                            ">
                                    Go to live site!</div>
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

                        <div className="relative text-left [&>div]:max-w-[500px]">
                            <div className="relative w-[80%] max-w-[500px] text-xl font-bold
                        hover:opacity-40  hover:cursor-pointer [&>div]:hover:opacity-100 select-none
                        ">
                                <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/">
                                    {/* <img className=" aspect-square object-cover" src={CloudStock} alt="Rainbow Darkness.png" /></a> */}
                                    <img className=" aspect-square object-cover" src={stockshapes} alt="Rainbow Darkness.png" /></a>
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
                                Pulls data IEX Cloud API, uses server-sent-events (SSE) to feed live price updates to clients. Serverside deployed to EC2 as a way to accomodate live events that serverless computing cannot support natively. $50 a month for my API costs, one session from market open to close tends to run around $1-4 per user that displays 5 stocks. Currently working on optimizing API calls to minimize API costs.
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
                        `flex justify-evenly flex-row max-lg:flex-wrap
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
                                <p>Javascript</p>
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



                <div 
                className="pt-20 mb-48"
                
                >
                    {/* <div className="text-center">______________________________________________________</div> */}
                    <div className=" bg-neutral-200">
                        <div className="font-bold text-xl text-center pb-8">Education</div>
                        <div className="text-center">B.A. Psychology 2018-2021</div>
                    </div>

                    <div className="pt-20 pb-8 text-xl font-bold text-center">Hobbies</div>
                    <div className="
                    flex space-x-10 justify-evenly 
                    [&>div>p]:pb-8 [&>div>p]:text-center
                        [&>div>div>img]:object-cover [&>div>div>img]:select-none
                        max-lg:[&>div>div>img]:w-[200px] max-lg:[&>div>div>img]:h-[200px]
                            lg:[&>div>div>img]:w-[400px] lg:[&>div>div>img]:h-[400px]
                        ">
                        <div>
                            <p>Roaming modern art galleries</p>
                            <div>
                                {/* <img draggable='false' className="" src={TestPFP} alt="cat" /> */}
                                <img draggable='false' className="" src={gallery2} alt="cat" />
                                <img draggable='false' className="" src={gallery1} alt="cat" />
                            </div>
                        </div>
                        <div>
                            <p>Playing with my cat</p>
                            <div>
                                <img draggable='false' className="" src={Clay} alt="cat" />
                                <img draggable='false' className="" src={claygif} alt="cat" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomePage;