import React from 'react'
import heroImg from "../assets/hero.png"
import { Flame, MoveRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative'>
            <div className='bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12'>
                <div className='relative'>
                    <img src={heroImg} alt="" className='rounded-3xl mb-3 relative' height={211} width={211} />
                    <span className='absolute top-1/2 left-1/2 flexCenter -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-secondary rounded-full cursor-pointer'>
                        <span className='absolute rounded-full bg-white opacity-50 animate-ping '><Play /></span>
                    </span>
                </div>
                <p className='text-[13px]'> <b className='uppercase'>Unlock</b> your best look, on click at a time, Your  style upgrade starts here, hop today!</p>
            </div>
            <div className='mt-12 sm:mt-20 xl:mt-40 max-w-[777px]'>
                <h5 className='uppercase flex items-baseline gap-x-2 text-secondary medium-18 '>modern collection <Flame /></h5>
                <p className='h1 font-[500] capitalize max-w-[722px]'>Every click brings you closer to perfection , Shop now!</p>
            </div>

            <div className="flex">
                <Link
                    to={"/collection"}
                    className="bg-white text-xs font-medium pl-5 rounded-e-full flexCenter gap-x-2 group"
                >
                    Click Our Modern Collection
                    <MoveRight className="bg-secondary text-white w-11 h-11 rounded-full p-3 m-[3px] border border-white group-hover:-rotate-[20deg]" />
                </Link>
            </div>

        </section>
    )
}

export default Hero