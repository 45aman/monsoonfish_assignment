import React from "react";
import { PlotCard } from "../components/PlotCard/PlotCard";
import { ToggleBase } from "../components/ToggleBase/ToggleBase";

export const Plot = () => {
  return (
    <div className="flex flex-col  items-start gap-[54px] px-[32px] py-[24px] relative bg-white rounded-[12px] border border-solid border-[#e4e6eb] mx-20  mt-[1.25rem]">
      <div className="items-start justify-between flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-blacktext-1 text-[20px] tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
            Plot performance
          </div>
          <p className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
            <span className="text-[#051b1a]">All Information provided here is verified and authentic* </span>
            <span className="text-[#2d9cdb] underline">Check Sources</span>
            <span className="text-[#051b1a]"> for more information.</span>
          </p>
        </div>
        <img
          className="relative w-[24px] h-[24px]"
          alt="Arrow drop up"
          src="https://c.animaapp.com/LEqQ2zNo/img/arrow-drop-up@2x.png"
        />
      </div>
      <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[6px] overflow-hidden">
        <div className="inline-flex flex-col h-[550px] items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[8px] p-[10px] bg-[#f3f6fa] rounded-[6px] border border-solid border-[#0000000a] relative flex-[0_0_auto]">
            <img
              className="relative w-[16px] h-[16px]"
              alt="Search"
              src="https://c.animaapp.com/LEqQ2zNo/img/search@2x.png"
            />
            <div className="relative w-[352px] opacity-50 [font-family:'Roboto',Helvetica] font-normal text-blacktext-1 text-[12px] tracking-[0] leading-[14.4px]">
              Search plots here
            </div>
            <img
              className="relative w-[16px] h-[16px]"
              alt="Instant mix"
              src="https://c.animaapp.com/LEqQ2zNo/img/instant-mix@2x.png"
            />
          </div>
          <div className="flex w-[420px] items-start gap-[4px] relative flex-1 grow overflow-y-scroll">
            <div className="flex flex-col items-start gap-[8px] relative flex-1 self-stretch grow overflow-y-scroll">
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-2@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-8.svg"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-3@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-9.svg"
                  text=" Khingar"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-4@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-10.svg"
                  text="Chikhali"
                />
              </div>
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-14@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-8.svg"
                  text="Achali"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-6@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-9.svg"
                  text="Achali"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-7@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-10.svg"
                  text="Shirvali"
                />
              </div>
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-8@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-8.svg"
                  text="Pali T Ategaon"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-9@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-9.svg"
                  text="Rameghar"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-10@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-10.svg"
                  text="N/A"
                />
              </div>
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-13@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-17@2x.png"
                  text="N/A"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-13@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-18@2x.png"
                  text="Dabhe Dabhekar"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-13@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-19@2x.png"
                  text="N/A"
                />
              </div>
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-14@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-17@2x.png"
                  text=" Kumbhroshi"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-15@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-18@2x.png"
                  text="Kumathe"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-16@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-19@2x.png"
                  text="Jawali"
                />
              </div>
              <div className="flex items-start gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-17@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-17@2x.png"
                  text="Jawali"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-18@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-18@2x.png"
                  text="Moleshwar"
                />
                <PlotCard
                  className="!flex-1 !grow !w-[unset]"
                  image="https://c.animaapp.com/LEqQ2zNo/img/image-19@2x.png"
                  property1="default"
                  straighten="https://c.animaapp.com/LEqQ2zNo/img/straighten-19@2x.png"
                  text="Bhose"
                />
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[4px] px-0 py-[6px] relative self-stretch flex-[0_0_auto] bg-[#ffffff99] rounded-[2px] overflow-hidden">
              <div className="inline-flex items-start gap-[8px] relative flex-1 grow">
                <div className="relative w-[5px] h-[96px] bg-[#ced2db] rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col h-[550px] items-start gap-[8px] pl-[16px] pr-0 py-0 relative flex-[0_0_auto]">
          <div className="relative flex-1 w-[748px] grow rounded-[8px] overflow-scroll">
            <div className="relative w-[1128px] h-[678px] top-[-72px] left-[-198px]">
              <div className="absolute w-[1128px] h-[678px] top-0 left-0 rotate-180 bg-[url(https://c.animaapp.com/LEqQ2zNo/img/map.svg)] bg-cover bg-[50%_50%]" />
              <div className="flex flex-col w-[748px] items-start gap-[12px] pl-[20px] pr-[68px] pt-[64px] pb-[20px] absolute top-[490px] left-[198px] rounded-[4px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]">
                <div className="items-center gap-[6px] flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-whitetext-3 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                    Map Style
                  </div>
                  <img
                    className="relative w-[12px] h-[12px]"
                    alt="Close fullscreen"
                    src="https://c.animaapp.com/LEqQ2zNo/img/close-fullscreen@2x.png"
                  />
                </div>
                <div className="items-center inline-flex gap-[4px] relative flex-[0_0_auto]">
                  <div className="items-start inline-flex gap-[4px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-primarygambogeprimary-f4910f rounded-[999px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-whitetext-3 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                        RGB
                      </div>
                      <img
                        className="relative w-[12px] h-[12px]"
                        alt="Info"
                        src="https://c.animaapp.com/LEqQ2zNo/img/info@2x.png"
                      />
                    </div>
                    <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-white rounded-[999px] border border-solid border-[#0000001a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-blacktext-1 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                        Annotated
                      </div>
                      <img
                        className="relative w-[12px] h-[12px]"
                        alt="Info"
                        src="https://c.animaapp.com/LEqQ2zNo/img/info-2@2x.png"
                      />
                    </div>
                    <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-white rounded-[999px] border border-solid border-[#0000001a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-blacktext-1 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                        False colour composite
                      </div>
                      <img
                        className="relative w-[12px] h-[12px]"
                        alt="Info"
                        src="https://c.animaapp.com/LEqQ2zNo/img/info-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="items-start inline-flex gap-[4px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[12px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-white rounded-[999px] border border-solid border-[#0000001a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-blacktext-1 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                        Show boundaries
                      </div>
                      <div className="flex flex-col w-[20.57px] items-start relative">
                        <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto] mr-[-1.03px]">
                          <ToggleBase
                            buttonClassName="!h-[9.6px] !rounded-[4.8px] !bg-white !w-[9.6px]"
                            className="!h-[12px] !rounded-[7.2px] !p-[1.2px] !bg-[#a8adb5] !w-[21.6px]"
                            pressed={false}
                            size="sm"
                            stateProp="default"
                            theme="dark"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-[12px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-white rounded-[999px] border border-solid border-[#0000001a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-blacktext-1 text-[12px] tracking-[0.24px] leading-[14.4px] whitespace-nowrap">
                        Show map labels
                      </div>
                      <div className="flex flex-col w-[20.57px] items-start relative">
                        <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto] mr-[-1.03px]">
                          <ToggleBase
                            buttonClassName="!h-[9.6px] !rounded-[4.8px] !bg-secondaryset-2santa-feffffff !w-[9.6px]"
                            className="!h-[12px] !rounded-[7.2px] !p-[1.2px] !bg-primarygambogeprimary-f4910f !w-[21.6px]"
                            pressed
                            size="sm"
                            stateProp="default"
                            theme="dark"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[8px] pt-[20px] pb-[60px] px-[20px] absolute top-[410px] left-[878px] rounded-[4px] shadow-[0px_15px_40px_#00000099,0px_5px_10px_#00000066,0px_0px_0px_1px_#00000099]">
                <div className="inline-flex items-start gap-[8px] p-[6px] flex-[0_0_auto] rounded-[999px] relative bg-white">
                  <img
                    className="relative w-[16px] h-[16px]"
                    alt="Timelapse"
                    src="https://c.animaapp.com/LEqQ2zNo/img/timelapse@2x.png"
                  />
                </div>
                <div className="inline-flex items-start gap-[8px] p-[6px] flex-[0_0_auto] rounded-[999px] relative bg-white">
                  <img
                    className="relative w-[16px] h-[16px]"
                    alt="Fullscreen"
                    src="https://c.animaapp.com/LEqQ2zNo/img/fullscreen@2x.png"
                  />
                </div>
                <div className="inline-flex flex-col items-start rounded-[4px] relative flex-[0_0_auto]">
                  <div className="pt-[8px] pb-[6px] px-[6px] rounded-[999px_999px_0px_0px] border-b [border-bottom-style:solid] border-[#00000033] inline-flex items-start gap-[8px] relative flex-[0_0_auto] bg-white">
                    <img
                      className="relative w-[16px] h-[16px]"
                      alt="Add"
                      src="https://c.animaapp.com/LEqQ2zNo/img/add@2x.png"
                    />
                  </div>
                  <div className="pt-[6px] pb-[8px] px-[6px] rounded-[0px_0px_999px_999px] inline-flex items-start gap-[8px] relative flex-[0_0_auto] bg-white">
                    <img
                      className="relative w-[16px] h-[16px]"
                      alt="Remove"
                      src="https://c.animaapp.com/LEqQ2zNo/img/remove@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
