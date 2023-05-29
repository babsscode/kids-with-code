import { SelectedPage, CourseType } from '@/shared/types';
import { motion } from 'framer-motion';
import Course from './Course';

const thecourses: Array<CourseType> = [
    {
        title: <p>Python<br/>Fundemnetals</p>,
        date: "summer 2023",
        age: "age group: 10-14",
        description:
            "learn beginner python objectives such as variables, conditionals, loops & more!",
        list:
            <div>
                <li>completely free</li>
                <li>all lessons are virtual</li>
                <li>build 3 working games</li>
                <li>create and publish your very own project!</li>
                <li>easy to understand lessons</li>
                <li>5-week course</li>
                <li className='pl-8'>lessons twice a week</li> 
                <li>receive certificate</li>
            </div>
    },
    {
        title: "Scratch Fundemnetals",
        date: "summer 2023",
        age: "age group: 5-9",
        description:
            "learn basic coding skills through a block-based interactive programming language!",
        list:
        <div>
            <li>completely free</li>
            <li>all lessons are virtual</li>
            <li>build 3 working projects</li>
            <li>beginner content designed for younger kids</li>
            <li>easy and fun!</li>
            <li>3-week course </li>
            <li className='pl-8'>lessons twice a week</li> 
            <li>receive certificate</li>
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
    className="bg-mysecondary-300 py-10 md:h-full">
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