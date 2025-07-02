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
                    <div className='mt-0.5 group  transition duration-300'>
                       <a href="">
                         <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>Ibtisam.visuals@gmail.com</p>
                         <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                       </a>
                    </div>
                </div>

                <div className='w-[250px] h-[32px] gap-[4px] flex ml-[32px]'>
                    <div className='w-[20.33px] h-[20.33px]'>
                        <FaPhone className= "mt-1 w-full h-full" />
                    </div>
                    <div className=' group  transition duration-300 '>
                        <a href="">
                            <p className=' font-[700] text-[24px]  leading-[120%] tracking-[0%]  '>+92 3067161699</p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                        </a>
                    </div>
                </div>

            </div>

            
            <div className=' gap-[32px] flex'>
                <div className=' group  transition duration-300'>
                    <a href="">
                    <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>About</p>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </a>
                </div>

                <div className=' gap-[10px] flex'>
                    <div className='group  transition duration-300'>
                        <a href="">
                            <p className='font-[700] text-[24px]  leading-[120%] tracking-[0%] '>LinkedIn</p>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                        </a>
                    </div>
                  
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer
