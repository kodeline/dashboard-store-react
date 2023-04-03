import React from "react";
import { RiHome6Line, RiPieChart2Line, RiMailLine, RiNotification4Line, RiSettings3Line, RiLogoutBoxRLine } from "react-icons/ri";
import { HiOutlineReceiptPercent } from "react-icons/hi2";



const Sidebar = () => {
  return ( 
    <div className="bg-[#1e2029] fixed left-0 top-0 w-28 h-full py-6 flex flex-col justify-between rounded-tr-2xl rounded-br-2xl z-50">
      <div>
        <ul className="pl-15">

          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Store</h1>
          </li>

          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a href="#" className="bg-[#85d73d] p-4 flex justify-center rounded-xl text-white">
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < HiOutlineReceiptPercent className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < RiPieChart2Line className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < RiMailLine className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < RiNotification4Line className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < RiSettings3Line className="text-2xl" />
            </a>
          </li>

        </ul>
      </div>
      
      <div>
        <ul>
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-[#85d73d] group-hover:text-white transition-colors">
              < RiLogoutBoxRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
};


export default Sidebar;
