import React from 'react'

function Titlebar() {
  return (
    <div className="flex gap-2 justify-between px-20 py-3 bg-teal-800 max-md:flex-wrap max-md:px-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccf3a1cc0a566dbb0f2797412b8943b499bb67af0a34dca7343f23a2ca7c2926?"
      className="shrink-0 self-start max-w-full aspect-[3.85] w-[121px]"
    />
    <div className="flex gap-2">
      <div className="flex justify-center items-center p-1.5 rounded-md border border-teal-700 border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76856dcf21d4aeb648723723af9818e161158e9f42e1512297a679bc81df8571?"
          className="w-5 aspect-square"
        />
      </div>
      <div className="flex justify-center items-center p-1.5 rounded-md border border-teal-700 border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28527ce5b826c7786dccf99731f3855b4724d68bf1220bcd9ff6e5e247b37be?"
          className="w-5 aspect-square"
        />
      </div>
      <div className="flex justify-center items-center p-1.5 rounded-md border border-teal-700 border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea084dc71a69b5305ecd2c36312d9c6ae0486d595b0b43b099ee246052bd8474?"
          className="w-5 aspect-square"
        />
      </div>
    </div>
  </div>
  )
}

export default Titlebar