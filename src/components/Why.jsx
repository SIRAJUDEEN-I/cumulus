import soop from '/soop.jpg'
import squares from '/squares.png'
import { FaMedal } from "react-icons/fa";


function Why() {
  return (

    <div>



      <div className="flex flex-col items-center p-[120px_300px] gap-[14px] w-fit h-[366px] mx-auto relative overflow-hidden"
        style={{
          background: `linear-gradient(0deg, rgba(255, 142, 36, 0.92), rgba(255, 142, 36, 0.92)), url('/soop.jpg')`,
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          opacity:'30'
        }}
      >
        {/* Squares overlay with 60% opacity */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url('/squares.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            opacity: 0.6,
          }}
          aria-hidden="true"
        />
        <h1 id="Work" className="text-4xl font-bold font-barlow text-white py-3 text-center z-10 relative">
          Why Choose CumulusClad?
        </h1>
        <p className="py-3 font-barlow text-white text-center z-10 relative">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      
<div className="grid grid-cols-2 grid-rows-2 gap-0 justify-between">

    <div className='h-[378px]  bg-[#191919] border-box border-r border-b border-[#232323] '>

          <div className=' text-red-700 font-bold mt-15 ml-10 flex flex-row gap-5'>
           <img src="/medal.png" className='h-[30px]' alt="" />
            <h1 className='text-[26px]'>Expertise</h1>
            </div>
            <div className='pt-10 ml-10 text-white text-[20px] w-140'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</div>

            

    </div>
    <div className='h-[378px]  bg-[#191919] border-box border-r border-b border-[#232323] '>

          <div className='text-red-700 font-bold  mt-15 ml-10 flex flex-row gap-5 align-middle'>
            <img src="/client.png" className='h-[30px]' alt="" />
            <h1 className='text-[26px] '>Client centeric Apporoach</h1>
            </div>
            <div className='pt-10 ml-10 text-white text-[20px] w-140'>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</div>

            

    </div>
    <div className='h-[378px]  bg-[#191919] border-box border-r border-b border-[#232323] '>

          <div className='text-red-700 font-bold  mt-10 ml-10 flex flex-row gap-5'>
          <img src="/resultdriven.png" className="h-[30px]" alt="" />
            <h1 className='text-[26px]'>Result Driven Solutions</h1>
            </div>
            <div className='pt-10 ml-10 text-white text-[20px] w-140'>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</div>

            

    </div>
    <div className='h-[378px]  bg-[#191919] border-box border-r border-b border-[#232323] '>

          <div className='text-red-700 font-bold  mt-10 ml-10 flex flex-row gap-5'>
            <img src="/collab.png" className="h-[30px]" alt="" />
            <h1 className='text-[26px]'>Collaborative Patnership</h1>
            </div>
            <div className='pt-10 ml-10 text-white text-[20px] w-140'>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</div>

            

    </div>
    
</div>
    

    
    </div>
  )
}
export default Why


/* Container */




/* Container */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 20px;

// width: 638.5px;
// height: 88px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;

