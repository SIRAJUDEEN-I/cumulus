import { LuBrainCircuit } from "react-icons/lu";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

function Services() {
    return (
        <div
            id="container"
            className="box-border flex flex-row items-start justify-between p-0  h-[577px] border-t border-[#262626] bg-[#191919]  w-auto"
        >
            {/* card1 */}
            <div className="flex flex-col border-box border-r border-[#232323] justify-between items-start p-[50px]  h-[577px] ">

                <div>
                    <LuBrainCircuit className="text-white text-6xl" />
                </div>

                <div>

                    <h1 className="text-[30px] pb-5 text-white">
                        AI Solutions
                    </h1>
                    <p className="text-white ">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>


                </div>

                <div
                    className="flex flex-row justify-center items-center px-4 py-[18px] gap-[10px] mx-auto w-80 h-[60px] bg-[#262626] rounded-[8px] font-barlow text-white text-lg mt-8 hover:scale-105"
                >
                    Learn More
                </div>


            </div>




            <div className="flex flex-col border-box border-r border-[#232323] justify-between items-start p-[50px]  h-[577px] ">

                <div>
                    <FaCloudArrowUp className="text-white text-6xl" />
                </div>

                <div>

                    <h1 className="text-[30px] pb-5 text-white">
                        Cloud
                    </h1>
                    <p className="text-white ">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>


                </div>

                <div
                    className="flex flex-row justify-center items-center px-4 py-[18px] gap-[10px] mx-auto w-80 h-[60px] bg-[#262626] rounded-[8px] font-barlow text-white text-lg mt-8 hover:scale-105"
                >
                    Learn More
                </div>


            </div>


            <div className="flex flex-col border-box border-r border-[#232323] justify-between items-start p-[50px]  h-[577px] ">

                <div>
                    <FaLaptopCode className="text-white text-6xl" />
                </div>

                <div>

                    <h1 className="text-[30px] pb-5 text-white">
                        Digital Experience
                    </h1>
                    <p className="text-white ">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>


                </div>

                <div
                    className="flex flex-row justify-center items-center px-4 py-[18px] gap-[10px] mx-auto w-80 h-[60px] bg-[#262626] rounded-[8px] font-barlow text-white text-lg mt-8 hover:scale-105"
                >
                    Learn More
                </div>


            </div>





        </div>
    )
}
export default Services


/* Button */
