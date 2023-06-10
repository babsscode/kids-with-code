import { SelectedPage, CourseType } from '@/shared/types';
import { motion } from 'framer-motion';
import Course from './Course';

const thecourses: Array<CourseType> = [
    {
        title: <p>Python<br/>Fundemnetals</p>,
        date: "Summer 2023",
        age: "Age Group: 10-14",
        description:
            "Learn beginner python objectives such as variables, conditionals, loops & more!",
        list:
            <div>
                <li>Completely free</li>
                <li><u>Virtual</u> lessons</li>
                <li>Build 3 working games</li>
                <li>Create & publish your very own project!</li>
                <li>Easy to understand lessons</li>
                <li>5-week course</li>
                <li className='pl-8'>Lessons twice a week</li> 
                <li>Receive a certificate</li>
            </div>
    },
    {
        title: "Scratch Fundemnetals",
        date: "Summer 2023",
        age: "Age Group: 5-9",
        description:
            "Learn basic coding skills through an interactive block-based programming language!",
        list:
        <div>
            <li>Completely free</li>
            <li><u>Virtual</u> lessons</li>
            <li>Build 3 working projects</li>
            <li>Beginner content designed for younger kids</li>
            <li>Easy and fun!</li>
            <li>5-week course</li>
            <li className='pl-8'>Lessons twice a week</li> 
            <li>Receive a Certificate</li>
        </div>
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Courses({ setSelectedPage }: Props) {
  return (
    <section 
    id="courses"
    className="bg-mysecondary-300 py-[2.9rem] md:h-[800px] w-full">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Courses)}/>
    <div className='my-10 mx-10 md:mx-32 md:flex gap-16 h-7/8 items-center basis-7/8 justify-center'>
        {thecourses.map((course: CourseType) => (
            <Course
                key={course.title} 
                title={course.title}
                age={course.age}
                date={course.date}
                description={course.description}
                list={course.list}
                setSelectedPage={setSelectedPage}
            />
        ))}
    </div>
    </section>
  )
}

export default Courses;