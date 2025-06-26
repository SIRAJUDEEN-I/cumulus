import vector from '/vector.png' 
import stripes from '/stripes.png'



function Main() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0a] flex flex-col items-center pt-[112px] border-x border-b border-[#262626] min-h-[800px]"
      style={{
        backgroundImage: "url('/squares.png')",
        backgroundRepeat: "repeat",
        
      }}
    >
      {/* Vector background image, cropped by overflow-hidden */}
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
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <h1 className="text-[68px] font-semibold font-barlow text-white mb-6 mt-40 z-10 relative">THINK DEEP I MAKE IMPACT</h1>

      <div className="flex flex-row py-6 px-12 rounded-[8px] bg-[#191818] text-white z-10 relative">
        <span className="px-2 py-2">For</span>
        <span className="bg-[#262626] rounded p-2">Ai Solutions</span>
        <span className="p-2">,</span>
        <span className="bg-[#262626] rounded p-2">Digital experience</span>
        <span className="p-2">,</span>
        <span className="bg-[#262626] rounded p-2">UI/UX</span>
        <span className="p-2">and</span>
        <span className="bg-[#262626] rounded p-2">Cloud</span>
      </div>

      <div className="flex flex-row justify-center align-middle mt-6 z-10 relative">
        <button className="bg-[#262626] rounded p-2 text-white font-barlow font-medium px-6 py-4 mx-5 transition-all duration-300 hover:bg-[#262626] hover:scale-105 border-[1px] border-solid border-[#3f3f3f]">Our Works</button>
        <button className="flex items-center px-6 py-4 gap-2 bg-[#F20B0B] rounded-[8px] text-white font-barlow font-medium text-[18px] leading-[27px] justify-center transition-all duration-300 hover:bg-[#b50909] hover:scale-105">Contact Us</button>
      </div>
       <button className=' bg-[#161616] w-70 mt-80 z-10 border-box  rounded-4xl p-3 border-1 border-white/10 text-white hover:scale-105 relative'>Trusted by 250+ Companies</button>
         <div className=" z-20  flex flex-row justify-between items-center px-12  rounded bg-[#111] text-white shadow-2xl  z-0   w-full max-w-[1920px] h-[100px] ">
      <p>zapier</p>
      <p>spotify</p>
      <p>zoom</p>
      <p>slack</p>
    
    </div>
       

      
    </section>
  )
}
export default Main



/* Button */



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

/* Sub Container */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 20px 34px;
// gap: 10px;

// position: absolute;
// width: 286px;
// height: 62px;
// left: calc(50% - 286px/2);
// top: -31px;

// /* Grey/10 */
// background: #1A1A1A;
// /* Grey/15 */
// border: 1px solid #262626;
// border-radius: 100px;

// /* Inside auto layout */
// flex: none;
// order: 6;
// // flex-grow: 0;
// z-index: 6;
