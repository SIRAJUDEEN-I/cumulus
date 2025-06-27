import FaqItem from './FaqItem'
import { useState } from 'react'

function FaqGroup() {

    const [openIndex,setOpenIndex] = useState(null)

    function handleToggle(id){
        setOpenIndex(openIndex===id ? null : id)
    }
  return (
     <div>

    
            <div className="flex flex-col items-center p-[120px_300px] gap-[14px] w-contain h-[335px] mx-auto relative overflow-hidden"
                style={{
                    background: `linear-gradient(0deg, rgba(255, 142, 36, 0.92), rgba(255, 142, 36, 0.92)), url('/soop.jpg')`,
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover, cover',
                    backgroundPosition: 'center, center',
                    opacity: '30',
                    
                    
                }}
                >



                <div
                    className="absolute inset-0 w-fit h-full z-0 pointer-events-none select-none"
                    style={{
                        backgroundImage: "url('/squares.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover",
                        opacity: 0.6,
                        
                    }}
                    
                    />



                <h1 id="Process" className="text-[48px] font-bold font-barlow text-white py-3 text-center z-10 relative">
                    Frequently Asked Questions
                </h1>
                <p className="py-3 font-barlow text-[18px]  text-white text-center z-10 relative">
                    Still you have any questions? Contact our Team via info@CumuluClad.com
                </p>
            </div>
 
 {/* grid */}

                    <div className="grid grid-cols-2  bg-[#191919]  grid-row-8   p-0  h-[770px]  ">

                        
{/* gris1 */}

                    <div className="border  border-[#262626] flex flex-col   border-t ">

                        <div className='mt-20 border-t border-1 border-[#262626]'>
                            {/* q1 */}
                     <FaqItem  id={0} openIndex={0===openIndex} onToggle={()=> handleToggle(0)} question="What services does CumulusClad provide?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>

                        {/* q2 */}
                        <FaqItem  id={1} openIndex={1===openIndex} onToggle={()=> handleToggle(1)} question="How can CumuluClad help my business?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>

                        {/* q3 */}

                        <FaqItem  id={2} openIndex={2===openIndex} onToggle={()=> handleToggle(2)} question="What industries does CumuluClad work with?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>

                        {/* q4 */}
                        <FaqItem  id={3} openIndex={3===openIndex} onToggle={()=> handleToggle(3)} question="How long does it take to complete a project with CumuluClad?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>
                    
                        </div>

                       



                    </div>


                    <div className="mt-20 border-t border-1 border-[#262626]">

                        {/* q 5 */}

                         <FaqItem  id={4} openIndex={4===openIndex} onToggle={()=> handleToggle(4)} question="How long does it take to complete a project with CumuluClad?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>
                    {/* q6 */}
                          <FaqItem  id={5} openIndex={5===openIndex} onToggle={()=> handleToggle(5)} question="How long does it take to complete a project with CumuluClad?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>
{/* q7 */}
                           <FaqItem  id={6} openIndex={6===openIndex} onToggle={()=> handleToggle(6)} question="How long does it take to complete a project with CumuluClad?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>
{/* q8 */}
                            <FaqItem  id={7} openIndex={7===openIndex} onToggle={()=> handleToggle(7)} question="How long does it take to complete a project with CumuluClad?" answer="CumuluClad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."/>



                    </div>

                    </div>


    </div>


    
  )
}
export default FaqGroup

