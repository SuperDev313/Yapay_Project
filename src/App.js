import logo from './logo.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { ContentDetails } from './components/ContentDetails'
import { ContentNumber } from './components/ContentNumber'
import { AddProduct } from './components/AddProduct'

function App() {
  return (
    <div className='flex flex-row bg-cover bg-[url(background.png)]'>
      {/* <SideBar /> */}
      <div className='min-w-[100px]'></div>
      <div className='grid grid-cols-2 gap-7 '>
        {/* <div className='flex flex-col bg-[#3c3c3c66] p-[48px] rounded-[36px] mt-[183px] gap-[25px]'>
          <ContentDetails />
          <ContentNumber />
          <div className='flex justify-center'>
            <button className='px-[30px] py-[18px] bg-white text-[#232323] text-center text-Inter text-[15px] font-medium tracking-[-0.26px] rounded-[59px] min-w-[414px]'>
              Onayla
            </button>
          </div>
        </div> */}
        <AddProduct />
        <div className='flex'></div>
      </div>
    </div>
  )
}

export default App
