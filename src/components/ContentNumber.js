import React from 'react'

export const ContentNumber = () => {
  return (
    <div className='p-[48px] border-[1px] border-[#ffffff33] bg-[#ffffff33] rounded-[22px]'>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex justify-start'>
          <span className='text-center font-Inter text-2xl font-semibold text-white'>İçerik Detayları</span>
        </div>

        <div className='flex flex-row justify-center items-center jpx-[24px] py-[11px] gap-[27px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[12px]'>
          <span className='flex justify-end'>{`UGC Sayısı`}</span>
          <div className='flex flex-row items-center gap-[6px]'>
            <div className=' flex items-center justify-center bg-[#3c3c3c] h-[20px] w-[20px] rounded-[50%]'>
              <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='minus'>
                  <path
                    id='Vector'
                    d='M4.5 8.63965H12.5'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
              </svg>
            </div>
            <div className='h-[34px] w-[34px] p-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
              <span>1</span>
            </div>
            <div className='bg-[#3c3c3c] h-[20px] w-[20px] rounded-[50%] flex items-center justify-center'>
              <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='plus'>
                  <path
                    id='Vector'
                    d='M8.5 4.63965V12.6396'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    id='Vector_2'
                    d='M4.5 8.63965H12.5'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
              </svg>
            </div>
          </div>
          <span className='flex justify-end'>2.000₺ + KDV</span>
        </div>
      </div>
    </div>
  )
}
