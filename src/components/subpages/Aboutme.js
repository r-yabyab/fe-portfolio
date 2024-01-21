import React, { useState, useEffect } from "react";
import eblogo from '../../photos/eb-logo.png'
import Clay from '../../photos/IMG_7622.jpg'
import claygif from '../../photos/claycat.gif'
import gallery2 from '../../photos/gallery2.jpg'

function Aboutme () {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Clay, gallery2, claygif];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    return(
        <>
        <div>aboutme</div>
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
        </>
    )
}

export default Aboutme;