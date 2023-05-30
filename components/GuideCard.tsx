import Image from 'next/image';
import pp from '../asset/Ellipse 14 (1).svg'
import icon1 from '../asset/facebook.svg'
import icon2 from '../asset/instagram.svg'
import icon3 from '../asset/twitter.svg'

const GuideCard = () => {
    return ( 
        <div className="w-1/6 bg-whiteTrans flex flex-col items-center rounded-lg py-[1rem] gap-[1rem] overflow-visible">
            <Image src={pp} alt='pp' width={80}/>
            <div>
            <h1 className='text-xl font-semibold'>Jared Letto</h1>
            <h1 className='text-gray-400 text-sm text-center'>Extreme Guide</h1>
            </div>
            <div className='flex flex-row gap-[10px]'>
                <Image src={icon1} width={20} alt='facebook'/>
                <Image src={icon2} width={20} alt='instagram'/>
                <Image src={icon3} width={20} alt='twitter'/>
            </div>
        </div>
     );
}
 
export default GuideCard;