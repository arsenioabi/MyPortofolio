import React from 'react';

import appsImg from '../../assets/images/apps.png';
import designImg from '../../assets/images/design.png';
import dataScienceImg from '../../assets/images/ds.png';
import frontendImg from '../../assets/images/front-end.png';

const Services = () => {
  return (
    <section id='services'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    What do I help
                </h2>
                <p className='lg:max-w-[600] ls:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                I am actively involved in collaborative projects that require creative thinking and innovative solutions. Participate in teams focused on problem-solving and achieving common goals. Master a wide range of technical skills, including building UI/UX, web design and development, graphic design, data analysis. Execute projects with high efficiency and achieve set business goals. Play a role in designing and implementing innovative ideas that produce positive results. Interact with various parties to ensure clear understanding and achievement of common goals. Provide an inclusive and supportive work environment for all team members.
                </p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-2-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                        {/*garis tengah pembatas konten bawah*/}
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'>
                        </div>

                        {/*kartu kiri*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'> Front End Web Developer</h3>
                                            <p className='text-[15px] text-smallTextColor text-justify group-hover:text-white group-hover:font-[500] leading-7'> Played a role in the development of an attractive and responsive user interface, creating a unique and user-friendly user experience. Implement innovative UI/UX designs and ensure design consistency across the website. Master the latest technologies in front-end development, including HTML, CSS, and JavaScript. Have used popular frameworks such as ReactJS or VueJS to build dynamic and interactive interfaces. Work closely with the design team to translate design concepts into functional and aesthetically pleasing code. Engage in internal training to enhance the team's skills in front-end development.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={frontendImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* kartu kanan */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'> UI/UX Designer</h3>
                                            <p className='text-[15px] text-smallTextColor text-justify group-hover:text-white group-hover:font-[500] leading-7'> Design an engaging user interface, combining appealing aesthetics with intuitive functionality. Creating memorable user experiences through standout visual design. Conduct in-depth user research to understand user needs, preferences and challenges. Creating interactive prototypes to visualize design ideas and get early user feedback. Utilize prototyping tools like Figma to accelerate the development cycle. Maintain design consistency across platforms and products, ensuring a strong brand identity. Aligning the design vision with business objectives, ensuring that every design element has a positive impact on users and the business. Implement innovative design elements to differentiate products from competitors.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={designImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/*kartu kiri*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'> Full Stack Developer</h3>
                                            <p className='text-[15px] text-smallTextColor text-justify group-hover:text-white group-hover:font-[500] leading-7'> Experienced in end-to-end development, from designing the backend architecture to implementing the front user interface. Proficient in various technologies, including server-side programming languages such as Node.js or Python and frontend frameworks such as React or Vue. Responsible for overall system maintenance and repair, ensuring high availability and reliability. Work closely with the development team, QA, and other stakeholders to ensure all aspects of the application are met. Align projects with the team to achieve goals effectively and efficiently. Focuses on achieving business objectives through appropriate and effective technology implementation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={appsImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* kartu kanan */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-duration='1500' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'> Data Science</h3>
                                            <p className='text-[15px] text-smallTextColor text-justify group-hover:text-white group-hover:font-[500] leading-7'> Analyze complex datasets to identify patterns, trends and relevant insights. Utilize statistical and machine learning techniques to formulate solutions to data analysis challenges. Optimize models to improve accuracy and usability in a business context. Identify opportunities to use data to improve operational efficiency and make better decisions. Focus on practical applications of data analysis results in a business context.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={dataScienceImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
