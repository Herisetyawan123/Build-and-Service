import React, { useEffect } from 'react';
import ArrowIcon from '../../assets/icon/arrow-right.png';
import InstaIcon from '../../assets/icon/ic_ig.png';
import ImageHero from '../../assets/image-hero.png';
import './Hero.css';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Hero()
{
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section className="container max-w-6xl sm:mx-auto py-5 sm:py-10 mt-5 sm:mt-16 px-4">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex-1 flex flex-col">
                        <h1 className="font-bold text-primary text-xl sm:text-4xl" data-aos="fade-right">Bangun dan kembangkan <br/>Bisnis Anda di Era Digital</h1>
                        <p className="mb-16 md:mb-28 mt-5 md:mt-10 text-sm" data-aos="fade-right">in this pandemic era, the use of technology is growing rapidly. our work depends on technology that we use everyday. web development is one of the needs for workers and corporate. so we’re here to help you to build your own website.</p>
                        <div className="flex flex-col sm:flex-row">
                            <a href="/" data-aos="fade-up" className="flex bg-primary py-3 px-6 transition duration-300 rounded justify-between mb-3 sm:mr-3 btn hover:bg-primary-light" style={{ color: 'white', width: 200 }}>
                                <span className="font-bold">Contact Us</span>
                                <img src={ArrowIcon} className="arrow transition duration-300" width="24" height="24" alt="arrow"></img>
                            </a>
                            <a href="/" data-aos="fade-up" className="flex bg-primary-lights py-3 px-6 transition duration-300 rounded mb-3 btn hover:bg-primary-lightss" style={{ color: 'white', width: 200 }}>
                                <img src={InstaIcon} width="24" height="24" alt="arrow"></img>
                                <span className="text-primary-light font-bold ml-2">Contact Us</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 hidden sm:flex justify-end relative" data-aos="fade-left">
                        <div className="border-2 border-light-blue-500 border-custom absolute" style={{ top: 30 }}>
                        </div>
                            <img  src={ImageHero} className="absolute" style={{ right: 30 }} width="463" height="403"></img>
                    </div>
                </div>
            </section>
        </>
    )
}