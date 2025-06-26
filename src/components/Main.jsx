import vector from '../../public/vector.png' 
import stripes from '../../public/stripes.png'


function Main() {
  return (
    <section
      className="w-full  bg-black flex flex-col items-center bg-repeat-y pt-[112px] isolate   h-[2000px] left-[163px] top-[100px] border-x border-b border-[#262626] bg-[url('/squares.png')]"
      style={{
        backgroundImage: "url('/squares.png')",
        backgroundRepeat: "repeat",
        
        
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-6 mt-40">THINK DEEP I MAKE IMPACT</h1>

      <div className="  flex flex-row py-6 px-50 rounded bg-[#191818]  text-white">
        
        <span className="px-2 py-2">For</span>
        <span className="bg-[#262626] rounded p-2">Ai Solutions</span>
        <span className="p-2">,</span>
        <span className="bg-[#262626] rounded p-2">Digital experience</span>
        <span className="p-2">,</span>
        <span className="bg-[#262626] rounded p-2">UI/UX</span>
        <span className="p-2">and</span>
        <span className="bg-[#262626] rounded p-2">Cloud</span>
        
      </div>

      <div className="flex flex-row justify-center align-middle mt-6">
        <button className="bg-[#262626] rounded p-2 text-white font-barlow font-medium px-6 py-4 mx-5 transition-all duration-300 hover:bg-[#262626] hover:scale-105">Our Works</button>
        <button className="flex  items-center px-6 py-4 gap-2  bg-[#F20B0B] rounded-[8px] text-white font-barlow font-medium text-[18px] leading-[27px] justify-center transition-all duration-300 hover:bg-[#b50909] hover:scale-105">Contact Us</button>
      </div>

       <img
        src={vector}
        alt=""
        className="pointer-events-none select-none absolute"
        style={{
          width: '1096.92px',
          height: '1202.98px',
          top: '450.48px',
          left: '-219px',
          opacity: 0.47,
          transform: 'rotate(310.81deg)',
          zIndex: -1,
        }}
        aria-hidden="true"
      />
       <button className=' bg-[#1A1A1A] mt-60 z-0 rounded-4xl p-3 border-1 border-white/10 text-white hover:scale-105'>Trusted by 250+ Companies</button>
    
   <div className="flex flex-row justify-between items-center px-12 rounded bg-[#111] text-white shadow-2xl border z-0  border-0 w-full max-w-[1920px] h-[100px] ">
  <p>zapier</p>
  <p>spotify</p>
  <p>zoom</p>
  <p>slack</p>
</div>
<div className='bg-transparent z-0'>
    <img
        src={stripes}
        alt=""
        className="pointer-events-none select-none absolute"
        style={{
          width: '1096.92px',
          height: '1202.98px',
          top: '450.48px',
          left: '-219px',
          opacity: 0.47,
          transform: 'rotate(310.81deg)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div className='flex flex-col justify-center align-middle'>

         <h1 className=" z-0 flex text-4xl  justify-center font-bold text-white mb-6 m-40 ">Our Services</h1>
    <p className='text-white z-0 flex justify-center mb-20 '>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>

     <div
  className="box-border flex flex-row items-start p-0 w-[1596px] h-[577px] border-t border-[#262626] mt-12"
>
  {/* Example content, replace with your actual items */}
  <div className="flex-1 flex items-center justify-center text-white text-2xl">
    <div className='ml-20 flex flex-col justify-center align-middle'>
         <p className='font-bold mb-8'>Ai solutions</p>

    <p>At Squareup, our design team is passionate about
creating stunning, user-centric designs that captivate
your audience and elevate your brand. We believe that
great design is not just about aesthetics; it's about
creating seamless and intuitive user experiences.</p>

<button className=" mt-18 bg-gray/15 fill-black z-0 border w-100 py-1 rounded-3xl  hover:scale-105">Learn More</button>

    </div>
      <div className='ml-20 flex flex-col justify-center align-middle'>
         <p className='font-bold mb-8'>Cloud</p>

    <p>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs. </p>
    <button className=" mt-18 bg-gray/15 fill-black z-0 border w-100 py-1 rounded-3xl  hover:scale-105">Learn More</button>

    </div>
      <div className='ml-20 flex flex-col justify-center align-middle'>
         <p className='font-bold mb-8'>Digital experience</p>

    <p>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
    <button className=" mt-10 bg-gray/15 fill-black z-0 border w-100 py-1 rounded-3xl  hover:scale-105">Learn More</button>

    </div>
   

  </div>
 
 
</div>
   
</div>

    
      
      
    </section>
  )
}
export default Main




// /* Text Container */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 14px;
// gap: 10px;

// width: 142px;
// height: 50px;

// /* Grey/15 */
// background: #262626;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
