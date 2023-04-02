import React from "react";
import { RiHome6Line } from "react-icons/ri";


const Sidebar = () => {
    return (
      <div className="bg-[#1e2029] fixed left-0 top-0 w-28 h-full"> 
        <ul className="pl-15">

          <li>
          <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Store</h1> 
          </li>

          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a href="#" className="bg-[#85d73d] p-4 flex justify-center rounded-xl text-white">
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group">
            <a href="#" className="group-hover:bg-[#85d73d] p-4 flex justify-center rounded-xl text-white group-hover:text-white">
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

        </ul>
			</div>
    )
  };
   

export default Sidebar;
