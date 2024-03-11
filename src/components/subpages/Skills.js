import React from "react";
import vercel from '../../photos/vercel-logo.png'
import ec2 from '../../photos/ec2-logo.png'
import nodejs from '../../photos/nodejs.png'
import html5 from '../../photos/html-logo.png'
import css3 from '../../photos/css-logo.png'
import jenkins from '../../photos/jenkins.png'
import docker from '../../photos/docker.png'
import kubies from '../../photos/Kubernetes_logo_without_workmark.svg.png'
import nginx from '../../photos/nginx-svg.svg'
import postgres from '../../photos/postgresql_logo.svg'
import cka from '../../photos/logo_cka_whitetext-300x293.png'

function Skills () {

    return (
        <>

            <div
                className="bg-white mt-20 pb-16 pt-20"
            // onMouseOver={e => setMouseClass(true)}
            // onMouseLeave={e => setMouseClass(false)}
            >
                <div className="text-center pb-16 font-bold text-2xl">Skills</div>
                <div className=
                    {
                        // mouseClass ? 
                        `flex justify-evenly flex-row max-lg:flex-wrap max-w-[1400px] m-auto
                        max-lg:[&>div]:basis-[20%] max-lg:gap-y-20
                            max-md:[&>div]:basis-[33%] 
                        lg:gap-y-20 lg:flex-wrap lg:[&>div]:basis-[15%]
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
                        <p>PostgreSQL</p>
                        <img className="" width="64" alt="PostgreSQL Logo" src={postgres} />
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
                        <p>NGINX</p>
                        <img width="64" src={nginx} alt="NGINX Logo" />
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
            
            
            <div className="text-center m-auto max-w-[1400px]">
                <div className="font-bold text-2xl pb-8 pt-12">Certifications</div>
                <div className="flex lg:justify-left lg:pl-20 max-lg:justify-center items-center gap-6">
                    <img width="120" src={cka} alt="Kubernetes Logo" />
                    <div className="flex-col text-left">
                        <div className=" font-bold">Certified Kubernetes Adminitrator (CKA)</div>
                        <div>Cloud Native Computing Foundation (CNCF)</div>
                        <div className="text-sm text-gray-400">Issued Feb 2024 · Expires Feb 2027</div>
                        <div className="text-sm text-gray-400">Credential ID LF-minv801zt7Credential ID LF-minv801zt7</div>
                    </div>
                </div>

            </div>

            {/* <div>
                <div>Web Technologies</div>
                <div className="flex gap-8">
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
                        <img width="64" src={nodejs} alt="NodeJS Logo" />
                    </div>
                </div>
                <div>Databases</div>
                <div className="flex gap-8">
                <div>
                        <p>PostgreSQL</p>
                        <img className="" width="64" alt="PostgreSQL Logo" src={postgres} />
                    </div>
                    <div>
                        <p>MongoDB</p>
                        <img className="pt-5" width="64" alt="MongoDB Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/64px-MongoDB_Logo.svg.png" />
                    </div>
                </div>
                <div>DevOps</div>
                <div className="flex gap-8">
                <div>
                        <p>AWS EC2</p>
                        <img width="64" src={ec2} alt="Amazon EC2 Logo" />
                    </div>
                    <div>
                        <p>NGINX</p>
                        <img width="64" src={nginx} alt="NGINX Logo" />
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
            </div> */}

{/* <div className="absolute select-none left-2 flex flex-col bottom-2 text-sm text-zinc-400 tracking-tight">
                        <div>© Roderick Cayabyab 2024</div>
                    </div> */}

        </>
    )
}

export default Skills;