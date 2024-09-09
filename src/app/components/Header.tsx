"use client"

import NavLink from "next/link"
import  {FaShoppingCart} from "react-icons/fa"
 import  {GiImperialCrown} from "react-icons/gi"
import {RiAccountCircleFill} from "react-icons/ri"
import { Badge } from "@/components/ui/badge"
import NavBarRecess from "../components/NavBarRecess"
 import Search from "../components/Search"
 import NavBar from "../components/NavBar"


  export default function Header() {
  
    return (
        <header className="bg-[#090c9b] mb-[5em] w-full max-lg:h-32 h-44 fixed items-center  backdrop-blur-md z-20">
            <section className="flex mt-1 items-center max-lg:gap-1 gap-32 max-lg:px-1 px-5">
                <NavLink  className="font-mono flex max-lg:hidden hover:text-[#ffffff] items-center  text-[#e0c83d]" href="/">
                <GiImperialCrown size={130} />
                <h3 className=" text-[3rem] font-mono mt-[1em] font-bold">Monarch</h3>
                </NavLink>
                <NavLink  className=" font-mono flex-col items-center mb-1 text-[1.5rem] hidden  max-lg:flex  hover:text-[#ffffff]  text-[#e0c83d]" href="/">
                <GiImperialCrown size={90} />
                <h3 className="mt-1 text-[1.3rem] h-10 w-10 mr-5 font-bold">Monarch</h3>
                </NavLink>
                <Search/>
                <nav className="flex text-[gold] max-lg:ml-3 ml-36 items-center max-lg:gap-1 gap-10 max-lg:text-[1rem] text-lg font-bold">
                    <NavBar/>
                    <NavLink  className="flex hover:text-[#ffffff] items-center" href="/account" >
                    <RiAccountCircleFill size={35}/>  Account
                    </NavLink>
                    <NavLink  className="flex items-center hover:text-[#ffffff] relative animate-bounce " href="/cart">
                    <FaShoppingCart  size={35}/> Cart 
                    <Badge className="absolute rounded-full bottom-5 bg-[#000000] text-[gold]">0</Badge>
                    </NavLink>
                    <NavBarRecess/>
                </nav>
            </section>
            <section className="">
            <nav className=" text-[gold] lg:flex  max-lg:hidden mb-2 gap-36 px-20  items-center text-xl font-bold">
                <NavLink className="hover:text-[#ffffff]"  href="/dog">
                  Dogs
                 </NavLink>
                <NavLink className="hover:text-[#ffffff]"  href="/cat">
                Cats
               </NavLink>
                <NavLink className="hover:text-[#ffffff]"   href="/bird">
                Birds
                </NavLink>
                <NavLink className="hover:text-[#ffffff]"   href="/fish">
                Fishes
               </NavLink>

                <NavLink className="hover:text-[#ffffff]"   href="/horse">
                Horses
               </NavLink>   
                <NavLink  href="/about" className="hover:text-[#ffffff]">
                Pharmacy
               </NavLink>     
                <h3 className="hover:text-[#ffffff]">
                Services
               </h3>               
            </nav>
            </section>
           
        </header>
    )
  }