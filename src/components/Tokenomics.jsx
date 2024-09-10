import React from 'react'
import Chart from '../assets/images/webp/Chart.webp'
import Chartline from '../assets/images/webp/Chartline.webp'
import Tokenbottomlayer from '../assets/images/webp/Tokenbottomlayer.webp'
import TokenLeftTree from '../assets/images/webp/TokenLeftTree.webp'
import CenterDragon from '../assets/images/webp/CenterDragon.webp'
import FullChart from '../assets/images/webp/TokenFullChart.webp'
import TopLayer from '../assets/images/webp/UtilityTopLayer.webp'
import layergray from '../assets/images/webp/TokenShadows.webp'
import TokenfDragontoken from '../assets/images/webp/TokenfDragontoken.png'
import 'animate.css';
const Tokenomics = () => {
    return (
        <>
            <div className="bg-[#0A4740] -mt-[2px] relative z-[1]" id="Tokenomic">
                <img src={TopLayer} alt="toplyare" className="absolute top-0 z-[-1] left-0 right-0 object-cover w-full" />
                <img src={TokenfDragontoken} alt="dargantooken" data-aos="zoom-in" className=" animate-herobounceanimnate max-sm:hidden absolute z-[2] left-[0%] max-w-[211px] max-h-[193px] w-full bottom-[3%]" />
                <img src={TokenLeftTree} alt="TokenLeftTree" className="animate-TokenLeftTree absolute z-[1] left-[-1%] sm:max-w-[352px] max-w-[150px] max-h-[150px] sm:max-h-[446px] w-full bottom-[7%]" />
                <img src={Tokenbottomlayer} alt="Tokenbottomlayer" className=" max-sm:hidden absolute bottom-0 left-0 right-0 w-full" />
                <img src={layergray} alt="loyelggrey" className=" absolute right-[0%] z-[-1] top-[18%] max-w-[383px] max-h-[267px]" />
                <div className=" max-w-[1164px] mx-auto px-3 sm:pt-[100px] pt-[70px] lg:pt-[246px] pb-[35px] sm:pb-[100px] lg:pb-[428px]">
                    <h2 className="animate__animated animate__zoomIn text-[39px] sm:text-[64px] text-white text-center font-Chewy font-normal leading-[43px] sm:leading-[83px]" >Tokenomics</h2>
                    <div className=" relative z-[2]">
                        <div className=" relative max-w-[589px] mx-auto z-[1] mt-[50px] sm:mt-[100px] lg:mt-[166px]" >
                            <img src={Chart} alt="chart" className="full_chart lg:flex mx-auto hidden  max-w-[493px] xl:max-w-[589px] w-full " />
                            <img src={FullChart} alt="fullshart" className=" animation-FullChart block lg:hidden" />
                            <img src={CenterDragon} alt="centerdragon" className=" animate-bounce max-w-[133px] hidden lg:block w-full absolute top-[-30%] left-[40%]" />
                            <img src={Chartline} alt="chartline" className="full_chart_2 max-w-[252px] hidden lg:block  w-full absolute top-[-4%] right-[28.5%]" />
                        </div>
                        <div className=" flex justify-center animate__animated animate__backInLeft max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#FBA11D] border-dotted max-lg:p-5 mx-auto rounded-md max-lg:max-w-[500px] items-center gap-[26px] lg:absolute top-[35px] left-[1%]" >
                            <div className=" max-w-[189px] text-center lg:text-end">
                                <p className=" text-[#FBA11D] text-[32px] font-normal leading-[38px] font-Balsamiq"> 333,333,333</p>
                                <p className=" text-white font-normal text-2xl font-Balsamiq pt-[5px] leading-[33px]"> Supply </p>
                            </div>
                            <div className=" lg:block hidden border-[1.48px] border-white w-[15px] h-[88px] border-r-0 border-b-0"></div>
                        </div>
                        <div className=" flex justify-center animate__animated animate__backInRight max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#23AAAC] border-dotted max-lg:p-5 mx-auto  rounded-md max-lg:max-w-[500px] items-center gap-[26px] lg:absolute top-[76%] left-[11%]" >
                            <div className=" max-w-[203px] text-center lg:text-end">
                                <p className=" text-[#23AAAC] text-[32px] font-normal leading-[38px] font-Balsamiq">
                                    95% Uniswa
                                    <br />
                                    5% Marketing
                                </p>
                                <p className=" text-white font-normal text-2xl font-Balsamiq pt-[5px] leading-[33px]"> Allocation</p>
                            </div>
                            <div className=" lg:block hidden border-[1.48px] border-white skew-y-[-50deg] w-[15px] h-[88px] border-r-0 border-b-0"></div>
                        </div>
                        <div className=" flex animate__animated animate__backInLeft flex-col max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#D45B07] border-dotted max-lg:p-5 mx-auto  rounded-md max-lg:max-w-[500px] justify-center items-center gap-[17px] lg:absolute bottom-[-41%] left-[45%]" >
                            <div className=" lg:block hidden border-r-[1.48px] border-white  w-[15px] h-[43px]  border-b-0"></div>
                            <div className=" max-w-[203px] text-center lg:text-end">
                                <p className=" text-[#D45B07] text-[32px] font-normal leading-[38px] font-Balsamiq"> No Tax </p>
                            </div>
                        </div>
                        <div className=" flex animate__animated animate__backInRight flex-row-reverse max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#FB5352] border-dotted max-lg:p-5 mx-auto  rounded-md max-lg:max-w-[500px] justify-center items-center gap-[26px] lg:absolute top-[83%] right-[7%]"  >
                            <div className=" max-w-[248px] text-center lg:text-end">
                                <p className=" text-[#FB5352] text-[32px] font-normal leading-[38px] font-Balsamiq"> No Mint Function </p>
                            </div>
                            <div className=" lg:block hidden border-[1.48px] border-white skew-y-[50deg] w-[15px] h-[88px] border-l-0 border-b-0"></div>
                        </div>
                        <div className=" animate__animated animate__backInLeft flex flex-row-reverse max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#5D9630] border-dotted max-lg:p-5 mx-auto  rounded-md max-lg:max-w-[500px] justify-center items-center gap-[26px] lg:absolute top-[35px] right-[1%]" >
                            <div className=" max-w-[189px] text-center lg:text-start">
                                <p className=" text-[#8EC627] text-[32px] font-normal leading-[38px] font-Balsamiq"> Liquidity lock for 1 year </p>
                            </div>
                            <div className=" lg:block hidden border-[1.48px] border-white w-[15px] h-[88px] border-l-0 border-b-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tokenomics