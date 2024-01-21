import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Directories ({scrollToTop}) {
      // 0-homepage/aboutme, 1-projects, 2-skills, 3-opensource
  const [activePage, setActivePage] = useState(0);

    return(
        <>
            <div className="mt-12 pb-16 mb-11 flex gap-8 justify-center max-md:[&>*]:h-[50px] [&>*]:flex [&>*]:justify-center [&>*]:align-middle [&>*]:items-center  [&>*]:bg-blue-200 items-center text-zinc-800 font-bold [&>*]:p-2 [&>*]:rounded-md">
                <Link
                    to='/'
                    onClick={() => { setActivePage(0); scrollToTop() }}
                    className={`${activePage === 0 ? "underline " : "hover:text-white cursor-pointer"} `}
                >
                    About Me
                </Link>
                <Link
                    to='/projects'
                    onClick={() => { setActivePage(1); scrollToTop() }}
                    className={`${activePage === 1 ? "underline" : "hover:text-white cursor-pointer"} `}
                >
                    Projects
                </Link>
                <Link
                    to='/skills'
                    onClick={() => { setActivePage(2); scrollToTop() }}
                    className={`${activePage === 2 ? "underline" : "hover:text-white cursor-pointer"} `}
                >
                    Skills
                </Link>
                <Link
                    to='/opensource'
                    onClick={() => { setActivePage(3); scrollToTop() }}
                    className={`${activePage === 3 ? "underline" : "hover:text-white cursor-pointer"} `}
                >
                    <span className="max-lg:hidden">Open-Source Contributions</span>
                    <span className="lg:hidden">Open-Source</span>
                </Link>

            </div>
        </>
    )
}

export default Directories;