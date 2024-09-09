import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import RoadMapimg from '../assets/images/webp/RoadMapimg.webp';
import ScrollTrigger from 'gsap/ScrollTrigger';
const Roadmap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.animate-fade-in',
      { opacity: 0,
        x: "-900"
       },
      {
        opacity: 1, 
        duration: 2 ,
        ease: "power3.out",
         x: "0",
        delay: 0.5,
        scrollTrigger: {
          trigger: '.animate-fade-in',
          start: '40% 90%',
          end: 'bottom 50%',
        }
      }
    );
    gsap.fromTo(
      '.animate-fade',
      { opacity: 0,
        x: "-900"
       },
      {
        opacity: 1, 
        duration: 2 ,
        ease: "power3.out",
         x: "0",
        delay: 0.5,
        scrollTrigger: {
          trigger: '.animate-fade',
          start: '40% 90%',
          end: 'bottom 50%',
        }
      }
    );
    gsap.fromTo(
      '.animate-slide-in-left',
      { opacity: 0,
        x: "900"
       },
      {
        opacity: 1, 
        duration: 2 ,
        ease: "power3.out",
         x: "0",
        delay: 0.5,
        scrollTrigger: {
          trigger: '.animate-slide-in-left',
          start: '40% 90%',
          end: 'bottom 50%',
        }
      }
    );  
    gsap.fromTo(
      '.animate-slide-in',
      { opacity: 0,
        x: "900"
       },
      {
        opacity: 1, 
        duration: 2 ,
        ease: "power3.out",
         x: "0",
        delay: 0.5,
        scrollTrigger: {
          trigger: '.animate-slide-in',
          start: '40% 90%',
          end: 'bottom 50%',
        }
      }
    );
    
    gsap.fromTo(
      '.animate-pulse',
      { scale: 1 },
      { scale: 1.2, repeat: -1, yoyo: true, duration: 1 }
    );
  }, []);

  return (
    <div className="bg-[#09655A] relative z-[1] -mt-[2px] overflow-hidden" id="Roadmap">
      <img
        src={RoadMapimg}
        alt="roadmapimg"
        className="max-sm:hidden mx-auto absolute top-[10%] right-[0%] z-[-1] left-0 h-[89%] animation_roadmap"
      />
      <div className="sm:hidden block absolute sm:left-[70px] left-[40px] bottom-0 top-[11%] h-[85%] w-[15px] border-l-[11px] border-dotted border-[#0a4740]"></div>
      <div className="max-w-[1164px] px-3 mx-auto pb-[35px] sm:pb-[60px]">
        <h2
          data-aos="fade-down"
          className="text-[39px] sm:text-[64px] text-white text-center font-chewy leading-[43px] sm:leading-[83px] animate-f ade-in"
        >
          Roadmap
        </h2>
        <div
       
          className="max-sm:after:absolute animate-fade-in max-sm:relative after:animate-pulse after:bg-[#FBA11D] after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px] sm:mt-[97px] mt-[50px]  "
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className="text-[#FBA11D] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              01
            </h3>
            <ul>
              <li className="list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Launch $DINO & Website & Social Media.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Building the community.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 1.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="max-sm:after:absolute animate-slide-in-left max-sm:relative after:animate-pulse after:bg-[#8EC627] after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[855px] sm:ml-auto sm:mt-[200px] lg:mt-[272px] mt-[50px]  "
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className="text-[#8EC627] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              02
            </h3>
            <ul>
              <li className="list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                CoinGecko & Coinmarketcap listing.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Introduction to Buyback & Burning mechanism
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 2.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="max-sm:after:absolute animate-fade max-sm:relative after:animate-pulse after:bg-[#D45B07]  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px] sm:mt-[128px] mt-[50px]  "
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className="text-[#D45B07] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              03
            </h3>
            <ul>
              <li className="list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Utility and Usecase Introduction.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                CEX Listings
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 3.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="max-sm:after:absolute animate-slide-in max-sm:relative after:animate-pulse after:bg-[#23AAAC]  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px] sm:ml-auto sm:pt-[187px] sm:pb-[100px] mt-[50px]  "
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className="text-[#23AAAC] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              04
            </h3>
            <ul>
              <li className="list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Staking Introduction.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                DINO NFT Collection.
              </li>
              <li className="pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
