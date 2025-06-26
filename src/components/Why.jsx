import soop from '../../public/soop.jpg'
import squares from '../../public/squares.png'

function Why() {
  return (

    <div className='bg-black'>

     <div  className="w-full  bg-black flex flex-col items-center bg-repeat-y pt-[112px] isolate   h-[2000px] left-[163px] top-[100px]  bg-[url('/squares.png')] text-white "
      style={{
        backgroundImage: "url('/squares.png')",
        backgroundRepeat: "repeat",
        
        
      }}
         
   > 
        
        <h1 className="text-4xl py-3 font-bold ">Why Choose CumulusClad?</h1>
        <p className='py-3'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
    </div>
    
    </div>
   

  )
}
export default Why