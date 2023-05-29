import { HcoursesType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Hcourse from './Hcourse';

const homecourses: Array<HcoursesType> = [
    {
        title: "Python Fundemnetals",
        date: "summer 2023",
        description:
            "learn beginner python objectives such as variables, conditionals, loops & more!"
    },
    {
        title: "Scratch Fundemnetals",
        date: "summer 2023",
        description:
            "learn basic coding skills through a block-based interactive programming language!"
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ( { setSelectedPage }: Props) => {  
    return <section
        id="home"
        className="gap-16 bg-mysecondary-300 py-10 md:h-full md:pb-0"
    >
        {/* main header and course boxes*/}
        <motion.div 
        className='md:flex mx-auto md:mx-30 w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* main header*/}
            <div className='mt-20 md:mb-0 md:basis-6/8'>
                {/* heading */}
                <p className='text-[3.5rem] md:text-[7.5rem] text-left leading-[8rem]'>KIDS WITH CODE</p>
                <br/>
                <hr/>
                <br/>
                <p className='mt-4 text-lg text-myprimary-100'>
                    <li>All courses are free!</li>
                    <li>Project-focused</li>
                    <li className='pl-8'>No boring lectures</li>
                    <li>learn fundamental coding concepts</li>
                    <li>engaging lessons</li>
                </p>
            </div>
            {/* course boxes*/}
            <div className='md:ml-20 mt-10 md:mt-40 md:flex md:flex-col gap-8 items-center basis-1/8 justify-center md:justify-items-end'>
                {homecourses.map((hcourse: HcoursesType) => (
                    <Hcourse
                        key={hcourse.title} 
                        title={hcourse.title}
                        date={hcourse.date}
                        description={hcourse.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
        </motion.div>
    </section>;
};

export default Home