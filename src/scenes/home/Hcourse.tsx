import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    title: any;
    date: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void; 
};

function Hcourse({title, date, description, setSelectedPage}: Props) {
  return (
    <div className='mt-5 rounded-md border-4 border-white md:h-[15rem] md:w-[20rem] p-8 text-center'>
        <h1 className="text-xl">{title}</h1>
        <p className='my-3 text-lg'>{date}</p>
        <p className='my-3 text-sm'>{description}</p>
        <AnchorLink
          className="text-myprimary-200 text-lg hover:text-myprimary-100"
          onClick={() => setSelectedPage(SelectedPage.Courses)}
          href={`#${SelectedPage.Courses}`}
    >
        <p>Learn More</p>
    </AnchorLink>
    </div>
  )
}

export default Hcourse