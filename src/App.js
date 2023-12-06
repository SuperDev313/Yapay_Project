import './App.css'
import { SideBar } from './components/SideBar'
import { AddProduct } from './components/AddProduct'
import { AddService } from './components/AddService'

function App() {
  return (
    <div className='flex flex-row bg-cover bg-[url(background.png)]'>
      {/* <SideBar /> */}
      <div className='min-w-[100px]'></div>
      <div className='grid grid-cols-2 gap-7 '>
        <AddProduct />
        {/* <AddService /> */}
        <div className='flex'></div>
      </div>
    </div>
  )
}

export default App
