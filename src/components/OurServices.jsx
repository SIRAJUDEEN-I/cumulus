import stripes from '/stripes.png'

function OurServices() {
  return (
    <div className="flex flex-col items-center justify-center  h-[336px] mx-auto relative p-[120px_300px] gap-[14px]  overflow-hidden"
      style={{
        background: `#1B1915`,
        backgroundBlendMode: '#FF9524, overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Stripes overlay */}
      <img
        src={stripes}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        style={{ mixBlendMode: 'multiply',  }}
        
      />

      <h1 id="Services"
        className="z-10 font-barlow font-semibold text-[48px] leading-[58px] text-center text-white  mx-auto"
      >
        Our Services
      </h1>
      <p
        className="z-10 font-barlow font-normal text-[18px] leading-[24px] text-center text-[#E6E6E6]  mx-auto tracking-[-0.006em]"
      >
        Transform your brand with our innovative digital solutions that captivate and engage your audience.
      </p>
    </div>
  )
}
export default OurServices
