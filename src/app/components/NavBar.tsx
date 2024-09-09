"use client"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import NavLink from "next/link"
  import {FaRocketchat} from "react-icons/fa"

export default function NavBar() {
    return (
        <HoverCard>
        <HoverCardTrigger className="flex hover:text-[#ffffff] text-center items-center ">
       <section className="flex flex-col"><h3> 24/7</h3> <h3>Help</h3> </section>  <FaRocketchat size={35}/>
        </HoverCardTrigger>
        <HoverCardContent>
        <h3>Get help from our experts </h3>
        <h3 className="font-bold text-[1.2rem]">1-800-672 4399</h3>
        <section className="flex">
            <NavLink href="/chat">chat live</NavLink>
            <NavLink href="/chat">Contact Us</NavLink>
        </section>
       <section className="flex">
       <NavLink href="/order">Track Order</NavLink>
        <NavLink href="/faqs">  -  FAQs</NavLink>
        <NavLink href="/shipinfo">  -   Shipping info</NavLink>
       </section>
       
        </HoverCardContent>
    </HoverCard>
    )
}