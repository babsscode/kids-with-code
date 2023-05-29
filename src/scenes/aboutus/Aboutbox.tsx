import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';

type Props = {
    description: string;
};

function Aboutbox({description}: Props) {
  return (
    <div className='mt-7 rounded-md border-4 border-mysecondary-300 text-white bg-mysecondary-300 p-8 text-center'>
        <p className='text-lg'>{description}</p>
    </div>
  )
};

export default Aboutbox