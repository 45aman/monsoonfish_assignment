import React from 'react'

function Button() {
  return (
    <div className='pt-[1.25rem]'>
    <div className="flex gap-2 pl-[1.25rem] pr-[1.25rem] pt-[0.63rem] pb-[0.63rem] text-sm font-bold leading-4 text-white whitespace-nowrap bg-amber-500 rounded-md">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9f0fb72faab6b0d8b65d363ef4298cf24b85ac43722f8ec4c5c86872677066?"
      className="shrink-0 my-auto aspect-square fill-white w-[13px]"
    />
    <div className='text-White-Text-3 font-roboto font-bold text-sm leading-relaxed'>Download</div>
  </div>
  </div>
  )
}

export default Button