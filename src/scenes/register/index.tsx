import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { Widget } from '@typeform/embed-react'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Register = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="register"
      className="gap-16 bg-myprimary-100 py-10 md:h-full md:pb-0">
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Register)}
      />
      <div className='ml-8 justify-center items-center'>
        <Widget id="l29crcrd" style={{ width: '90%'}} className="my-8 md:mx-16 md:my-16 h-[35rem] md:h-[35rem]" />
      </div>
    </section>
    
  )
}

export default Register