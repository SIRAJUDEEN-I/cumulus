import logo from '/logo.png'

function Navbar() {
  return (
    <nav
      className="box-border absolute flex flex-row items-center justify-between px-[162px] py-5 w-[1920px] h-[100px] top-0 right-0 border-b border-[#262626] bg-black isolate "
      style={{ gap: '711px', zIndex: 10 }}
    >
      {/* Logo */}
      <div
        className="flex-none order-0 flex-grow-0 z-20"
        style={{
          margin: '0 auto',
          width: '177.72px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '177.72px',
            height: '60px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

     
      <ul className="absolute left-1/2 top-[21px] -translate-x-1/2 flex flex-row items-center gap-[30px] w-[537px] h-[55px] z-10">
        <li>
          <a
            href="#Home"
            className=" transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#Services"
            className="transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#Work"
            className="transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#Process"
            className="transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            Process
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Careers"
            className="transition-all duration-300 hover:bg-[#262626] hover:scale-105 flex items-center px-4 py-[14px]  rounded-[8px] text-white font-barlow font-semibold text-[18px] leading-[27px] h-[55px]"
          >
            Careers
          </a>
        </li>
      </ul>

      {/* Contact Us button */}
      <div className="flex order-1 flex-grow-0 z-20">
        <a
          href="#"
          className="flex items-center justify-center px-6 py-4 gap-2 w-[135px] h-[59px] bg-[#F20B0B] rounded-[8px] text-white font-medium text-[18px] transition-all duration-300 hover:bg-[#b50909] hover:scale-105"
          style={{ whiteSpace: 'nowrap' }}
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar