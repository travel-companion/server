import { Disclosure } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'

import { GiHamburgerMenu } from "react-icons/gi"
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideBar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-insert focus:rind-white group hover:bg-gray-900">
          <GiHamburgerMenu className='block md:hidden h-6 w-6' aria-hidden="true" />
        </Disclosure.Button>
        <div className="p-7 w-1/2  h-screen bg-gray-900  z-20 fixed top-0 -left-100 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-200 duration-200" >
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
              Admin Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/home">
                  <a className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSpaceDashboard className="text-2xl text-white group-hover:text-white " />
                    <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                      Dashboard
                    </h3>
                  </a>
              </Link>
              <Link href="/users">
              <a className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Users
                </h3>
              </a>
              </Link>
              <Link href="/chat">
              <a className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Chat rooms
                </h3>
              </a>
              </Link>
              <Link href="lines">
              <a className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Station
                </h3>
              </a>
              </Link>
              <Link href="/posts">
              <a className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  posts
                </h3>
              </a>
              </Link>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Integration
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  More
                </h3>
              </div>
            </div>
            <Link href="/">
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-amber-300 font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default SideBar