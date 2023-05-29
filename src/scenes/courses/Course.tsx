import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';

type Props = {
    title: string;
    date: string;
    age: string;
    description: string;
    list: any;
    setSelectedPage: (value: SelectedPage) => void; 
};

function Course({title, date, age, description, list, setSelectedPage}: Props) {
  return (
    <div className='rounded-md border-4 border-white md:h-[90%] md:w-[70%] p-8 text-center my-16 md:my-0'>
        <h1 className="text-3xl md:text-5xl">{title}</h1>
        <p className='my-3 text-2xl md:text-3xl'>{date}</p>
        <h1 className="my-3 text-xl md:text-2xl">{age}</h1>
        <p className='my-3 text-lg md:text-xl'>{description}</p>
        <div className='mt-3 text-lg mb-5 md:text-xl text-center'>{list}</div>
        <ActionButton setSelectedPage={setSelectedPage}>register now!</ActionButton>
    </div>
  )
}

export default Course