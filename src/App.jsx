import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tequenio from "./assets/tequeno.jpg"
import {
  RiMenu3Fill,
  RiUser3Line, 
  RiAddLine, 
  RiSettings3Line, 
  RiCloseCircleLine,
  RiArrowDownSLine,
  RiSearchLine
} from "react-icons/ri";

function App() {

  const [showMenu, setShowMenu] = useState(false);
  //const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
 
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Mobile Menu */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-white px-8 py-4 flex item-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        
        <button className="p-2">
          <RiAddLine />
        </button>
        
        <button className="p-2">
          <RiSettings3Line/>
        </button>
        
        <button onClick={toggleMenu} className="p-2">
           { showMenu ? <RiCloseCircleLine /> : <RiMenu3Fill /> }       
        </button>
      </nav>
      <main className="lg:pl-36 grid grid-cols-1 lg:grid-cols-8 text-white p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* Header */}
          <header className="">
            {/* Title & search */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between">
              <div>
                <h2 className="text-2xl text-gray-300">Tequepops</h2>
                <p className="text-gray-500">20 Abril 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute text-gray-300 left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    className="bg-[#1F1D2B] text-gray-300 rounded-lg w-full pl-10 pr-4 py-2 outline-none"
                    placeholder="Buscar" 
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className=" flex items-center justify-between border-b mb-6 md:justify-start md:gap-8">
              <a 
                href="#" 
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute 
                before:bg-[#85d73d] before:left-0 before:-bottom-[1px] text-[#85d73d] before:rounded-full"
              > 
                Tequeños 
              </a>
              <a href="#" className="py-2 pr-4"> Pastelitos </a>
              <a href="#" className="py-2 pr-4"> Mandocas </a>
              <a href="#" className="py-2 pr-4"> Tequeyoyos </a>
            </nav>   
          </header>
          {/* Title Content */}
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-xl">Elige el Tequeño</h2>
            <button className="flex items-center gap-4 bg-[#1F1D2B] py-2 px-4 rounded-md"> 
              < RiArrowDownSLine /> Otros 
            </button>
          </div> 
          {/* Content */} 
          <div className="p-8 grid grid-col-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
            {/* Card*/}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
              <img 
                src={Tequenio} 
                className="w-40 h-40 -mt-20 rounded-xl shadow-2xl " 
              />
              <p className="text-xl">Tequeños <br/> 12 unidades</p>
              <span className="text-gray-400">$1230 ARS</span>
              <p className="text-gray-600">10 Disponibles</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 fixed lg:static right-0">
          Carrito
        </div>
      </main>
    </div>
  )
}

export default App;
