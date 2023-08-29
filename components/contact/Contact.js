import React from "react"
import Image from "next/image"
import style from "./contact.module.css"

const Contact = () => {
    return (
        <div className={style["contact"]}>
            <div>Find us on:</div>
            <div>
                <Image src={"/assets/instagram.png"} alt="Instagram" width={25} height={25} />
                <Image src={"/assets/facebook.png"} alt="Instagram" width={25} height={25} />
                <Image src={"/assets/tiktok.png"} alt="Instagram" width={25} height={25} />
            </div>
        </div>
    )
}

export default Contact