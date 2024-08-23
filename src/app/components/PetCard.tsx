
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

type PetStore = {
    image: string,
    name: string,
    history: string,
}
export default function PetCard({image, name, history}: PetStore) {
    return(
        <div>
            <HoverCard>
                <HoverCardTrigger>
                        <Image alt="Pet Cards" className=" border-1 border-solid w-[10em] h-32 rounded-full" width={300} height={600} src={image}/>
                </HoverCardTrigger>
                <HoverCardContent className="w-[10%]  text-[1.2rem] max-lg:text-[.7rem] font-bold text-[#000000]">
                     {history}
                </HoverCardContent>
            </HoverCard>
         
            <h3 className="text-center font-bold">{name}</h3>
        </div>
    )
}