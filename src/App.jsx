import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiSettings3Line, RiCloseCircleLine } from "react-icons/ri";

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
    </div>
  )
}

export default App;
