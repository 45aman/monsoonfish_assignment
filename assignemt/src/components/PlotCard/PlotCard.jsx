/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const PlotCard = ({
  property1,
  className,
  image = "https://c.animaapp.com/LEqQ2zNo/img/image-1@2x.png",
  straighten = "https://c.animaapp.com/LEqQ2zNo/img/straighten-1.svg",
  text = "Achali",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`border border-solid w-[151px] flex flex-col items-start overflow-hidden rounded-[6px] relative ${
        state.property1 === "variant-2" ? "border-[#00000014]" : "border-[#00000008]"
      } ${state.property1 === "variant-2" ? "shadow-[0px_7px_29px_#00000033]" : ""} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="w-full flex self-stretch items-start gap-[16px] flex-[0_0_auto] pt-[6px] pb-0 px-[6px] bg-white relative">
        <img className="grow flex-1 object-cover h-[72px] relative" alt="Image" src={image} />
      </div>
      <div className="w-full flex self-stretch items-start gap-[16px] flex-[0_0_auto] p-[6px] bg-white relative">
        <div className="flex items-start grow gap-[10px] flex-1 relative">
          <div className="flex flex-col items-start grow gap-[8px] flex-1 relative">
            <div className="w-full flex self-stretch items-start gap-[4px] flex-[0_0_auto] relative">
              <div className="[font-family:'Roboto',Helvetica] w-fit [display:-webkit-box] mt-[-1.00px] tracking-[0.24px] text-[12px] [-webkit-line-clamp:1] text-[#51605f] font-bold overflow-hidden leading-[14.4px] whitespace-nowrap [-webkit-box-orient:vertical] text-ellipsis relative">
                UID:
              </div>
              <div className="[font-family:'Roboto',Helvetica] [display:-webkit-box] mt-[-1.00px] tracking-[0.24px] text-[12px] [-webkit-line-clamp:1] flex-1 text-blacktext-1 font-bold overflow-hidden leading-[14.4px] [-webkit-box-orient:vertical] text-ellipsis relative">
                20240419082537
              </div>
            </div>
            <div className="w-full flex self-stretch flex-col items-start gap-[4px] flex-[0_0_auto] relative">
              <div className="w-full flex self-stretch items-start gap-[4px] flex-[0_0_auto] relative">
                <div className="[font-family:'Roboto',Helvetica] w-fit [display:-webkit-box] mt-[-1.00px] tracking-[0.20px] text-[10px] [-webkit-line-clamp:1] text-blacktext-1 font-medium overflow-hidden leading-[12.0px] whitespace-nowrap [-webkit-box-orient:vertical] text-ellipsis relative">
                  Village
                </div>
                <div className="[font-family:'Roboto',Helvetica] [display:-webkit-box] mt-[-1.00px] tracking-[0.20px] text-[10px] opacity-70 [-webkit-line-clamp:1] flex-1 text-blacktext-1 font-normal overflow-hidden leading-[12.0px] [-webkit-box-orient:vertical] text-ellipsis relative">
                  {text}
                </div>
              </div>
              <div className="w-full flex self-stretch items-start gap-[4px] flex-[0_0_auto] relative">
                <div className="[font-family:'Roboto',Helvetica] w-fit [display:-webkit-box] mt-[-1.00px] tracking-[0.20px] text-[10px] [-webkit-line-clamp:1] text-blacktext-1 font-medium overflow-hidden leading-[12.0px] whitespace-nowrap [-webkit-box-orient:vertical] text-ellipsis relative">
                  Block
                </div>
                <div className="[font-family:'Roboto',Helvetica] [display:-webkit-box] mt-[-1.00px] tracking-[0.20px] text-[10px] opacity-70 [-webkit-line-clamp:1] flex-1 text-blacktext-1 font-normal overflow-hidden leading-[12.0px] [-webkit-box-orient:vertical] text-ellipsis relative">
                  {text}
                </div>
              </div>
              <div className="w-full flex self-stretch items-center gap-[6px] flex-[0_0_auto] relative">
                <img className="w-[12.09px] h-[7px] relative" alt="Straighten" src={straighten} />
                <div className="[font-family:'Roboto',Helvetica] mt-[-1.00px] tracking-[0.20px] text-[10px] flex-1 text-blacktext-1 font-medium leading-[12.0px] relative">
                  3.2 (ha)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
