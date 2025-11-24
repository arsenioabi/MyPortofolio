import React from 'react';

import CountUp from "react-countup";

import heroImg from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className='pt-0' id="about">
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>

                {/*isi konten di sebelah kiri*/}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
                        Hello Welcome
                    </h5>
                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[780] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                        I'm Arsenio Jusuf Abimanyu <br />
                        Quality Assurance Software Engineer
                    </h1>

                    <div data-aos='fade-right' data-aos-duration='1800' data-aos-delay='200' className='flex items-center gap-6 mt-7'>
                        <a href='#contact'>
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-mail-line"></i> Hire me
                            </button>
                        </a>
                        <a href='#portofolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'> See Portofolio</a>
                    </div>
                    <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 text-justify'><span><i class="ri-megaphone-fill"></i></span>
                         I am a Quality Assurance (QA) Tester with 2 years of experience in manual and automated testing of web and mobile applications. Skilled in using
                         Katalon, Selenium, and Appium for automation, as well as experienced in API testing (Postman), SQL validation, load testing (JMeter), and smoke
                         testing to ensure system stability prior to release. I understand the concepts and implementation of CI/CD in SIT and Production environments, and
                         actively participate in User Acceptance Testing (UAT) alongside the Product Owner to ensure the quality of features delivered to users. In my
                         experience, I have successfully optimized regression test time by up to 40% through the implementation of efficient automation. I have strong analytical
                         skills, think critically to find the root cause of problems, and collaborate effectively with cross-functional teams such as Developers, Product Owners,
                         and UI/UX Designers. I am quality-oriented, meticulous, and continuously develop myself to improve the efficiency and reliability of the testing
                         process.
                    </p>

                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
                        <span>
                            <a href='https://www.linkedin.com/in/arsenioabi/' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-linkedin-box-fill"></i></a>
                        </span>
                        <span>
                            <a href='https://www.instagram.com/arsenioabi/' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-line"></i></a>
                        </span>
                        <span>
                            <a href='https://github.com/arsenioabi' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-fill"></i></a>
                        </span>
                    </div>
                </div>
                {/*end konten*/}

                {/*foto arsenio*/}
                <div data-aos='fade-up' data-aos-duration='1500' className='basis-1/3 mt-3 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt='' />
                    </figure>
                </div>
                {/*end foto*/}

                {/*isi konten di sebelah kanan*/}
                <div className='md:basics-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={3} duration={2} suffix='' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Years of Work Experiences
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={11} duration={2} suffix='' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Projects Completed
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={85} duration={2} suffix='%' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Success Rate
                        </h4>
                    </div>
                </div>
                {/*end konten*/}
            </div>
        </div>
    </section>
  );
};

export default Hero;
