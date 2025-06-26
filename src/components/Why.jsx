import soop from '/soop.jpg'
import squares from '/squares.png'

function Why() {
  return (

    <div>



      <div className="flex flex-col items-center p-[120px_300px] gap-[14px] w-[1596px] h-[366px] mx-auto relative overflow-hidden"
        style={{
          background: `linear-gradient(0deg, rgba(255, 142, 36, 0.92), rgba(255, 142, 36, 0.92)), url('/soop.jpg')`,
          backgroundBlendMode: 'color, overlay',
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
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
        <h1 className="text-4xl font-bold font-barlow text-white py-3 text-center z-10 relative">
          Why Choose CumulusClad?
        </h1>
        <p className="py-3 font-barlow text-white text-center z-10 relative">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      four box grid

      <div></div>
    </div>
  )
}
export default Why


/* Container */





