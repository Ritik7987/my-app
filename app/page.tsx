"use client"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
// import '@mantine/core/styles.css'
import { Box, Button, Flex, Title } from "@mantine/core";
import image from "@/public/header.png"
import { useState } from "react";
import img from "@/public/navbar.jpeg"

export default function Home() {
  return (
    <div  className="main">
        <nav style={{height:"92px"}}>
          <Image
            src={img}
            height={0}
            width={0}
            alt="navbar"
            style={{width:"100%"}}
          />
        </nav>
        <div className="container">
            <div  className="left_container">
              <p style={{color:"black", backgroundColor:"#d1fae5",borderRadius:"10px",padding:"6px 6px",display:"flex",alignItems:"center",gap:"6px",width:"max-content"}}>
                👋 We are hiring! View open roles
                <FaArrowRightLong style={{backgroundColor:"#d1fae5"}}/>
              </p>
              <h1 className="heading1"  style={{margin:"0px",color:"black", fontSize:"4rem",maxWidth:"max-content"}}>Flipr Careers</h1>

              <p style={{color:"black", width:"100%"}}>
                Welcome to the Flipr careers page! We are excited to find talented individuals passionate about technology and eager to grow their careers.
              </p>
              <button className="btn1" style={{width:"max-content",backgroundColor:"rgba(79, 70, 229,1)", color:"white"}}>
                Read More
              </button>

            </div>
            <div className="right_container">
                <Image
                  height={590}
                  width={590}
                  src={image}
                  alt="image"
                  className="image_right"
                />
            </div>
        </div>
    </div>
  );
}
