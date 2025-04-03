import Image from 'next/image'
import React from 'react'
import heroLeftOne from '../assets/hero-left-01.png'
import heroLeftTwo from '../assets/hero-left-02.png'
import heroLeftThree from '../assets/hero-left-03.png'
import heroRightOne from '../assets/hero-right-01.png'
import heroRightTwo from '../assets/hero-right-02.png'
import heroRightThree from '../assets/hero-right-03.png'
import WaitListBtn from '@/components/WaitListBtn'



const Hero = () => {
    return (
        <div className="relative h-[90vh] overflow-hidden flex justify-center items-center ">
            {/* ABS IMAGES START */}
            <Image width={200} height={200} src={heroLeftOne} alt='' className='absolute  top-24 hidden  xl:block left-14' />
            <Image width={150} height={150} src={heroLeftTwo} alt='' className='absolute hidden  xl:block top-96 left-0' />
            <Image width={200} height={200} src={heroLeftThree} alt='' className='absolute hidden  xl:block top-[28rem] left-48' />

            {/* SVG ICONS */}
            <div className='absolute hidden  xl:block left-60 top-[22rem]'>
                <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="31" rx="8" fill="black" />
                    <path d="M15.1141 17.9301L19.4792 23.75H25.8959L18.6927 14.1452L24.6859 7.25H22.2567L17.5662 12.6455L13.5209 7.25H7.10425L13.9884 16.4304L7.62675 23.75H10.0559L15.1141 17.9301ZM20.3959 21.9167L10.7709 9.08333H12.6042L22.2292 21.9167H20.3959Z" fill="white" />
                </svg>

            </div>

            <div className='absolute hidden  xl:block left-8 top-[37rem]'>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="31.3461" rx="8" fill="url(#paint0_linear_152_92)" />
                    <path d="M21.6224 9.45435C20.9961 9.45435 20.4883 9.96217 20.4883 10.5885C20.4883 11.2148 20.9961 11.7227 21.6224 11.7227C22.2488 11.7227 22.7566 11.2148 22.7566 10.5885C22.7566 9.96217 22.2488 9.45435 21.6224 9.45435Z" fill="white" />
                    <path d="M16.579 10.9092C13.9519 10.9092 11.8145 13.0466 11.8145 15.6738C11.8145 18.3009 13.9519 20.4383 16.579 20.4383C19.2062 20.4383 21.3436 18.3009 21.3436 15.6738C21.3436 13.0466 19.2062 10.9092 16.579 10.9092ZM16.579 18.7253C14.8964 18.7253 13.5264 17.3564 13.5264 15.6738C13.5264 13.9912 14.8953 12.6223 16.579 12.6223C18.2617 12.6223 19.6305 13.9912 19.6305 15.6738C19.6317 17.3564 18.2628 18.7253 16.579 18.7253Z" fill="white" />
                    <path d="M20.3618 25.3461H12.6371C9.43328 25.3461 6.82642 22.7392 6.82642 19.5354V11.8107C6.82642 8.60573 9.43328 6 12.6371 6H20.3618C23.5657 6 26.1737 8.60686 26.1737 11.8107V19.5354C26.1737 22.7392 23.5668 25.3461 20.3618 25.3461ZM12.6383 7.82029C10.4377 7.82029 8.64671 9.61011 8.64671 11.8118V19.5365C8.64671 21.7371 10.4365 23.5281 12.6383 23.5281H20.3629C22.5635 23.5281 24.3545 21.7382 24.3545 19.5365V11.8118C24.3545 9.61124 22.5635 7.82029 20.3629 7.82029H12.6383Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_152_92" x1="28.1676" y1="4.59043" x2="6.03119" y2="27.8948" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0011" stopColor="#FBE18A" />
                            <stop offset="0.2094" stopColor="#FCBB45" />
                            <stop offset="0.3765" stopColor="#F75274" />
                            <stop offset="0.5238" stopColor="#D53692" />
                            <stop offset="0.7394" stopColor="#8F39CE" />
                            <stop offset="1" stopColor="#5B4FE9" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            {/* RIGHT SIDE IMAGES */}
            <Image src={heroRightOne} width={150} height={150} alt='' className='absolute  top-20 hidden  xl:block right-28' />
            <Image src={heroRightTwo} width={200} height={200} alt='' className='absolute top-[21rem] hidden  xl:block right-0' />
            <Image src={heroRightThree} width={160} height={160} alt='' className='absolute top-[28rem] hidden  xl:block right-80' />

            {/* SVG ICONS */}
            <div className='absolute hidden  xl:block right-12 top-40'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="8" fill="black" />
                    <rect width="33" height="33" rx="8" fill="url(#paint0_linear_152_106)" />
                    <rect width="33" height="33" rx="8" fill="url(#paint1_linear_152_106)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.9626 13.5929C22.3123 14.5578 23.9667 15.1254 25.7532 15.1254V11.6891C25.4146 11.6891 25.0783 11.6541 24.7477 11.5842V14.2892C22.9612 14.2892 21.3068 13.7216 19.9571 12.7567V19.7693C19.9571 23.2767 17.1122 26.1206 13.6025 26.1206C12.2934 26.1206 11.0757 25.7244 10.0646 25.0462C11.219 26.2255 12.8272 26.9568 14.608 26.9568C18.1177 26.9568 20.9626 24.1129 20.9626 20.6055V13.5929ZM22.204 10.1261C21.5145 9.37228 21.0608 8.39837 20.9626 7.32177V6.87939H20.009C20.2494 8.24941 21.0676 9.41742 22.204 10.1261ZM12.2844 22.3536C11.8995 21.848 11.6908 21.2307 11.6919 20.5942C11.6919 18.9895 12.9931 17.6894 14.5989 17.6894C14.898 17.6894 15.1959 17.7346 15.4803 17.826V14.3129C15.1474 14.2678 14.8111 14.2475 14.4748 14.2554V16.9897C14.1893 16.8995 13.8914 16.8532 13.5923 16.8532C11.9864 16.8532 10.6853 18.1544 10.6853 19.758C10.6853 20.8933 11.3353 21.8751 12.2844 22.3536Z" fill="#EE1D52" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9571 12.7568C21.3079 13.7217 22.9612 14.2893 24.7476 14.2893V11.5843C23.75 11.3721 22.8675 10.8507 22.204 10.1262C21.0675 9.41751 20.2494 8.24837 20.009 6.88062H17.5048V20.6045C17.4992 22.2047 16.2003 23.5002 14.5978 23.5002C13.6532 23.5002 12.8147 23.0511 12.2843 22.3537C11.3364 21.8752 10.6852 20.8934 10.6852 19.7581C10.6852 18.1533 11.9864 16.8533 13.5923 16.8533C13.9004 16.8533 14.196 16.9007 14.4748 16.9898V14.2554C11.0272 14.3265 8.25439 17.1422 8.25439 20.6056C8.25439 22.3345 8.94506 23.9009 10.0657 25.0463C11.0768 25.7245 12.2934 26.1206 13.6036 26.1206C17.1132 26.1206 19.9582 23.2768 19.9582 19.7694L19.9571 12.7568Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.7477 11.5842V10.8529C23.8483 10.8541 22.9669 10.6024 22.204 10.1262C22.8789 10.8654 23.7681 11.3754 24.7477 11.5842ZM20.0091 6.88058C19.9865 6.74967 19.9684 6.61876 19.956 6.4856V6.04321H16.4983V19.7671C16.4926 21.3673 15.1937 22.6628 13.5912 22.6628C13.1206 22.6628 12.6771 22.5511 12.2833 22.3525C12.8148 23.0488 13.6533 23.4991 14.5967 23.4991C16.1981 23.4991 17.4981 22.2035 17.5038 20.6033V6.88058H20.0091ZM14.4737 14.2554V13.4767C14.1848 13.4372 13.8936 13.4169 13.6014 13.4181C10.0917 13.4181 7.2467 16.2619 7.2467 19.7693C7.2467 21.9688 8.36505 23.9065 10.0646 25.0463C8.94398 23.9019 8.25334 22.3344 8.25334 20.6056C8.25334 17.1421 11.0261 14.3265 14.4737 14.2554Z" fill="#69C9D0" />
                    <defs>
                        <linearGradient id="paint0_linear_152_106" x1="28.1671" y1="4.83264" x2="4.83196" y2="28.1678" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEFB01" />
                            <stop offset="1" stopColor="#FCBB45" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_152_106" x1="4.83241" y1="4.83263" x2="28.1676" y2="28.1678" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#22004A" />
                            <stop offset="0.9565" stopColor="#020003" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <div className='absolute hidden  xl:block right-64 top-80'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="8" fill="black" />
                    <rect width="33" height="33" rx="6" fill="url(#paint0_linear_152_102)" />
                    <path d="M6.37549 21.8159C6.37549 21.7109 6.37549 21.6049 6.37549 21.4999C6.50527 21.3498 6.64182 21.2212 6.85285 21.1794C8.51402 20.8499 9.62448 19.7913 10.463 18.401C11.1672 17.2319 11.0543 16.9655 9.75539 16.5051C9.6809 16.4792 9.60417 16.4577 9.53194 16.4272C9.25094 16.3121 8.97333 16.1891 8.74198 15.9871C8.1608 15.4815 8.50499 14.7537 9.19 14.5889C9.69106 14.4681 10.1278 14.7909 10.6142 14.8507C10.9392 14.8913 11.069 14.7819 11.0295 14.4354C10.9268 13.5439 10.929 12.6467 10.9708 11.7518C11.0509 10.0444 11.8905 8.74432 13.3125 7.90132C15.3889 6.67011 17.5602 6.65544 19.6525 7.88214C20.9581 8.6484 21.8011 9.80738 21.984 11.3625C22.1025 12.3736 22.0551 13.387 21.9761 14.4004C21.9411 14.8406 22.0314 14.9207 22.4658 14.8191C23.0053 14.6927 23.4578 14.414 24.0187 14.6611C24.3189 14.7932 24.5807 15.0764 24.5728 15.4048C24.5671 15.6294 24.4362 15.8359 24.2669 15.9837C24.0074 16.2094 23.67 16.3347 23.3551 16.4622C23.1113 16.5615 22.8574 16.6383 22.6204 16.7489C22.1295 16.9791 21.9885 17.2827 22.2187 17.7679C23.0132 19.4471 24.1812 20.7224 26.0692 21.1659C26.2994 21.22 26.4845 21.3137 26.6244 21.501C26.6244 21.606 26.6244 21.7121 26.6244 21.817C26.445 22.1849 26.1256 22.3881 25.7622 22.5257C25.3932 22.6657 25.0219 22.8225 24.6258 22.8474C24.0785 22.8823 23.7907 23.1216 23.7072 23.6915C23.6282 24.2332 23.4646 24.311 22.9116 24.2659C22.7807 24.2557 22.6509 24.2309 22.5211 24.2083C21.4389 24.0165 20.4221 24.126 19.5317 24.8448C19.3579 24.9848 19.1649 25.1021 18.9776 25.224C17.4609 26.2081 15.908 26.3209 14.3236 25.3967C13.8914 25.145 13.4829 24.855 13.0631 24.5808C12.7166 24.3539 12.3431 24.2275 11.9278 24.1643C11.271 24.065 10.6424 24.2117 10.0025 24.2828C9.67413 24.3189 9.35702 24.2253 9.33784 23.8856C9.2927 23.0674 8.79163 22.8665 8.10324 22.7909C7.78274 22.7559 7.46563 22.625 7.16319 22.4987C6.83254 22.3598 6.53235 22.1646 6.37549 21.8159Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_152_102" x1="28.1671" y1="4.83264" x2="4.83196" y2="28.1678" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEFB01" />
                            <stop offset="1" stopColor="#FCBB45" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <div className='absolute hidden  xl:block right-28 top-[37rem]'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="8" fill="black" />
                    <rect width="33" height="33" rx="8" fill="url(#paint0_linear_152_113)" />
                    <rect width="33" height="33" rx="8" fill="url(#paint1_linear_152_113)" />
                    <path d="M25.5281 14.1426C25.5281 11.9544 23.7541 10.1804 21.5659 10.1804H11.4341C9.24595 10.1804 7.47192 11.9544 7.47192 14.1426V18.8576C7.47192 21.0458 9.24595 22.8198 11.4341 22.8198H21.5659C23.7541 22.8198 25.5281 21.0458 25.5281 18.8576V14.1426ZM19.5696 16.8533L15.0262 19.1013C14.8479 19.1972 14.243 19.0686 14.243 18.8666V14.2521C14.243 14.0467 14.8535 13.9181 15.0318 14.0196L19.3811 16.3861C19.5628 16.4899 19.7547 16.754 19.5696 16.8533Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_152_113" x1="28.1671" y1="4.83264" x2="4.83196" y2="28.1678" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEFB01" />
                            <stop offset="1" stopColor="#FCBB45" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_152_113" x1="28.1676" y1="4.83264" x2="4.83241" y2="28.1678" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF0000" />
                            <stop offset="1" stopColor="#850000" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>


            {/* ABS IMAGES END */}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl  ">
                    <div className="flex flex-col sm:text-center items-center ">

                        <div className="max-w-xl  md:mx-auto text-center lg:max-w-2xl  ">
                            <h1 data-aos="fade-up" data-aos-duration="400" className="max-w-xl mb-2 text-3xl font-bold sm:leading-[55px] font-poppins text-[#1D1B1D] sm:text-[55px] md:mx-auto">
                                Partner with Top Creators & Brands
                            </h1>
                            <h2 data-aos="fade-up" data-aos-duration="500" className='bg-gradient-to-r  from-[#8E44AD] to-[#E91E63] bg-clip-text text-transparent font-playfair text-xl sm:text-[48px] tracking-tighter'>Monetize Influence. Earn on Autopilot.</h2>
                            <p data-aos="fade-up" data-aos-duration="600" className="text-base max-w-md text-[#1D1B1D] font-medium mx-auto mt-5 font-poppins">
                                Learn the proven system to monetize audiences, help creators scale, and earn monthly recurring income. <br /> *No experience needed*
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <WaitListBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
