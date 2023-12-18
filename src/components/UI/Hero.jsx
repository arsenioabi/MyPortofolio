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
                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                        I'm Arsenio Jusuf Abimanyu <br />
                        Front End Web Developer
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
                        A Fresh Graduate of Informatics Engineering with a Bachelor of Computer Science degree GPA 3.25 Telkom University. During my College, I had a 
                        great enthusiasm in developing technical and creative skills in the world of information technology and have undergone various projects that include 
                        roles as Software Engineer, Full Stack Developer, Front End Developer, Back End Developer, and also UI/UX Designer. These experiences helped me 
                        to understand holistically about software development, from designing attractive user interfaces to implementing complex business logic at the Back End 
                        level. I have expertise in various programming languages such as C++, Python, JavaScript, Golang, PHP, and HTML/CSS as well as the ability to use 
                        various software development tools such as Git, React, Vue, Node.js, and more. In addition, I also have a strong understanding of UI/UX principles with 
                        Figma which helps me to create an optimal user experience. I am a continuous learner and innovator, ready to take on new challenges in the world of 
                        information technology. I am committed to continuously improving my technical and creative skills to add value to the company and projects I am 
                        involved in. I believe that the combination of my experience and passion will make me a valuable asset in the world of software development.
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

                {/*foto arsenio jusuf abimanyu*/}
                <div data-aos='fade-up' data-aos-duration='1500' className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt='' />
                    </figure>
                </div>
                {/*end foto*/}

                {/*isi konten di sebelah kanan*/}
                <div className='md:basics-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Years of Work Experience
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={5} duration={2} suffix='+' />
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
