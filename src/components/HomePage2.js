import React, { useState, useEffect } from "react";
import BottomHeader from "./BottomHeader";
import { Link } from "react-router-dom";

// import RainbowDarkness from '../photos/3bf40ef49cba4e57b04b9319472d3d32.png'
import Linkedin from '../photos/linked.jpg'
// import CloudStock from '../photos/0adfa6c3203466b17c21befa04d7a3ee.png'
import Clay from '../photos/IMG_7622.jpg'

// hobbies
import claygif from '../photos/claycat.gif'
// import TestPFP from '../photos/aboutmecropped111.png'
// import gallery1 from '../photos/gallery1.jpg'
import gallery2 from '../photos/gallery2.jpg'


import vercel from '../photos/vercel-logo.png'
import ec2 from '../photos/ec2-logo.png'
import nodejs from '../photos/nodejs.png'
import html5 from '../photos/html-logo.png'
import css3 from '../photos/css-logo.png'
import jenkins from '../photos/jenkins.png'
import docker from '../photos/docker.png'
import kubies from '../photos/Kubernetes_logo_without_workmark.svg.png'

// website pictures
import stockshapes from '../photos/stockshapes.png'
import ssFast from '../photos/ss-fast-gif.gif'
import ssSlow from '../photos/ss-slow-gif.gif'
// import rainbowFront from '../photos/rainbow-darkness-front.png'
// import rainbowBack from '../photos/rainbow-darkness-back.png'
import rCover from '../photos/r-cover.png'
// import rGif from '../photos/r-gif.gif'
import rGif1 from '../photos/r-gif1.gif'
import stocksh from '../photos/stocksh.gif'

// logos
// import rainbowLogo from '../photos/logo-r.ico'
import rainbowLogo from '../photos/r1-logo192.png'
// import rainbowEye from '../photos/logo512.png'
import stockshapesLogo from '../photos/ss-logo512.png'
import eblogo from '../photos/eb-logo.png'

function HomePage ({ projectsRef, contactClick }) {

    // for details if you want to minimize for some reason
    // const [boolState, setBoolState] = useState(false)
            // For hovering over to display extra info
    // const [mouseClass, setMouseClass] = useState(false)
    const [gifToggle, setGifToggle] = useState(true)

    // const [imgHover, setImgHover] = useState(false)

    // const boolHandler = () => {
    //     setBoolState(!boolState)
    //     console.log(boolState)
    // }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Clay, gallery2, claygif];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }, []);
    

    return (
        <>
            {/* mainContainer */}
            {/* <div className="relative pl-10 pr-10 m-auto max-w-[1400px] "> */}
            <div className="relative mt-12 text-zinc-900 ">
                {/* <div className="relative m-auto max-w-[1400px]  "> */}

                <div className="
                text-center pt-16 ml-10 mr-10
                ">
                    <img draggable="false" className=" mb-10 select-none w-[200px] h-[200px] object-cover rounded-full m-auto " src={Linkedin} alt="me" />
                    {/* <div className="text-xl font-bold">About Me</div> */}
                    <div className="">
                        {/* <div className="text-xl font-bold">Hi, I am Roderick</div> */}
                        <div className="text-xl font-bold">Roderick Cayabyab</div>
                        <div className="flex justify-center gap-2">
                            <a href='https://github.com/r-yabyab' rel="noreferrer" target='_blank'>
                                <svg className="hover:text-gray-400 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <div className="text-xl font-">Web Developer</div>

                        </div>
                        <div className=" max-w-[600px] text-center m-auto pt-8">
                            Hello! I'm an independent web developer from Hayward, California
                            who's fascinated in creating practical webapps for everyday use. I specialize in front-end development, where my goal is to get users engaged with minimal overhead. I also find interest in devops practices because it allows me to have full control over my applications while streamlining the deployment process.

                            <br /><br />Hello! My name is Roderick. I graduated with a Bachelor's in psychology from CSU East Bay where I learned about cognition and the human experience. Building my own applications and contributing to open-source allowed me to apply my knowledge to create practical frontends for a seamless user experience.
                            <br /><br />Besides frontend development, I find interest in devops practices, which provides me tools to let my applications run with minimal issues and server costs.
                            {/* <br/><br/>During my time studying psychology, I found it unfair that the majority of psychological research goes unnoticed, specifically in well-being studies. With the prevalence of anxiety and depression rising each year, I find ease in creating web apps that extends beyond personality tests and bloated mental health applications. */}
                            
                            {/* <br /><br />When I'm not pushing changes to my projects, you can find me contributing to open source. I focus on fixing responsive design edge-cases within the cryptocurrency community. */}


                            {/* It's odd that in the continuous rise of anxiety and depression, there has been little to no intervention in the */}

                            {/* Web development equipments me with the tools to extend my knowledge 
                            Having a background in psychology equips me with the tools to make websites more human
                            people's lives that extends beyond private research.   */}

                            {/* the pain of having to register everytime to use websites, I find enjoyment in creating simple front-end applications with minimal overhead for users. */}
                            {/* <br /><br />Please see my projects! */}
                            {/* <br/><br/>Having a background in psychology, I was interested in ways I can incorporate
                            mental health to simple webpages that is accessible to everyone. I found it unfair that mental
                            health apps today, and tracking apps in general, requires overhead such as registering with emails
                            and answering questions before getting to the actual content. I applied this to other websites I wanted to simplify.
                            <p>My goal? Practical webapps with simple & intuitive UI :{`)`}</p> */}
                        </div>
                    </div>
                    <div className="mt-12 -mb-4 flex gap-8 justify-center max-md:[&>*]:h-[50px] [&>*]:flex [&>*]:justify-center [&>*]:align-middle [&>*]:items-center  [&>*]:bg-blue-200 items-center text-zinc-800 font-bold [&>*]:p-2 [&>*]:rounded-md">
                        <Link to='/projects' className='hover:text-white cursor-pointer'>Projects</Link>
                        <Link to='/skills' className="hover:text-white cursor-pointer">Skills</Link>
                        <Link to='/opensource' className="hover:text-white cursor-pointer">Open Source Contributions</Link>
                        <Link to='/aboutme' className="hover:text-white cursor-pointer">About Me</Link>
                    </div>
                </div>

                <div ref={projectsRef} className="relative bg-neutral-200 bg-contain pt-10 mt-20">

                    <div className="text-center flex flex-col justify-center items-center gap-4 text-xl bg-neutral-200 pt-10 pb-8 font-bold">
                        <div>Projects

                                                   <span
                            onClick={e => setGifToggle(!gifToggle)}
                            className={`${gifToggle ? " text-green-400  " : "text-red-400"} items-center justify-center mt-1 ml-2 absolute hover:cursor-pointer select-none  text-sm`}>
                            {gifToggle ? '[Gifs on]' : '[Gifs off]'}
                        </span>
                        </div>

 
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
                        max-lg:[&>div]:flex-col max-lg:space-y-[100px] max-lg:text-center 
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

                                <div className="absolute  
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
                                <div className="absolute 
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
                                <div className={gifToggle ? 'h-[400px] flex flex-col gap-8 items-center justify-center bg-white' : 'hidden'}>
                                    <img className="  object-cover" src={ssSlow} alt="stockshapes gif 1" />
                                    <img className="  object-cover" src={stocksh} alt="stockshapes gif 2" />
                                </div>
                                <img className={gifToggle ? 'hidden' : "aspect-square h-[400px] object-cover"} src={stockshapes} alt="Rainbow Darkness.png" />

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
                                <div className="">Portable & snappy stock prices. Aid your trading sessions by resizing the browser / stock quotes to your liking.
                                <br/> <span className="text-red-600">*Live data shows on weekdays from 6:30AM - 1:30PM PST.</span></div>
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
                                    Building Stock Shapes made me realize that fast & snappy prices are best fitted for private-use. Making the data public calls for hacky workarounds, and integrating additional data (i.e. futures like NASDAQ & S&P500... think 100s of updates per second) requires steep licensing fees. 
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

                    <div 
                        className="bg-white mt-20 pt-20"
                        // onMouseOver={e => setMouseClass(true)}
                        // onMouseLeave={e => setMouseClass(false)}
                        >
                        <div className="text-center pb-8 font-bold text-xl">Skills</div>
                        <div className=
                        {
                            // mouseClass ? 
                        `flex justify-evenly flex-row max-lg:flex-wrap max-w-[1400px] m-auto
                        max-lg:[&>div]:basis-[20%] max-lg:gap-y-20
                            max-md:[&>div]:basis-[33%] 
                        [&>div>p]:text-center [&>div>p]:pb-4 
                        [&>div>img]:m-auto select-none
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
                            {/* <div>
                                <p>HTML</p>
                                <img width="64" src={html5} alt="HTML Logo" />
                            </div>
                            <div>
                                <p>CSS</p>
                                <img width="64" src={css3} alt="CSS Logo" />
                            </div> */}
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
                            {/* <div>
                                <p>Vercel</p>
                                <img width="64" src={vercel} alt="Vercel Logo" />
                            </div> */}
                            <div>
                                <p>AWS EC2</p>
                                <img width="64" src={ec2} alt="Amazon EC2 Logo" />
                            </div>
                            <div>
                                <p>Docker</p>
                                <img width="64" src={docker} alt="Docker Logo" />
                            </div>
                            <div>
                                <p>Jenkins</p>
                                <img width="64" src={jenkins} alt="Jenkins Logo" />
                            </div>
                            <div>
                                <p>Kubernetes</p>
                                <img width="64" src={kubies} alt="Kubernetes Logo" />
                            </div>
                        </div>
                    </div>

                </div>



                <div className="md:pt-20 mt-20 pb-48 flex max-md:flex-col-reverse max-md:gap-20 max-md:justify-center max-md:items-center max-md:text-center justify-evenly bg-neutral-200">
                    <div className=" bg-neutral-200">
                        <div className="font-bold text-xl text-center pb-8">Education</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 items-center">
                                <img width='32' src={eblogo} alt='CSUEB logo' />
                                <div className="text-center">B.A. Psychology 2018-2021</div>
                            </div>
                            <div>
                                <div className="max-lg:text-left">Classes:</div>
                                <div className="[&>div]:indent-8 text-left">
                                    <div>Cognitive Neuroscience</div>
                                    {/* <div>Humanistic Psychology</div> */}
                                    <div>Research in Cognitive Psychology</div>
                                    <div>Psychological Measurement</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div className="pt-20 pb-8 text-xl font-bold text-center">Hobbies</div> */}
                    <div className="
                    flex space-x-10 justify-evenly flex-col
                    [&>div>p]:pb-8 [&>div>p]:text-center
                        [&>div>div>img]:object-cover [&>div>div>img]:select-none
                        max-lg:[&>div>div>img]:w-[200px] max-lg:[&>div>div>img]:h-[200px]
                            lg:[&>div>div>img]:w-[250px] lg:[&>div>div>img]:h-[250px]
                        ">
                    <div className="pb-8 max-md:pt-20 text-xl font-bold text-center">Hobbies</div>

                        <div className="flex flex-col items-center justify-center">
                            <p>Playing with my cat & roaming modern art galleries</p>
                            <div>
                                {/* <img draggable='false' className="" src={gallery2} alt="cat" /> */}
                                <img className="" draggable={false} src={images[currentImageIndex]} alt="slider" />
                            </div>
                        </div>
                        {/* <div>
                            <div>
                                <img draggable='false' className="" src={Clay} alt="cat" />
                                <img draggable='false' className="" src={claygif} alt="cat" />
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="md:pt-20 max-md:mt-20 pb-48">
                    <div className="text-xl text-center font-bold">Open Source Contributions</div>
                    <div className="flex md:[&>div]:max-w-[300px] md:flex-row max-md:flex-col max-md:text-center max-md:gap-y-8 max-md:justify-center md:justify-evenly pt-8">
                        <div className="flex flex-col gap-4">
                            <div>Under Review</div>
                            <a 
                                className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                href="https://github.com/RavenProject/ravenproject.github.io/pull/265" target="__blank">
                                Fixed twitter iframe centering using tailwind (ravencoin.org) #265
                            </a>
                        </div>
                        <div>
                            <div className="w-full bg-blue-200 p-2 rounded-md m-auto  align-middle items-center">Merged PRs</div>
                            <div className="flex md:[&>div]:max-w-[300px] md:flex-row max-md:flex-col max-md:text-center max-md:gap-y-8 max-md:justify-center md:justify-evenly pt-8">
                                <div className="flex flex-col-reverse  gap-4">
                                    <div>
                                        <a
                                            className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                            href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/8" target="__blank">
                                            Top navbar breakpoint issue @ 767px
                                        </a>
                                        <div>
                                            <li>Breakpoints for hideMobile and hideDesktop didn't account for 767px.</li>
                                            <li>Also changed h3 media query to 767px from 768px to match breakpoints.</li>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                            href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/9" target="__blank"
                                        >
                                            Added menu button for mobile view
                                        </a>
                                        <div>
                                            <li>Replaced mobile top-navbar page list with menu button. For desktop, menu button shows when Download Wallet button is about to clip over the page list.</li>
                                            <li>Added some padding to desktop top-navbar.</li>
                                            <li>Moved mobile top-navbar vtc logo up a bit to align with button.</li>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                            href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/11" target="__blank"
                                        >
                                            fixed vtc logo sizing for mobile navbar
                                        </a>
                                        <div>
                                            <li>Fixed problem where VTC logo on the top left was squished for mobile users but not for desktop</li>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="hover:cursor-pointer hover:text-blue-600 text-blue-400 underline"
                                            href="https://github.com/vertcoin-project/vertcoin-project.github.io/pull/12" target="__blank"
                                        >
                                            Cleaned up topnav for mobile
                                        </a>
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
                    </div>
                </div>

            </div>

            <BottomHeader contactClick={contactClick} />

        </>
    )
}

export default HomePage;