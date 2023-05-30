import Image from "next/image";

const HeroCard = ({title, para, para2, icon}) => {
    return ( 
        <div className="w-1/3 py-[1.5rem] px-[2rem] bg-whiteTrans glow flex flex-col gap-[10px]">
            <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl">{title}</h1>
            <Image src={icon} alt="icon"/>
            </div>
            <p className="text-sm text-gray-400">
                {para} <br />
                {para2}
            </p>
            <h1 className="herocard-link pt-[5px]">Select Guide</h1>
        </div>
     );
}
 
export default HeroCard;