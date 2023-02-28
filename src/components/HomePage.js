import React, { useState } from "react";
import RainbowDarkness from '../photos/3bf40ef49cba4e57b04b9319472d3d32.png'
import TestPFP from '../photos/aboutmecropped111.png'
import Linkedin from '../photos/linked.jpg'
import CloudStock from '../photos/0adfa6c3203466b17c21befa04d7a3ee.png'
import Clay from '../photos/IMG_7622.jpg'

function HomePage () {

    const [boolState, setBoolState] = useState(false)

    const boolHandler = () => {
        setBoolState(!boolState)
        console.log(boolState)
    }

    return (
        <>
            {/* mainContainer */}
            {/* <div className="relative pl-10 pr-10 m-auto max-w-[1400px] "> */}
            <div className="relative m-auto max-w-[1400px] bg-neutral-200 ">

                <div className="text-center pt-10 pl-10 pr-10 ">
                    <img draggable="false" className=" select-none w-[200px] h-[200px] object-cover rounded-full m-auto mb-10 " src={Linkedin} alt="me" />
                    <div className="text-xl">About Me</div>
                    <div>Hello! My name is Roderick, I'm an independent web developer
                        who's fascinated in creating practical webapps for everyday use. As someone who experiences
                        the pain of having to register everytime to use websites, I find enjoyment in creating websites with minimal overhead for users.
                        <br/><br/>Don't believe me? Check out my projects!!!!!
                        <br/><br/>Having a background in psychology, I was interested in ways I can incorporate
                        mental health to simple webpages that is accessible to everyone. I found it unfair that mental
                        health apps today, and tracking apps in general, requires overhead such as registering with emails
                        and answering questions before getting to the actual content. I applied this to other websites I wanted to simplify.
                        <p>My goal? Practical webapps with simple & intuitive UI :)</p>
                    </div>
                </div>

                <div className="relative bg-white mt-20">

                    <div className="text-center text-xl bg-white pt-8 pb-8 font-bold">Projects</div>

                    {/* RainbowDarkness */}
                    <div className="lg:flex lg:space-x-[100px] lg:justify-evenly 
                    max-lg:flex-col max-lg:space-y-[100px] max-lg:text-center 
                    [&>div>div]:m-auto  min-w-[100%] align-middle">
                        {/* <div className="absolute bg-neutral-200 w-screen h-full" /> */}
                        <div className="relative [&>div]:max-w-[500px] ">
                            <div className="relative w-[80%] max-w-[500px] text-xl font-bold
                        hover:opacity-70 hover:cursor-pointer [&>div]:hover:opacity-100 select-none
                        ">
                            <a target="_blank" rel="noreferrer" href="https://rainbowdarkness.com/"><img className="" src={RainbowDarkness} alt="Rainbow Darkness.png" /></a>
                            <div className="
                            absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                             pointer-events-none
                            ">
                                Go to live site!</div>
                        </div>
                        <div className="italic pt-8 font-semibold">Rainbow Darkness</div>
                        <div className="font-semibold">React | Express | Node | MongoDB | Vercel</div>
                        <div className="">Happiness tracking application. Users can compare their scores with the entire userbase. </div>
                        <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                        "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                        onClick={boolHandler}
                        >Details</div>
                            <div onClick={boolHandler} className={boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}>
                                An anonymous way of comparing your happiness to the entire userbase
                            </div>
                    </div>

                    <div className="relative [&>div]:max-w-[500px]">
                        <div className="relative w-[80%] max-w-[500px] text-xl font-bold
                        hover:opacity-70 hover:cursor-pointer [&>div]:hover:opacity-100 select-none
                        ">
                            <a target="_blank" rel="noreferrer" href="https://stockshapes-client.vercel.app/"><img className="" src={CloudStock} alt="Rainbow Darkness.png" /></a>
                            <div className="
                            absolute top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2 opacity-0 
                             pointer-events-none
                            ">
                                Go to live site!</div>
                        </div>
                        <div className="italic pt-8 font-semibold">Stock Shapes</div>
                        <div className="font-semibold">React | Express | Node | Vercel | EC2</div>
                        {/* <div className="">Real-time stock & future updates with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div> */}
                        <div className="">Real-time stock prices with draggable + resizeable components. Resize the webpage to aid your trading sessions!</div>
                        <div className={boolState ? "text-yellow-400 select-none hover:text-slate-800 hover:cursor-pointer" :
                        "text-slate-400 select-none hover:text-slate-800 hover:cursor-pointer"}
                        onClick={boolHandler}
                        >Details</div>
                            <div onClick={boolHandler} className={boolState ? "bg-slate-200 hover:cursor-pointer" : "hidden"}>
                            Pulls data IEX Cloud API, uses SSE to connect to live prices, serverside deployed to EC2 as a way to accomodate live events that serverless can't support natively. $50 a month for my API costs, one session from market open to close tends to run around $1-4 per user that displays 5 stocks. Currently working on optimizing API calls to minimize API costs.
                            </div>
                    </div>
                    </div>

                </div>

                <div className="pt-10 mb-24">
    {/* <div className="text-center">______________________________________________________</div> */}
    <div className="font-bold">Education</div>
    <div>B.A. Psychology 2018-2021</div>

    <div className="pt-4 font-bold">Hobbies</div>
    <div>Roaming modern art galleries</div>
    <img draggable='false' className="w-[200px] h-[200px] object-cover rounded-full select-none" src={TestPFP} alt="cat" />
    <div>Playing with my cat</div>
    <img draggable='false' className="w-[200px] h-[200px] object-cover rounded-full select-none" src={Clay} alt="cat" />
</div>

        </div>

        </>
    )
}

export default HomePage;