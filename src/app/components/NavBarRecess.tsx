"use client"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import NavLink from "next/link"
  import {IoMdMenu} from "react-icons/io"

export default function NavBarRecess() {
    return (
        <HoverCard>
        <HoverCardTrigger className="lg:hidden  text-[gold]">
         < IoMdMenu size={40}/>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col gap-2 bg-[#000000] text-[gold] text-center font-bold">
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1 " href="/dog">Dogs</NavLink>
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/cat">Cats</NavLink>
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/bird">Birds</NavLink>
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/horse">Horses</NavLink>
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/pharmacy">Pharmacy</NavLink>
            <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/service">Services</NavLink>
        </HoverCardContent>
    </HoverCard>
    )
}