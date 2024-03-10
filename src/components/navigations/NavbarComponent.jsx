import { BellDot } from "lucide-react";
import React from "react";

const NavbarComponent = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <a className=" text-2xl font-bold">Portfolio</a>
        </div>
        <div className="flex-none gap-x-6">
          <div className="">
            <BellDot />
          </div>
          
          {/* profile image */}
          <div className=" mr-4 dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://cdnb.artstation.com/p/assets/images/images/034/457/413/large/shin-min-jeong-.jpg?1612345200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
