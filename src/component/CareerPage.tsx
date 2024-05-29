import Image from 'next/image'
import React from 'react'
import img from "../../public/navbar.jpeg"
import image from "../../public/header.png"
import { FaArrowRightLong } from "react-icons/fa6";
import classes from "./careerPage.module.scss"
const CareerPage = () => {
  return (
    <div  className={classes.main}>
        <nav style={{height:"92px"}}>
          <Image
            src={img}
            height={0}
            width={0}
            alt="navbar"
            style={{width:"100%"}}
          />
        </nav>
        <div className={classes.container}>
            <div  className={classes.left_container}>
              <p style={{color:"black", backgroundColor:"#d1fae5",borderRadius:"10px",padding:"6px 6px",display:"flex",alignItems:"center",gap:"6px",width:"max-content"}}>
                👋 We are hiring! View open roles
                <FaArrowRightLong style={{backgroundColor:"#d1fae5"}}/>
              </p>
              <h1 className={classes.heading1}  style={{margin:"0px",color:"black", fontSize:"4rem",maxWidth:"max-content"}}>Flipr Careers</h1>

              <p style={{color:"black", width:"100%"}}>
                Welcome to the Flipr careers page! We are excited to find talented individuals passionate about technology and eager to grow their careers.
              </p>
              <button className={classes.btn1} style={{width:"max-content",backgroundColor:"rgba(79, 70, 229,1)", color:"white"}}>
                Read More
              </button>

            </div>
            <div className={classes.right_container}>
                <Image
                  height={590}
                  width={590}
                  src={image}
                  alt="image"
                  className={classes.image_right}
                />
            </div>
        </div>
    </div>
  )
}

export default CareerPage