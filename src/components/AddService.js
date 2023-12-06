import React from 'react'
import { ContentDetails } from './ContentDetails'
import { ContentNumber } from './ContentNumber'

export const AddService = () => {
  return (
    <div className='flex flex-col mt-[96px] gap-6'>
      <div className='flex flex-col'>
        <span className='text-[#ffffffcc] text-base font-medium'>Tanıtılacak Ürünler</span>
        <span className='font-Inter text-[36px] font-semibold text-white'>{`UGC - Servis/Uygulama Ekle`}</span>
      </div>
      <div className='flex flex-col bg-[#3c3c3c66] p-[48px] rounded-[36px] gap-[25px]'>
        <div className='p-[48px] border-[1px] border-[#ffffff33] bg-[#ffffff33] rounded-[22px]'>
          <div className='flex flex-col gap-[14px] min-w-[414px]'>
            <div className='flex gap-6 items-center'>
              <span className='text-center font-Inter text-2xl font-semibold text-white'>Servis/Uygulama Adı</span>
              <div>
                <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g id='Frame 7640'>
                    <g clip-path='url(#clip0_109_380)'>
                      <rect
                        id='Rectangle 1143'
                        x='28'
                        y='0.5'
                        width='28'
                        height='28'
                        transform='rotate(90 28 0.5)'
                        fill='white'
                        fill-opacity='0.2'
                      />
                      <path
                        id='Vector'
                        d='M20 12L14 18L8 12'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id='clip0_109_380'>
                      <rect x='28' y='0.5' width='28' height='28' rx='14' transform='rotate(90 28 0.5)' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <div>
                <span className='text-[#ffffffcc] text-base font-medium'>Ürün Adı</span>
              </div>
              <div className='flex gap-[8px]'>
                <input
                  type='text'
                  className='px-[15px] py-[13px] w-full h-[43px] text-white rounded-[8px] border-[1.4px] border-[#ffffff33] bg-transparent placeholder:text-[#8F8F8F] placeholder:text-sm'
                  placeholder='placeholder'
                />
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <div>
                <span className='text-[#ffffffcc] text-base font-medium'>Marka</span>
              </div>
              <div className='flex gap-[8px]'>
                <input
                  type='text'
                  className='px-[15px] py-[13px] w-full h-[43px] text-[#8F8F8F] rounded-[8px] border-[1.4px] border-[#ffffff33] bg-transparent placeholder:text-[#8F8F8F] placeholder:text-sm'
                  placeholder='Mycros Çanta'
                />
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <span className='text-[#ffffffcc] text-base font-medium'>Ürün Satış Fiyatı</span>
              <button className='px-[15px] py-[13px] h-[43px] text-[#8F8F8F] text-center text-Inter text-[13px] w-[76px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
                {`1449 ₺`}
              </button>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <div>
                <span className='text-[#ffffffcc] text-base font-medium'>Ürün Linki</span>
              </div>
              <div className='flex gap-[8px]'>
                <input
                  type='text'
                  className='px-[15px] py-[13px] w-full h-[43px] text-[#8F8F8F] rounded-[8px] border-[1.4px] border-[#ffffff33] bg-transparent placeholder:text-[#8F8F8F] placeholder:text-sm'
                  placeholder='mycurunlinki.com/urun'
                />
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <div>
                <span className='text-[#ffffffcc] text-base font-medium'>Ürün Kategorisi</span>
              </div>
              <div className='flex gap-[8px]'>
                <div
                  type='text'
                  className='flex justify-end px-[15px] py-[13px] w-full text-white rounded-[8px] border-[1.4px] border-[#ffffff33] bg-transparent'
                >
                  <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='Frame 7640'>
                      <g clip-path='url(#clip0_109_380)'>
                        <rect
                          id='Rectangle 1143'
                          x='28'
                          y='0.5'
                          width='28'
                          height='28'
                          transform='rotate(90 28 0.5)'
                          fill='white'
                          fill-opacity='0.2'
                        />
                        <path
                          id='Vector'
                          d='M20 12L14 18L8 12'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id='clip0_109_380'>
                        <rect
                          x='28'
                          y='0.5'
                          width='28'
                          height='28'
                          rx='14'
                          transform='rotate(90 28 0.5)'
                          fill='white'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <span className='text-[#ffffffcc] text-base font-medium'>Ürün Fotoğrafı</span>
              <button className='px-[15px] py-[13px] h-[43px] text-white text-center text-Inter text-[13px] w-full font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
                {`Ürün Fotoğrafı Seç`}
              </button>
            </div>
          </div>
        </div>
        <ContentDetails />
        <ContentNumber />
        <div className='flex justify-center'>
          <button className='px-[30px] py-[18px] bg-white text-[#232323] text-center text-Inter text-[15px] font-medium tracking-[-0.26px] rounded-[59px] min-w-[414px]'>
            Onayla
          </button>
        </div>
      </div>
    </div>
  )
}
