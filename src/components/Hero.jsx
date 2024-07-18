import React from 'react';

const Hero = () => {

    return (
        <div className="pt-12">
            <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">

                        <div>
                            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Global Health Solutions</h1>
                            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                            <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                                <div className="relative">
                                    <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                                            <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <input type="email" name="" id="" placeholder="Try Java Developer, React Dev etc." className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
                                    </div>
                                </div>
                                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Find A Developer</button>
                                </div>
                            </form>

                            <div className="mt-8 sm:mt-12">
                                <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>

                                <div className="flex items-center mt-3">
                                    <div className="flex">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08784 19.3958L7.37124 15.4456C7.53194 14.9512 7.35589 14.4095 6.93528 14.104L3.57507 11.6626C2.63466 10.9794 3.11796 9.49182 4.28042 9.49182H8.43383C8.95368 9.49182 9.41433 9.15706 9.57504 8.66264L10.8586 4.71248Z" fill="#FF00FF" />
                                        </svg>
                                        <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08784 19.3958L7.37124 15.4456C7.53194 14.9512 7.35589 14.4095 6.93528 14.104L3.57507 11.6626C2.63466 10.9794 3.11796 9.49182 4.28042 9.49182H8.43383C8.95368 9.49182 9.41433 9.15706 9.57504 8.66264L10.8586 4.71248Z" fill="#FF1493" />
                                        </svg>
                                        <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08784 19.3958L7.37124 15.4456C7.53194 14.9512 7.35589 14.4095 6.93528 14.104L3.57507 11.6626C2.63466 10.9794 3.11796 9.49182 4.28042 9.49182H8.43383C8.95368 9.49182 9.41433 9.15706 9.57504 8.66264L10.8586 4.71248Z" fill="#7B68EE" />
                                        </svg>
                                        <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08784 19.3958L7.37124 15.4456C7.53194 14.9512 7.35589 14.4095 6.93528 14.104L3.57507 11.6626C2.63466 10.9794 3.11796 9.49182 4.28042 9.49182H8.43383C8.95368 9.49182 9.41433 9.15706 9.57504 8.66264L10.8586 4.71248Z" fill="#FFB400" />
                                        </svg>
                                        <svg className="w-5 h-5 ml-1 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08784 19.3958L7.37124 15.4456C7.53194 14.9512 7.35589 14.4095 6.93528 14.104L3.57507 11.6626C2.63466 10.9794 3.11796 9.49182 4.28042 9.49182H8.43383C8.95368 9.49182 9.41433 9.15706 9.57504 8.66264L10.8586 4.71248Z" fill="#FFB400" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex">
                            {/* <div className="absolute inset-0">
                                <img className="object-cover w-full h-full opacity-50 bg-blue-700" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                            </div> */}
                            <img className="w-full h-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png" alt="description" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
