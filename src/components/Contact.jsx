import React, { useState } from "react";
import { Range } from "react-range";

function Contact() {
  const min = 500;
  const max = 50000;
  const [values, setValues] = useState([1000, 5000]);

  return (
    <div className="bg-[#191919]  flex justify-center">
      <div className=" flex h-[1300px] ">
        <form action="">
          <div className="flex flex-col justify-between align-middle mx-auto ">




            <div className="border-box flex flex-row gap-11 mt-30 justify-center">
              {/* Name */}
              <div className="bg-[#1E1E1E] border-[#242424] rounded-[10px] border-1 pb-10">
                <div>
                  <div className="flex h-[100px] w-[510px]">
                    <h1 className="text-[22px] pl-10 pt-10 text-white font-medium">
                      Full Name
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Type here"
                        className=" caret-[#5a5959]  w-109 border-b-2 border-[#333333] py-1 focus:border-[#5a5959] focus:outline-none placeholder:text-[#333333]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#1E1E1E] border-[#242424] rounded-[10px] border-1 pb-10">
                <div>
                  <div className="flex h-[100px] w-[510px]">
                    <h1 className="text-[22px] pl-10 pt-10 text-white font-medium">
                      Email
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Type here"
                        className=" caret-[#5a5959] w-109 border-b-2 border-[#333333] py-1 focus:border-[#5a5959] focus:outline-none placeholder:text-[#333333]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* checkboxes */}
            <div className="bg-[#1E1E1E] border-[#242424] rounded-[10px] border-1 w-[1070px] mx-auto pb-10 mt-8">
              <div>
                <div className=" h-[100px] w-[430px]">
                  <h1 className="text-[22px] pl-10 pt-10 text-white font-medium">
                    Why are you contacting us?
                  </h1>
                </div>
                <div className="">
                  <form>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 px-10 py-2 ">
                      {/* AI */}
                      <label className="flex items-center space-x-3 text-white text-[18px] font-medium cursor-pointer select-none">
                        <input
                          type="checkbox"
                          className=" w-5 h-5 rounded-full "
                          style={{
                            backgroundColor: "#262626",
                            border: "2px solid #333333",
                          }}
                        />
                        <span>AI</span>
                      </label>
                      {/* UI/UX */}
                      <label className="flex items-center space-x-3 text-white text-[18px] font-medium cursor-pointer select-none ">
                        <input
                          type="checkbox"
                          className=" w-5 h-5 rounded-full "
                          style={{
                            backgroundColor: "#262626",
                            border: "2px solid #333333",
                          }}
                        />
                        <span>UI/UX</span>
                      </label>
                      {/* Cloud */}
                      <label className="flex items-center space-x-3 text-white text-[18px] font-medium cursor-pointer select-none">
                        <input
                          type="checkbox"
                          className=" w-5 h-5 rounded-full "
                          style={{
                            backgroundColor: "#262626",
                            border: "2px solid #333333",
                          }}
                        />
                        <span>Cloud</span>
                      </label>
                      {/* Digital Exp */}
                      <label className="flex items-center space-x-3 text-white text-[18px] font-medium cursor-pointer select-none">
                        <input
                          type="checkbox"
                          className=" w-5 h-5 rounded-full "
                          style={{
                            backgroundColor: "#262626",
                            border: "2px solid #333333",
                          }}
                        />
                        <span>Digital Exp</span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* budget  */}
            <div className="bg-[#1E1E1E] border-[#242424] rounded-[10px] border-1 w-[1070px] mx-auto pb-10 mt-8">
              <div>
                <div className="h-[100px] w-[430px]">
                  <h1 className="text-[22px] pl-10 pt-10 text-white font-medium">
                    Your Budget
                  </h1>
                </div>
                <div className="px-10">
                  <p className="text-white text-[16px] mb-6">
                    Slide to indicate your budget range
                  </p>
                  <div
                    className="flex flex-col items-center w-full relative"
                    style={{ height: 90 }}
                  >
                    <Range
                      values={values}
                      step={100}
                      min={min}
                      max={max}
                      onChange={setValues}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "40px", // enough space for thumbs and labels
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              height: 6,
                              width: "100%",
                              borderRadius: 6,
                              background: "#333333",
                              position: "absolute",
                              top: "50%",
                              left: 0,
                              transform: "translateY(-50%)",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: `${((values[0] - min) / (max - min)) * 100}%`,
                              width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                              height: 6,
                              borderRadius: 6,
                              background: "#F20B0B",
                              transform: "translateY(-50%)",
                            }}
                          />
                          {children}
                        </div>
                      )}
                      renderThumb={({ props, index }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "32px",
                            width: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#333333",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: "calc(50% - 20px)", 
                            transform: "translate(-50%, -50%)",
                            boxShadow: "none",
                            border: "none",
                            zIndex: 2,
                          }}
                        >
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: "#F20B0B",
                            }}
                          />
                          <span
                            style={{
                              position: "absolute",
                              top: 38, // move price below the thumb
                              left: "50%",
                              transform: "translateX(-50%)",
                              color: "#fff",
                              fontSize: 16,
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            ${values[index].toLocaleString()}
                          </span>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <input type="hidden" name="budget_min" value={values[0]} />
            <input type="hidden" name="budget_max" value={values[1]} />

          {/*Message */}
          <div className="bg-[#1E1E1E] border-[#242424] rounded-[10px] border-1 w-[1070px] mx-auto pb-10 mt-8">
            <div>
              <div className="h-[100px] w-[430px]">
                <h1 className="text-[22px] pl-10 pt-10 text-white font-medium">
                  Your Message
                </h1>
              </div>
              <div className="px-10">
                <textarea
                  name="message"
                  placeholder="Type here"
                  className=" caret-[#5a5959] w-full bg-transparent border-b-2 border-[#333333] text-white text-[16px] py-2 mt-2 focus:outline-none focus:border-[#5a5959] placeholder:text-[#333333] resize-none"
                  rows={4}
                  />
              </div>
            </div>

          </div>
          <button className="flex mx-auto mt-10 px-8 py-4 gap-2 bg-[#F20B0B] rounded-[8px] text-white font-barlow font-medium text-[20px]  justify-center transition-all duration-300 hover:bg-[#b50909] hover:scale-105">Submit</button>
                  </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

<style>{`
                input[type="range"].range-thumb-min::-webkit-slider-thumb,
                input[type="range"].range-thumb-max::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #333333;
                    border: none;
                    box-shadow: none;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;
                }
                input[type="range"].range-thumb-min::-webkit-slider-thumb::after,
                input[type="range"].range-thumb-max::-webkit-slider-thumb::after {
                    content: '';
                    display: block;
                    margin: auto;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #F20B0B;
                    position: absolute;
                    top: 7px;
                    left: 7px;
                }
                input[type="range"].range-thumb-min::-moz-range-thumb,
                input[type="range"].range-thumb-max::-moz-range-thumb {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #333333;
                    border: none;
                    box-shadow: none;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;
                }
                input[type="range"].range-thumb-min::-ms-thumb,
                input[type="range"].range-thumb-max::-ms-thumb {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #333333;
                    border: none;
                    box-shadow: none;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;
                }
            `}</style>




