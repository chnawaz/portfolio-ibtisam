import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";


function Footer() {
  return (
    <>
        <div className='  max-w-[1336px]  h-[32px] gap-[164px] flex pb-[63px] m-auto mt-[164px] xl:px-8 2xl:px-0'>


            <div className='w-[944px] h-[32px] gap-[32px] flex flex-row'>

                <div className='w-[314px] h-[32px] gap-[4px] flex'>
                    <div className='w-[32px] h-[32px]'>
                        <IoMdMail className="w-full h-full" />
                    </div>
                    <div className='w-[278px] h-[29px]'>
                        <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] underline'>Ibtisam.visuals@gmail.com</p>
                    </div>
                </div>

                <div className='w-[250px] h-[32px] gap-[4px] flex ml-[32px]'>
                    <div className='w-[25.33px] h-[25.33px]'>
                        <FaPhone className="w-full h-full" />
                    </div>
                    <div className='w-[200px] h-[29px]'>
                        <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>+92 3067161699</p>
                    </div>
                </div>

            </div>

            
            <div className=' gap-[32px] flex'>
                <div className=''>
                    <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>About</p>
                </div>

                <div className=' gap-[10px] flex'>
                    <div className=''>
                        <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>LinkedIn</p>
                    </div>
                  
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer
