import React from 'react'

function ProjectDetail() {
  return (
    <div className='pt-[1.25rem] '>
    <div className="flex gap-5 justify-between self-stretch px-[1rem] py-[0.75rem] bg-white rounded-md border border-solid border-black border-opacity-25 max-md:flex-wrap">
    <div className="flex gap-4 justify-between my-auto max-md:flex-wrap">
      <div className="flex gap-2 text-sm">
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">Project name</div>
        <div className="text-Black-Text-1 font-roboto text-base font-normal leading-normal">Keweenaw Bay Indian Community</div>
      </div>
      <div className="shrink-0 bg-lime-500 h-[5px] rounded-[999px]" />
      <div className="flex gap-2">
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">Status</div>
        <div className="0">
          
        </div>
        <div className="text-Black-Text-1 font-roboto text-base font-normal leading-normal">4th of 20 years</div>
      </div>
      <div className="flex gap-2 text-sm">
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">Area</div>
        <div className="text-Black-Text-1 font-roboto text-base font-normal leading-normal">92.7 ha</div>
      </div>
      <div className="flex gap-2 leading-[120%]">
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">Verra status</div>
        <div className="text-4E473E font-mulish text-xs font-bold leading-relaxed  uppercase rounded-full bg-yellow-400 flex p-[0.125rem] px-[0.5rem] justify-center items-center gap-[0.5rem]">
          Under Verification
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">Project code</div>
        <div className="text-gray-500 font-roboto text-base font-normal leading-relaxed">9856</div>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c28e292e22acc34480b141b04f186828920523577159f39f99cad68eee43771?"
      className="shrink-0 w-5 aspect-square"
    />
  </div>
  </div>
  )
}

export default ProjectDetail