function Reviews() {
    return (
        <div>



            <div className="flex flex-col items-center p-[120px_300px] gap-[14px] w-fit h-[366px] mx-auto relative overflow-hidden"
                style={{
                    background: `linear-gradient(0deg, rgba(255, 142, 36, 0.92), rgba(255, 142, 36, 0.92)), url('/soop.jpg')`,
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover, cover',
                    backgroundPosition: 'center, center',
                    opacity: '30'

                }}
            >



                <div
                    className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
                    style={{
                        backgroundImage: "url('/squares.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover",
                        opacity: 0.6,

                    }}

                />



                <h1 className="text-4xl font-bold font-barlow text-white py-3 text-center z-10 relative">
                    What Our Clients say About us
                </h1>
                <p className="py-3 font-barlow text-white text-center z-10 relative">
                    At CumulusClad, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us
                </p>
            </div>




            <div className="grid grid-cols-2 grid-rows-2 gap-0 justify-between">

{/* 1 st card  */}


                <div className='h-[500px] flex flex-col   justify-between  bg-[#191919] border-box border-r border-b border-[#232323] '>

                    <div className=' text-[#f33535] font-[500]  mt-15 ml-10 flex flex-row gap-5'>

                        <h1 className='text-[28px]'>CumuluClad has been Instrumental in Transforming our Online Presence</h1>
                    </div>
                    <div className='pt-10 ml-10 text-white text-[20px] w-140'>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</div>

                    <div className=" mb-5 flex flex-row align-middle ml-9 mt-10 p-[20px] g-[10px] w-[638px] h-[103px] bg-[rgba(36, 36, 36, 0.2)] border-solid border-[1px] border-[#262626] rounded-[8px] ">



                        <div className="flex text-white flex-row align-middle p-0 gap-[18px] w-[439px] h-[60px]">
                            <img src="/JohnSmith.png" alt="" />



                            <div className="flex-none">

                                <div className="flex flex-col">

                                    <h1>John Smith</h1>
                                    <p>CEO of Chic Boutique</p>

                                </div>



                            </div>

                            <div className="">
                                <button className="flex-none ml-50 w-[149px] h-[63px] gap-[10px] bg-[#262626] rounded-[8px]">Open Website</button>

                            </div>




                        </div>



                    </div>






                </div> 

                {/* 2 nd card */}

                   <div className='h-[500px] flex flex-col justify-between  bg-[#191919] border-box border-r border-b border-[#232323] '>

                    <div className=' text-[#f33535] font-[500]  mt-15 ml-10 flex flex-row gap-5'>

                        <h1 className='text-[28px]'>Working with CumulusClad was a breeze.</h1>
                    </div>
                    <div className='pt-10 ml-10 text-white text-[20px] w-140'>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. CumulusClad is a trusted partner we hig   hly recommend.</div>

                    <div className=" mb-5 flex flex-row align-middle ml-9 mt-10 p-[20px] g-[10px] w-[638px] h-[103px] bg-[rgba(36, 36, 36, 0.2)] border-solid border-[1px] border-[#262626] rounded-[8px] ">



                        <div className="flex text-white flex-row align-middle p-0 gap-[18px] w-[439px] h-[60px]">
                            <img src="/Sarah.png" alt="" />



                            <div className="flex-none">

                                <div className="flex flex-col">

                                    <h1>Sarah Johnson</h1>
                                    <p>Founder of HungryBites</p>

                                </div>



                            </div>

                            <div className="">
                                <button className="flex-none ml-45 w-[149px] h-[63px] gap-[10px] bg-[#262626] rounded-[8px]">Open Website</button>

                            </div>




                        </div>



                    </div>





                </div>

                {/* 3rd card */}


                <div className='h-[500px] flex flex-col justify-between bg-[#191919] border-box border-r border-b border-[#232323] '>

                    <div className=' text-[#f33535] font-[500]  mt-15 ml-10 flex flex-row gap-5'>

                        <h1 className='text-[28px] mr-5'>CumuluClad developed a comprehensive booking and reservation system for our event management company</h1>
                    </div>
                    <div className='pt-10 ml-10 text-white text-[20px] w-140'>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</div>

                    <div className=" mb-5 flex flex-row align-middle ml-9 mt-10 p-[20px] g-[10px] w-[638px] h-[103px] bg-[rgba(36, 36, 36, 0.2)] border-solid border-[1px] border-[#262626] rounded-[8px] ">



                        <div className="flex text-white flex-row align-middle p-0 gap-[18px] w-[439px] h-[60px]">
                            <img src="/Mark.png" alt="" />



                            <div className="flex-none">

                                <div className="flex flex-col">

                                    <h1>Mark Thompson</h1>
                                    <p>CEO of EventMasters</p>

                                </div>



                            </div>

                            <div className="">
                                <button className="flex-none ml-50 w-[149px] h-[63px] gap-[10px] bg-[#262626] rounded-[8px]">Open Website</button>

                            </div>




                        </div>



                    </div>





                </div>

                {/* 4th reviw card */}

                
                <div className='h-[500px] flex flex-col justify-between bg-[#191919] border-box border-r border-b border-[#232323] '>

                    <div className=' text-[#f33535] font-[500]  mt-15 ml-10 flex flex-row gap-5'>

                        <h1 className='text-[28px] mr-5'>CumuluClad designed and developed a captivating web portal for showcasing our real estate listings.</h1>
                    </div>
                    <div className='pt-10 ml-10 text-white text-[20px] w-140'>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. CumuluClad's expertise in the real estate industry is unmatched.</div>

                    <div className="flex mb-5 flex-row align-middle ml-9 mt-10 p-[20px] g-[10px] w-[638px] h-[103px] bg-[rgba(36, 36, 36, 0.2)] border-solid border-[1px] border-[#262626] rounded-[8px] ">



                        <div className="flex text-white flex-row align-middle p-0 gap-[18px] w-[439px] h-[60px]">
                            <img src="/michael.png" alt="" />



                            <div className="flex-none">

                                <div className="flex flex-col">

                                    <h1>Michael Anderson</h1>
                                    <p>Founder of Dream Homes Realty.</p>

                                </div>



                            </div>

                            <div className="">
                                <button className="flex-none ml-30 w-[149px] h-[63px] gap-[10px] bg-[#262626] rounded-[8px]">Open Website</button>

                            </div>




                        </div>



                    </div>





                </div>



                




            </div>



        </div>
    )
}
export default Reviews

// /* Sub Container */

/* Button */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 18px 20px;
// gap: 10px;

// width: 149px;
// height: 63px;

// /* Grey/15 */
// background: #262626;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
