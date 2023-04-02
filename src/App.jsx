import Sidebar from "./components/Sidebar";
import { RiMenu3Fill } from "react-icons/ri";

function App() {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/* Mobile Menu */}
      <nav className="bg-[#1F1D2B] lg:hidden">
        <button>
          <RiMenu3Fill />
        </button>
      </nav>
    </div>
  )
}

export default App;
