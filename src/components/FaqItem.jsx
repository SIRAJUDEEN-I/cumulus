import React, { useState } from 'react';
// install lucide-react or use any other icon
import { HiPlus } from "react-icons/hi";
import Number from './numbers/Number.jsx'





const FaqItem = ({ question, answer , id ,openIndex , onToggle }) => {
 

  

  return (
    <div className={`border-b border-[#262626] h-[140px] pl-4 mr-10 transition-all duration-300 ease-in-out  flex justify-center align-middle flex-col  py-4 
      ${
      openIndex ? 'h-[254px]':''
    
    }`}>



      <div
        className="flex flex-row  items-center cursor-pointer"
        onClick={onToggle}
      >
        <span className='flex flex-row  justify-center align-middle items-center '>
          
          <Number id={id} openIndex={openIndex} className={`w-15 h-15 `}  />
          
          </span>



        <div className={`flex flex-row border-box  ml-5 py-1 ${openIndex ? 'border-red-500 border-1':''}` }>

           <h3 className={`text-lg font-medium  w-140 pl-1 pr-50 ${openIndex ? 'text-red-600':'text-white'}`}>{question}</h3>
        
        <HiPlus
          className={`text-[25px]  transform transition-transform duration-300 ${
            openIndex ? 'rotate-45 text-red-600' : 'text-white '
          }`}
        />
        </div>

         
      </div>

      <div
        className={`text-white  mt-2 pl-25 w-150 transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex ? 'max-h-[254px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;


/* Container */




// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 20px;
// gap: 10px;

// width: 80px;
// height: 80px;

// background: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%);
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
