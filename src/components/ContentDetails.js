import React from 'react'

export const ContentDetails = () => {
  return (
    <div className='p-[48px] border-[1px] border-[#ffffff33] bg-[#ffffff33] rounded-[22px]'>
      <div className='flex flex-col gap-[14px] min-w-[414px]'>
        <div className='flex gap-6 items-center'>
          <span className='text-center font-Inter text-2xl font-semibold text-white'>İçerik Detayları</span>
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
            <span className='text-[#ffffffcc] text-base font-medium'>İçerik Türü</span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              video
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              Fotoğraf
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div className='max-w-[434px]'>
            <span className='text-[#ffffffcc] text-base font-medium'>
              {`İçeriği Instagram’da Influencer ile ortak paylaşmak istiyor musunuz? (Başvuru sayınızı azaltabilir)`}
            </span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              {`Copy Evet, ortak paylaşmak istiyorum`}
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              {`Paylaşım istemiyorum`}
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>İçerik Uzunluğu?</span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              15 Saniye
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              30 Saniye
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              60 Saniye
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>Altyazı</span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              Altyazılı
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              Altyazısız
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>Müzik</span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              Müzikli
            </button>
            <button className='px-[15px] h-[38px] text-[#8F8F8F] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              Müziksiz
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>Kiminle çalışmak istiyorsunuz?</span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              Erkek
            </button>
            <button className='px-[15px] h-[38px] text-white text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              Kadın
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>
              Influencer’ın videoda gözükmesini istiyor musunuz?
            </span>
          </div>
          <div className='flex gap-[8px]'>
            <button className='px-[15px] h-[38px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              Evet
            </button>
            <button className='px-[15px] h-[38px] text-white text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              Hayır
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>İçerik Boyutu</span>
          </div>
          <div className='flex gap-[8px]'>
            <div className='px-[15px] py-[14px] bg-white text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px]'>
              <div className='flex flex-col h-full justify-end'>
                <div className='flex flex-col gap-y-[8px]'>
                  <div className='bg-black w-[36.025px] h-[36.025px]'></div>
                  <p className='text-center'>1:1</p>
                </div>
              </div>
            </div>
            <div className='px-[15px] py-[14px] text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              <div className='flex flex-col h-full justify-end'>
                <div className='flex flex-col gap-y-[8px]'>
                  <div className='bg-white w-[32.855px] h-[41.068px]'></div>
                  <p className='text-center text-white'>4:5</p>
                </div>
              </div>
            </div>
            <div className='px-[15px] py-[14px] text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              <div className='flex flex-col h-full justify-end'>
                <div className='flex flex-col gap-y-[8px]'>
                  <div className='bg-white w-[32.422px] h-[57.64px]'></div>
                  <p className='text-center text-white'>9:16</p>
                </div>
              </div>
            </div>
            <div className='px-[15px] py-[14px] text-[#232323] text-center text-Inter text-[13px] font-medium tracking-[-0.26px] rounded-[10px] border-[1.4px] border-[#ffffff33]'>
              <div className='flex flex-col h-full justify-end'>
                <div className='flex flex-col gap-y-[8px]'>
                  <div className='bg-white w-[57.64px] h-[32.422px]'></div>
                  <p className='text-center text-white'>16:9</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>{`Yaratıcı üreteceği içerikte neler yapmalı?`}</span>
          </div>
          <div className='flex gap-[8px]'>
            <textarea
              className='px-[15px] py-[13px] h-[160px] w-full gap-[23px] flex items-start text-sm text-[#8F8F8F] border-[1px] rounded-[8px] border-[#E6E6E6] bg-transparent placeholder:text-[#ffffff66]'
              placeholder={`Sahne 1: Ürünü kutudan çıkarır  \nSahne 2: Ürünü ayna karşısında tutar \n Sahne3: Ürün üstündeyken ayna karşısında gösterir  \n:.`}
            ></textarea>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>{`Yaratıcı üreteceği içerikte nelerden bahsetmeli?`}</span>
          </div>
          <div className='flex gap-[8px]'>
            <textarea
              className='px-[15px] py-[13px] h-[117px] w-full gap-[23px] flex items-start text-sm text-[#8F8F8F] border-[1px] rounded-[8px] border-[#E6E6E6] bg-transparent placeholder:text-[#ffffff66]'
              placeholder={`Ürünlerin %100 pamuktan yapıldığından ve çok rahat olduğundan bahsedilmeli.`}
            ></textarea>
          </div>
        </div>

        <div className='flex flex-col gap-[8px]'>
          <div>
            <span className='text-[#ffffffcc] text-base font-medium'>{`Örnek içerik`}</span>
          </div>
          <div className='flex gap-[8px]'>
            <textarea
              className='px-[15px] py-[13px] h-[68px] w-full gap-[23px] flex items-start text-sm text-[#8F8F8F] border-[1px] rounded-[8px] border-[#E6E6E6] bg-transparent placeholder:text-[#ffffff66]'
              placeholder={`Beğendiğiniz ve içerik üreticisine örnek olarak göstermek istediğiniz bir video varsa linkini buraya yazabilirsiniz.`}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
