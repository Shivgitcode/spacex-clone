import { useState } from "react";
import { logo } from "../../assets";
import { navbar } from "../../constants";
import { motion } from "framer-motion"

export default function Navbar() {

    const [isHovered, setIsHovered] = useState(true)
    return (
        <div className="w-screen h-full">
            <div className="w-[73.5%] mx-auto flex items-center justify-start py-[2rem]">

                <img src={logo} alt="oops" className="w-[210px] h-[26px] mr-[25px] mb-[13px]" />

                <ul className="flex justify-center items-baseline h-full">
                    {
                        navbar.map((el) => {
                            return <div key={el.id} onMouseEnter={() => { setIsHovered(false) }} onMouseLeave={() => { setIsHovered(true) }}><li className=" text-[1rem] uppercase font-semibold text-white leading-[26px] mx-[12px] ">{el.name}</li> <motion.div animate={{ width: isHovered ? "0%" : "100%" }} exit="100%" className="bg-white h-[2px]"></motion.div></div>
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
