import React, { Fragment } from 'react'

const words = [
    'CERTIFICATION RECOGNIZED BY TOP CREATORS AND OFFERS IN THE INDUSTRY',
    'CERTIFICATION RECOGNIZED BY TOP CREATORS AND OFFERS IN THE INDUSTRY',
    'CERTIFICATION RECOGNIZED BY TOP CREATORS AND OFFERS IN THE INDUSTRY',
    'CERTIFICATION RECOGNIZED BY TOP CREATORS AND OFFERS IN THE INDUSTRY',
    'CERTIFICATION RECOGNIZED BY TOP CREATORS AND OFFERS IN THE INDUSTRY',
]   

const arrayLength = ['', '']
const Certification = () => {
    return (
        <section className='my-12 overflow-x-clip'>
            <div className='border-y border-[#000000] py-3 overflow-x-clip'>
                <div className="flex">
                    <div className='flex flex-none gap-0.5 py-2 move-left'>
                        {arrayLength.map((_, index) => {
                            return <Fragment key={index}>
                                {words.map((word,i) => {
                                    return <div className='inline-flex items-center gap-4' key={i}>
                                        <span className='text-[#000000] uppercase font-medium text-sm font-helixa'>{word} | </span>
                                    </div>
                                })}
                            </Fragment>
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification