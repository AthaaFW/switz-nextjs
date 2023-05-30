'use client';

import Navbar from '@/components/Navbar'
import HeroCard from '@/components/HeroCard'
import GuideCard from '@/components/GuideCard';
import Footer from '@/components/Footer';
import heroIcon1 from '../asset/headphone.svg'
import heroIcon2 from '../asset/hiking.svg'
import heroIcon3 from '../asset/hotel.svg'
import { useState, useEffect } from 'react'
import grid1 from '../asset/image 15.svg'
import grid2 from '../asset/image 18.svg'
import grid3 from '../asset/image 16.svg'
import grid4 from '../asset/image 20.svg'
import grid5 from '../asset/image 17.svg'
import grid6 from '../asset/image 19.svg'
import clock from '../asset/clock.svg'
import dollar from '../asset/dollar.svg'
import pp from '../asset/pp.svg'
import pp2 from '../asset/Ellipse 14 (1).svg'
import pp3 from '../asset/Ellipse 14 (2).svg'
import pp4 from '../asset/Ellipse 14 (3).svg'
import pp5 from '../asset/Ellipse 14 (4).svg'
import pp6 from '../asset/Ellipse 14 (5).svg'
import wave from '../asset/wave.svg'
import arrow from '../asset/kanana.svg'
import Image from 'next/image'

export default function Home() {

  const [nav, setNav]= useState(false)
  useEffect(() => {
    const changeColor = ()=>{
      if (window.scrollY >= 50) {
        setNav(true);
      }else{
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar color={nav}/>
      <div id='hero' className='w-screen h-[80vh] flex flex-col items-center justify-center overflow-hidden gap-[35px] pt-[5rem]'>
        <h1 className='text-[60px] text-center dmserif'>
          Switzerland Has Never Been <br />
          So Affordable
        </h1>
        <h1 className='text-[20px] font-extralight text-center'>
          Discover Switzerland. Choose the best programs, <br />
          guides, hotels and restaurant.
        </h1>
        <button className='px-[20px] py-[10px] bg-lightRed rounded-md'>
          <h1 className='glow font-semibold'>Start To Explore</h1>
        </button>
      </div>
      <div className='w-full flex flex-row items-center justify-center px-[10rem] gap-[40px]'>
        <HeroCard title="Audio Guide" para="Travel on your own. Use the" para2="services of an audio guide." icon={heroIcon1}/>
        <HeroCard title="Program" para="Choose a travel program that" para2="is right for your." 
        icon={heroIcon2}/>
        <HeroCard title="Hotel & Restaurant" para="Good hotel and restaurant" para2="at the best prices." 
        icon={heroIcon3}/>
      </div>
      <div className='flex flex-col items-center mt-[10rem] gap-[2rem]'>
          <h1 className='text-5xl dmserif'>Top Program</h1>
          <h1 className='text-gray-500 text-center'>
            Our program are compiled by the best guides. Each tourist <br />
            will be able to choose a program according to their level
            </h1>          
          <div className='mt-[2rem] flex flex-row items-center justify-center gap-[10px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-[300px] h-[200px] relative'>
          <Image src={grid1} alt='grid' width={300} height={200} className='absolute top-0 left-0 z-[-10]'/>
          <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>The Best of Zurich</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$80 <Image src={clock} alt='clock' width={15}/>3 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Emily Fenderson</h1>
                <p className='text-[10px] text-gray-400'>City Guide</p>
              </div>
            </div>
          </div>
          </div>
          <div className='w-[300px] h-[400px] relative'>
            <Image src={grid2} alt='grid' width={300} height={400} className='absolute top-0 left-0 z-[-10]'/>
            <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>Into the Alps</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$800 <Image src={clock} alt='clock' width={15}/>48 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp2} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Leonardo D Art</h1>
                <p className='text-[10px] text-gray-400'>Adventure Guide</p>
              </div>
            </div>
          </div>
          </div>

        </div>
        <div className='flex flex-col-reverse gap-[10px]'>
        <div className='w-[300px] h-[200px] relative'>
          <Image src={grid4} alt='grid' width={300} height={200} className='absolute top-0 left-0 z-[-10]'/>
          <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>Bern - Capital and <br /> Countryside Tour</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$80 <Image src={clock} alt='clock' width={15}/>3 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp3} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Jack Kleen</h1>
                <p className='text-[10px] text-gray-400'>City Guide</p>
              </div>
            </div>
          </div>
          </div>
          <div className='w-[300px] h-[400px] relative'>
            <Image src={grid3} alt='grid' width={300} height={400} className='absolute top-0 left-0 z-[-10]'/>
            <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>Mountain, Cheese <br /> and Chocolate</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$200 <Image src={clock} alt='clock' width={15}/>12 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp4} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Alex Mencer</h1>
                <p className='text-[10px] text-gray-400'>Adventure Guide</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
        <div className='w-[300px] h-[200px] relative'>
          <Image src={grid5} alt='grid' width={300} height={200} className='absolute top-0 left-0 z-[-10]'/>
          <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>Rafting in Interlaken</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$120 <Image src={clock} alt='clock' width={15}/>3 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp5} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Jeff Bezoz</h1>
                <p className='text-[10px] text-gray-400'>Extreme Guide</p>
              </div>
            </div>
          </div>
          </div>
          <div className='w-[300px] h-[400px] relative'>
            <Image src={grid6} alt='grid' width={300} height={400} className='absolute top-0 left-0 z-[-10]'/>
            <div className='flex flex-col justify-between p-[15px] h-full'>
            <div>
            <h1>Swiss Ski Experience</h1>
            <p className='text-[13px] flex flex-row gap-[5px] items-center'><Image src={dollar} alt='dollar' width={15}/>$220 <Image src={clock} alt='clock' width={15}/>12 Hours</p>
            </div>
            <div className='flex flex-row items-center gap-[5px]'>
              <Image src={pp6} alt='pp' width={35}/>
              <div className='flex flex-col'>
                <h1 className='text-[13px]'>Jason Mclovin</h1>
                <p className='text-[10px] text-gray-400'>Extreme Guide</p>
              </div>
            </div>
          </div>
          </div>
        </div>
          </div>
          <button className='px-[20px] py-[10px] bg-lightRed rounded-md'>
          <h1 className='glow font-semibold'>Show More</h1>
        </button>
      </div>
      <div className='flex flex-col items-center mt-[10rem] gap-[2rem]'>
      <h1 className='text-5xl dmserif text-center'>Emotion are the best you <br /> can get in this life</h1>
          <h1 className='text-gray-500 text-center'>
            Check out the reviews of people who used <br /> our services 
          </h1>
        <Image src={wave} alt='wave'/>
      </div>
      <div className='flex flex-col items-center mt-[10rem] gap-[2rem]'>
      <h1 className='text-5xl dmserif'>Our Guides</h1>
          <h1 className='text-gray-500 text-center'>
            Our certified and knowlegable guides live <br />
            and breathe the adventure life
          </h1>
        <div className='flex flex-row relative gap-[1rem] w-[120%] justify-center'>
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <div className='flex flex-row absolute top-[35%] bottom-[50%] left-[14.5%]'>
            <button className='bg-lightRed rounded-full p-[20px] py-[35px] justify-center items-center flex flex-col'><Image src={arrow} alt='arrow' width={30}/></button>
          </div>
          <div className='flex flex-row absolute top-[50%] bottom-[35%] right-[14.5%] rotate-180'>
            <button className='bg-lightRed rounded-full p-[20px] py-[35px] justify-center items-center flex flex-col'><Image src={arrow} alt='arrow' width={30}/></button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
