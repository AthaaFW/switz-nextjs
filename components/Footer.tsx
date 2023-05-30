import facebook from '../asset/facebook.svg'
import instagram from '../asset/instagram.svg'
import twitter from '../asset/twitter.svg'
import Image from 'next/image'
import send from '../asset/send.svg'

const Footer = () => {
    return ( 
        <div className="mt-[5rem] w-screen flex flex-col items-center justify-center footer py-[2rem] gap-[2rem]">
            <div className='bg-darkPurp2 p-[2rem] w-full flex flex-row justify-center'>
                <div className='flex flex-row space-x-[2rem] items-center'>
                    <h1>Newsletter</h1>
                    <div className='flex flex-row p-[5px] pl-[20px] rounded-full bg-white'>
                        <input type="text" placeholder='Your email' className='bg-transparent text-black focus:outline-none'/>
                        <button className='bg-lightRed rounded-full p-[12px]'><Image src={send} alt='send' width={17}/></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-[5rem]">
                <h1>Home</h1>
                <h1>Tour</h1>
                <h1>About Us</h1>
                <h1>Contact</h1>
            </div>
            <div className='flex flex-row space-x-[2rem]'>
                <Image width={20} src={facebook} alt='facebook'/>
                <Image width={20} src={instagram} alt='instagram'/>
                <Image width={20} src={twitter} alt='twitter'/>
            </div>
            <h1 className='text-gray-300'>@ Copyright 2023 - MeMyself</h1>
        </div>
     );
}
 
export default Footer;